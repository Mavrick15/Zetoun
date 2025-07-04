const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { logger } = require('../log/logger');
const { validationResult } = require('express-validator');
const { validateUserSignup, validateUserLogin } = require('../middleware/validation');
const { protect } = require('../middleware/authMiddleware');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

router.post('/signup', validateUserSignup, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.warn('Erreurs de validation lors de l\'inscription:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      logger.warn(`Tentative d'inscription avec un email existant: ${email}`);
      return res.status(400).json({
        success: false,
        message: 'Un utilisateur avec cet email existe déjà'
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    logger.info(`Nouvel utilisateur inscrit: ${email} (ID: ${user._id})`);

    res.status(201).json({
      success: true,
      message: 'Utilisateur créé avec succès',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token: generateToken(user._id)
    });
  } catch (error) {
    logger.error('Erreur lors de l\'inscription:', error.message);
    next(error);
  }
});

router.post('/login', validateUserLogin, async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.warn('Erreurs de validation lors de la connexion:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      logger.warn(`Tentative de connexion échouée pour l'email: ${email} (utilisateur non trouvé)`);
      return res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      logger.warn(`Tentative de connexion échouée pour l'email: ${email} (mot de passe incorrect)`);
      return res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
    }

    logger.info(`Utilisateur connecté: ${email} (ID: ${user._id})`);

    res.status(200).json({
      success: true,
      message: 'Connexion réussie',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token: generateToken(user._id)
    });
  } catch (error) {
    logger.error('Erreur lors de la connexion:', error.message);
    next(error);
  }
});

router.get('/profile', protect, async (req, res, next) => {
  try {
    if (!req.user) {
      logger.error('Erreur: req.user non défini dans la route de profil après protection.');
      return res.status(401).json({ message: 'Non autorisé: Informations utilisateur manquantes.' });
    }

    logger.info(`Accès au profil utilisateur: ${req.user.email} (ID: ${req.user._id})`);

    res.status(200).json({
      success: true,
      user: {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role
      }
    });
  } catch (error) {
    logger.error('Erreur lors de la récupération du profil:', error.message);
    next(error);
  }
});

module.exports = router;
