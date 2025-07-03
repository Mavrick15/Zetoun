const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { logger } = require('../log/logger');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Sign up route
router.post('/signup', async (req, res, next) => { // Ajout de 'next'
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      logger.warn(`Tentative d'inscription avec un email existant: ${email}`);
      return res.status(400).json({
        success: false,
        message: 'Un utilisateur avec cet email existe déjà'
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    logger.info(`Nouvel utilisateur inscrit: ${email} (ID: ${user._id})`);

    // Return success response with user and token
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
    next(error); // Passer l'erreur au middleware d'erreur
  }
});

// Login route
router.post('/login', async (req, res, next) => { // Ajout de 'next'
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      logger.warn(`Tentative de connexion échouée pour l'email: ${email} (utilisateur non trouvé)`);
      return res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      logger.warn(`Tentative de connexion échouée pour l'email: ${email} (mot de passe incorrect)`);
      return res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
    }

    logger.info(`Utilisateur connecté: ${email} (ID: ${user._id})`);

    // Return success response with user and token
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
    next(error); // Passer l'erreur au middleware d'erreur
  }
});

// Get user profile route - requires authentication
router.get('/profile', async (req, res, next) => { // Ajout de 'next'
  try {
    logger.info('Accès au profil utilisateur (demo)');

    // For demo purposes, we'll return a mock response
    res.status(200).json({
      success: true,
      user: {
        name: 'Utilisateur Demo',
        email: 'demo@example.com',
      }
    });
  } catch (error) {
    logger.error('Erreur lors de la récupération du profil:', error.message);
    next(error); // Passer l'erreur au middleware d'erreur
  }
});

module.exports = router;
