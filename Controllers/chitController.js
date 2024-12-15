const Chit = require('../models/chitModel');

// Get all chits
const getChits = (req, res) => {
  Chit.getChits((err, chits) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json(chits);
  });
};

// Create a new chit
const createChit = (req, res) => {
  const { name, chit_value, contribution_amount, duration, status, start_date, created_by } = req.body;

  Chit.createChit(name, chit_value, contribution_amount, duration, status, start_date, created_by, (err, result) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    res.status(201).json({ id: result.insertId, name, chit_value, contribution_amount, duration, status, start_date });
  });
};

module.exports = { getChits, createChit };
