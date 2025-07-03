const TelecomOpinion = require('../models/TelecomOpinion');
const { logger } = require('../log/logger'); // Correction du chemin d'importation du logger

// @desc    Create new telecom opinion
// @route   POST /api/telecom-opinions
// @access  Public
const createTelecomOpinion = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Vérifier si un avis existe déjà avec cet email
    const existingOpinion = await TelecomOpinion.findOne({ email });

    if (existingOpinion) {
      logger.warn(`Tentative de soumission d'avis avec un email déjà utilisé: ${email}`);
      // Si l'email existe déjà, renvoyer une erreur 409 Conflict
      return res.status(409).json({
        success: false,
        message: 'Un avis a déjà été soumis avec cet email. Veuillez utiliser un autre email ou nous contacter si vous avez besoin de modifier votre avis précédent.'
      });
    }

    // 2. Si l'email n'est pas déjà utilisé, créer la nouvelle opinion
    const opinion = await TelecomOpinion.create({
      name,
      email,
      subject,
      message
    });

    logger.info('Nouvelle opinion enregistrée:', opinion);
    res.status(201).json({ success: true, data: opinion, message: 'Votre avis a été enregistré avec succès.' });

  } catch (error) {
    logger.error('Erreur lors de l\'enregistrement de l\'opinion:', error.message);
    next(error); // Passer l'erreur au middleware errorHandler
  }
};

module.exports = {
  createTelecomOpinion
};
