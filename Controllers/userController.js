const User = require('../models/userModel');

// Get all users
const getUsers = (req, res) => {
  User.getUsers((err, users) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json(users);
  });
};

// Create a new user
const createUser = (req, res) => {
  const { name, email, password, phone_number, address, role } = req.body;

  User.createUser(name, email, password, phone_number, address, role, (err, result) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    res.status(201).json({ id: result.insertId, name, email, role });
  });
};

module.exports = { getUsers, createUser };
