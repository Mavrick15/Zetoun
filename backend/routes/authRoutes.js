const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { logger } = require('../log/logger');
const { validationResult } = require('express-validator');
const { validateUserSignup, validateUserLogin } = require('../middleware/validation');
const { protect } = require('../middleware/authMiddleware');
const crypto = require('crypto');
const { sendVerificationEmail } = require('../controllers/emailService');

const API_MESSAGES = {
  SIGNUP_VALIDATION_ERROR: 'Erreurs de validation lors de l\'inscription',
  EMAIL_EXISTS: 'Un utilisateur avec cet email existe déjà',
  USER_CREATED_SUCCESS: 'Inscription réussie ! Un email de vérification a été envoyé à votre adresse. Veuillez vérifier votre boîte de réception (et vos spams).',
  VERIFICATION_EMAIL_SEND_FAIL: "Erreur interne du serveur. Impossible d'envoyer l'email de vérification.",
  LOGIN_VALIDATION_ERROR: 'Erreurs de validation lors de la connexion',
  INVALID_CREDENTIALS: 'Email ou mot de passe incorrect',
  EMAIL_NOT_VERIFIED: 'Votre compte n\'est pas vérifié. Veuillez vérifier votre boîte de réception pour l\'email de vérification.',
  LOGIN_SUCCESS: 'Connexion réussie',
  PROFILE_USER_MISSING: 'Non autorisé: Informations utilisateur manquantes.',
  VERIFICATION_SUCCESS: 'Votre email a été vérifié avec succès ! Vous pouvez maintenant vous connecter.',
  VERIFICATION_LINK_EXPIRED: 'Le lien de vérification est invalide ou a expiré.',
  VERIFICATION_TOKEN_NOT_FOUND: 'Token de vérification manquant.',
};

const LOG_MESSAGES = {
  SIGNUP_VALIDATION_WARN: 'Erreurs de validation lors de l\'inscription:',
  SIGNUP_EMAIL_EXISTS_WARN: 'Tentative d\'inscription avec un email existant.',
  SIGNUP_SUCCESS_INFO: (userName) => `Nouvel utilisateur inscrit: ${userName}. Email de vérification envoyé.`,
  ERROR_EMAIL_VERIFICATION_SEND: (email, error) => `Erreur lors de l'envoi de l'email de vérification pour ${email}: ${error.message}`,
  SIGNUP_ERROR: 'Erreur lors de l\'inscription:',
  LOGIN_VALIDATION_WARN: 'Erreurs de validation lors de la connexion:',
  LOGIN_USER_NOT_FOUND_WARN: 'Tentative de connexion échouée (utilisateur non trouvé).',
  LOGIN_PASSWORD_INCORRECT_WARN: 'Tentative de connexion échouée (mot de passe incorrect).',
  LOGIN_EMAIL_NOT_VERIFIED_WARN: (email) => `Tentative de connexion échouée pour ${email}: email non vérifié.`,
  LOGIN_SUCCESS_INFO: 'Utilisateur connecté.',
  LOGIN_ERROR: 'Erreur lors de la connexion:',
  PROFILE_USER_UNDEFINED_ERROR: 'Erreur: req.user non défini dans la route de profil après protection.',
  PROFILE_ACCESS_INFO: 'Accès au profil utilisateur.',
  PROFILE_ERROR: 'Erreur lors de la récupération du profil:',
  VERIFICATION_TOKEN_MISSING: 'Tentative de vérification d\'email sans token.',
  VERIFICATION_USER_NOT_FOUND: (token) => `Vérification échouée: utilisateur non trouvé ou token expiré pour le token ${token}.`,
  VERIFICATION_SUCCESS_INFO: (email) => `Email vérifié avec succès pour l'utilisateur: ${email}.`,
  VERIFICATION_ERROR: 'Erreur lors de la vérification de l\'email:',
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

router.post('/signup', validateUserSignup, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.warn(LOG_MESSAGES.SIGNUP_VALIDATION_WARN, { errors: errors.array() });
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      logger.warn(LOG_MESSAGES.SIGNUP_EMAIL_EXISTS_WARN, { email });
      return res.status(400).json({
        success: false,
        message: API_MESSAGES.EMAIL_EXISTS
      });
    }

    const verificationToken = crypto.randomBytes(32).toString('hex');
    const verificationTokenExpires = new Date(Date.now() + 3600000);

    const user = await User.create({
      name,
      email,
      password: password,
      isVerified: false,
      verificationToken,
      verificationTokenExpires,
    });

    try {
      await sendVerificationEmail({
        email: user.email,
        name: user.name,
        verificationToken: user.verificationToken,
      });
      logger.info(LOG_MESSAGES.SIGNUP_SUCCESS_INFO(user.name), { email: user.email, userId: user._id, userName: user.name });
      res.status(201).json({
        success: true,
        message: API_MESSAGES.USER_CREATED_SUCCESS,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (emailError) {
      logger.error(LOG_MESSAGES.ERROR_EMAIL_VERIFICATION_SEND(user.email, emailError), { error: emailError.message, stack: emailError.stack });
      return res.status(500).json({ success: false, message: API_MESSAGES.VERIFICATION_EMAIL_SEND_FAIL });
    }

  } catch (error) {
    logger.error(LOG_MESSAGES.SIGNUP_ERROR, { message: error.message, stack: error.stack });
    next(error);
  }
});

router.post('/login', validateUserLogin, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.warn(LOG_MESSAGES.LOGIN_VALIDATION_WARN, { errors: errors.array() });
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      logger.warn(LOG_MESSAGES.LOGIN_USER_NOT_FOUND_WARN, { email });
      return res.status(401).json({
        success: false,
        message: API_MESSAGES.INVALID_CREDENTIALS
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      logger.warn(LOG_MESSAGES.LOGIN_PASSWORD_INCORRECT_WARN, { email });
      return res.status(401).json({
        success: false,
        message: API_MESSAGES.INVALID_CREDENTIALS
      });
    }

    if (!user.isVerified) {
      logger.warn(LOG_MESSAGES.LOGIN_EMAIL_NOT_VERIFIED_WARN(user.email));
      return res.status(401).json({ success: false, message: API_MESSAGES.EMAIL_NOT_VERIFIED });
    }

    logger.info(LOG_MESSAGES.LOGIN_SUCCESS_INFO, { email: user.email, userId: user._id });

    res.status(200).json({
      success: true,
      message: API_MESSAGES.LOGIN_SUCCESS,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      },
      token: generateToken(user._id)
    });
  } catch (error) {
    logger.error(LOG_MESSAGES.LOGIN_ERROR, { message: error.message, stack: error.stack });
    next(error);
  }
});

