// middleware/validation.js
const { body, validationResult } = require('express-validator');

const validateCreateFormation = [
  body('title')
    .notEmpty()
    .withMessage('Le titre est requis'),
  body('description')
    .notEmpty()
    .withMessage('La description est requise'),
  body('date')
    .notEmpty()
    .withMessage('La date est requise'),
  body('location')
    .notEmpty()
    .withMessage('Le lieu est requis'),
  body('duration')
    .notEmpty()
    .withMessage('La durée est requise'),
  body('instructor')
    .notEmpty()
    .withMessage('Le nom du formateur est requis'),
  body('price')
    .notEmpty()
    .withMessage('Le prix est requis'),
  body('seats')
    .isInt({ min: 1 })
    .withMessage('Le nombre de places doit être au moins 1'),
  body('level')
    .isIn(['Débutant', 'Intermédiaire', 'Avancé'])
    .withMessage('Le niveau doit être Débutant, Intermédiaire ou Avancé'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateTelecomOpinion = [
  body('name').notEmpty().withMessage('Le nom est requis'),
  body('email').isEmail().withMessage('L\'email doit être valide'),
  body('subject').notEmpty().withMessage('Le sujet est requis'),
  body('message').notEmpty().withMessage('Le message est requis'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateCreateFormation, validateTelecomOpinion };
