const express = require('express');
const router = express.Router();
const { enrollUserToFormation } = require('../controllers/enrollmentController'); // Import du contrôleur

// Route pour enregistrer un utilisateur à une formation
router.post('/', enrollUserToFormation);

module.exports = router;
