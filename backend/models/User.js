const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Assurez-vous que bcryptjs est bien importé ici
const jwt = require('jsonwebtoken'); // Assurez-vous que jwt est bien importé ici

const USER_MESSAGES = {
  NAME_REQUIRED: 'Veuillez ajouter un nom',
  NAME_MIN_LENGTH: 'Le nom doit contenir au moins 2 caractères',
  EMAIL_REQUIRED: 'Veuillez ajouter un email',
  EMAIL_INVALID: 'Veuillez entrer une adresse email valide',
  PASSWORD_REQUIRED: 'Veuillez ajouter un mot de passe',
  PASSWORD_MIN_LENGTH: 'Le mot de passe doit contenir au moins 6 caractères',
  INVALID_ROLE: 'Le rôle doit être user ou admin',
};

const USER_ROLES = ['user', 'admin'];

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, USER_MESSAGES.NAME_REQUIRED],
    trim: true,
    minlength: [2, USER_MESSAGES.NAME_MIN_LENGTH]
  },
  email: {
    type: String,
    required: [true, USER_MESSAGES.EMAIL_REQUIRED],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, USER_MESSAGES.EMAIL_INVALID]
  },
  password: {
    type: String,
    required: [true, USER_MESSAGES.PASSWORD_REQUIRED],
    minlength: [6, USER_MESSAGES.PASSWORD_MIN_LENGTH],
    select: false // Ne pas renvoyer le mot de passe par défaut
  },
  role: {
    type: String,
    enum: {
      values: USER_ROLES,
      message: USER_MESSAGES.INVALID_ROLE
    },
    default: 'user'
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  verificationTokenExpires: Date,
}, {
  timestamps: true
});

// Hasher le mot de passe avant de sauvegarder
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Méthode pour comparer les mots de passe (utilisée dans authRoutes.js pour le login)
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Méthode pour générer un token JWT (utilisée dans authRoutes.js pour le login/signup)
userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = mongoose.model('User', userSchema);
