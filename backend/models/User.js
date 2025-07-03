
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Veuillez ajouter un nom']
  },
  email: {
    type: String,
    required: [true, 'Veuillez ajouter un email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Veuillez ajouter un mot de passe']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