router.get('/profile', protect, async (req, res, next) => {
  try {
    if (!req.user) {
      logger.error(LOG_MESSAGES.PROFILE_USER_UNDEFINED_ERROR);
      return res.status(401).json({ message: API_MESSAGES.PROFILE_USER_MISSING });
    }

    logger.info(LOG_MESSAGES.PROFILE_ACCESS_INFO, { email: req.user.email, userId: req.user._id });

    const userProfile = await User.findById(req.user._id).select('-password');
    if (!userProfile) {
      return res.status(404).json({ message: 'Utilisateur de profil non trouvé.' });
    }

    res.status(200).json({
      success: true,
      user: {
        _id: userProfile._id,
        name: userProfile.name,
        email: userProfile.email,
        role: userProfile.role,
        isVerified: userProfile.isVerified,
      }
    });
  } catch (error) {
    logger.error(LOG_MESSAGES.PROFILE_ERROR, { message: error.message, stack: error.stack });
    next(error);
  }
});

router.get('/verify-email', async (req, res, next) => {
  const { token } = req.query;

  if (!token) {
    logger.warn(LOG_MESSAGES.VERIFICATION_TOKEN_MISSING);
    return res.status(400).json({ success: false, message: API_MESSAGES.VERIFICATION_TOKEN_NOT_FOUND });
  }

  try {
    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      logger.warn(LOG_MESSAGES.VERIFICATION_USER_NOT_FOUND(token));
      return res.status(400).json({ success: false, message: API_MESSAGES.VERIFICATION_LINK_EXPIRED });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;

    await user.save();

    logger.info(LOG_MESSAGES.VERIFICATION_SUCCESS_INFO(user.email));
    res.status(200).json({ success: true, message: API_MESSAGES.VERIFICATION_SUCCESS });

  } catch (error) {
    logger.error(LOG_MESSAGES.VERIFICATION_ERROR, { message: error.message, stack: error.stack });
    next(error);
  }
});

module.exports = router;
