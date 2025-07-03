const express = require('express');
const router = express.Router();
const { getFormations, getFormationById, createFormation } = require('../controllers/formationController');
const { validateCreateFormation } = require('../middleware/validation'); // Import de la validation

// Formation routes
router.get('/', getFormations);
router.get('/:id', getFormationById);
router.post('/', validateCreateFormation, createFormation); // Utilisation du middleware de validation avant le contrôleur

module.exports = router;
