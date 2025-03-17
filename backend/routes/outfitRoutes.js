//routes/outfitRoutes.js
const express = require('express');
const router = express.Router();
const Outfit = require('../models/Outfit');

// Route to upload a new outfit
router.post('/upload', async (req, res) => {
  try {
    const { userId, productLink, model3DUrl } = req.body;
    const newOutfit = new Outfit({ userId, productLink, model3DUrl });
    await newOutfit.save();
    res.status(201).json({ message: 'Outfit uploaded successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error uploading outfit' });
  }
});

// Route to get outfits for a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const outfits = await Outfit.find({ userId });
    res.status(200).json(outfits);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching outfits' });
  }
});

module.exports = router;