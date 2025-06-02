const mongoose = require('mongoose');

const clientProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: String,
  company: String,
  projectHistory: [{
    title: String,
    description: String,
    domain: String
  }]
});

module.exports = mongoose.model('ClientProfile', clientProfileSchema);
