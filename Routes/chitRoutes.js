const express = require('express');
const router = express.Router();
const { getChits, createChit } = require('../controllers/chitController');

// GET all chits
router.get('/', getChits);

// POST a new chit
router.post('/', createChit);

module.exports = router;
