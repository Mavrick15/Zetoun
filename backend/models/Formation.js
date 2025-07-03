
const mongoose = require('mongoose');

const formationSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre de la formation est requis']
  },
  description: {
    type: String,
    required: [true, 'La description de la formation est requise']
  },
  date: {
    type: String,
    required: [true, 'La date de la formation est requise']
  },
  location: {
    type: String,
    required: [true, 'Le lieu de la formation est requis']
  },
  duration: {
    type: String,
    required: [true, 'La durée de la formation est requise']
  },
  instructor: {
    type: String,
    required: [true, 'Le nom du formateur est requis']
  },
  price: {
    type: String,
    required: [true, 'Le prix de la formation est requis']
  },
  seats: {
    type: Number,
    required: [true, 'Le nombre de places disponibles est requis']
  },
  level: {
    type: String,
    enum: ['Débutant', 'Intermédiaire', 'Avancé'],
    required: [true, 'Le niveau de la formation est requis']
  },
  image: {
    type: String,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Formation', formationSchema);
