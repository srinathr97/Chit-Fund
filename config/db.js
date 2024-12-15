require('dotenv').config();

const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,     // Your database host
  user: process.env.DB_USER,     // Your database username
  password: process.env.DB_PASS, // Your database password
  database: process.env.DB_NAME  // Your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

module.exports = connection;
