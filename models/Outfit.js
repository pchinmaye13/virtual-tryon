// models/Outfit.js
const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productLink: { type: String, required: true },
  model3DUrl: { type: String, required: true },
  // Add other outfit-related fields as needed
});

module.exports = mongoose.model('Outfit', outfitSchema);