const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const group_id = uuidv4();

// Function to get all chits
const getChits = (callback) => {
  db.query('SELECT * FROM chit_groups', (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

// Function to create a new chit
const createChit = (name, chit_value, contribution_amount, duration, created_by, callback) => {
  const query = 'INSERT INTO chit_groups (group_id,name, chit_value, contribution_amount, duration, created_by) VALUES (?,?, ?, ?, ?, ?)';
  db.query(query, [uuidv4(),name, chit_value, contribution_amount, duration, created_by], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = { getChits, createChit };
