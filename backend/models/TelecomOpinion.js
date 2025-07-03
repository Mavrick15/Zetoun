const mongoose = require('mongoose');

const telecomOpinionSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom est requis']
  },
  email: {
    type: String,
    required: [true, 'L\'email est requis']
  },
  subject: {
    type: String,
    required: [true, 'Le sujet est requis']
  },
  message: {
    type: String,
    required: [true, 'Le message est requis']
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('TelecomOpinion', telecomOpinionSchema);
