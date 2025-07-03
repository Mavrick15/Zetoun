const Formation = require('../models/Formation');
const { logger } = require('../log/logger');

// @desc    Get all formations with pagination
// @route   GET /api/formations
// @access  Public
const getFormations = async (req, res, next) => { // Ajout de 'next'
  try {
    // Pagination parameters
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    // Optional filters
    const filters = {};
    if (req.query.level) filters.level = req.query.level;
    if (req.query.location) filters.location = { $regex: req.query.location, $options: 'i' };
    if (req.query.search) {
      filters.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { description: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    // Get formations with pagination
    const formations = await Formation.find(filters)
      .sort({ date: 1 })
      .limit(limit)
      .skip(offset);

    // Get total count for pagination
    const total = await Formation.countDocuments(filters);

    logger.info('Récupération de toutes les formations', { filters, pagination: { limit, offset } });

    res.json({
      formations,
      pagination: {
        total,
        limit,
        offset,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    logger.error('Erreur lors de la récupération des formations:', error.message);
    next(error); // Passer l'erreur au middleware d'erreur
  }
};

// @desc    Get formation by ID
// @route   GET /api/formations/:id
// @access  Public
const getFormationById = async (req, res, next) => { // Ajout de 'next'
  try {
    const formation = await Formation.findById(req.params.id);

    if (formation) {
      logger.info(`Récupération de la formation avec l'ID: ${req.params.id}`, { formationId: req.params.id });
      res.json(formation);
    } else {
      logger.warn(`Formation non trouvée avec l'ID: ${req.params.id}`);
      res.status(404).json({ message: 'Formation non trouvée' }); // Gestion spécifique, pas d'erreur à passer
    }
  } catch (error) {
    logger.error(`Erreur lors de la récupération de la formation avec l'ID: ${req.params.id}:`, error.message);
    next(error); // Passer l'erreur au middleware d'erreur
  }
};

// @desc    Create new formation (for seeding or admin purposes)
// @route   POST /api/formations
// @access  Private (would normally be protected)
const createFormation = async (req, res, next) => { // Ajout de 'next'
  try {
    const formation = await Formation.create(req.body);
    logger.info('Nouvelle formation créée:', formation);
    res.status(201).json(formation);
  } catch (error) {
    logger.error('Erreur lors de la création de la formation:', error.message);
    next(error); // Passer l'erreur au middleware d'erreur
  }
};

module.exports = {
  getFormations,
  getFormationById,
  createFormation
};
