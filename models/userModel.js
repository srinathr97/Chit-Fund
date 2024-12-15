const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const userId = uuidv4();
console.log(' users_id:', userId);


// Function to get all users
const getUsers = (callback) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results);
  });
};

// Function to create a new user
const createUser = (name, email, password, role, callback) => {
  const query = 'INSERT INTO users (user_id,name, email, password, role) VALUES (?,?, ?, ?, ?)';

  console.log('Executing query:', query);
  console.log('With values:', [uuidv4(),name, email, password, role]);

  db.query(query, [uuidv4(),name, email, password, role], (err, result) => {
    if (err) {
        console.log('Error during query execution:', err);
      return callback(err);
    }
    callback(null, result);
  });
};

module.exports = { getUsers, createUser };
