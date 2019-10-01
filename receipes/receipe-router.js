const express = require('express');

const Receipe = require('./receipe-model.js');

const router = express.Router();

router.get('/test', async (req, res) => {
  try {
    const receipes = await Receipe.getReceipes();
    res.json(receipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get receipes' });
  }
});


module.exports = router;