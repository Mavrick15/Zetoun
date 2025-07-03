const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: { // Nouveau champ pour le nom de l'utilisateur
    type: String,
    required: true
  },
  userEmail: { // Nouveau champ pour l'email de l'utilisateur
    type: String,
    required: true
  },
  formation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Formation',
    required: true
  },
  formationTitle: { // Nouveau champ pour le titre de la formation
    type: String,
    required: true
  },
  formationDate: { // Nouveau champ pour la date de la formation
    type: String, // Ou Date, selon le format stocké dans Formation
    required: true
  },
  formationLocation: { // Nouveau champ pour le lieu de la formation
    type: String,
    required: true
  },
  formationDuration: { // Nouveau champ pour la durée de la formation
    type: String,
    required: true
  },
  formationInstructor: { // Nouveau champ pour l'instructeur de la formation
    type: String,
    required: true
  },
  formationPrice: { // Nouveau champ pour le prix de la formation
    type: String, // Ou Number, selon le format stocké dans Formation
    required: true
  },
  formationSeats: { // Nouveau champ pour les places de la formation (au moment de l'enrôlement)
    type: Number,
    required: true
  },
  formationLevel: { // Nouveau champ pour le niveau de la formation
    type: String,
    required: true
  },
  enrolledAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
