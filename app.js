const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connection = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to database
// connection();

// Routes
const userRoutes = require('./routes/userRoutes');
const chitRoutes = require('./routes/chitRoutes');

app.use('/api/users', userRoutes);
app.use('/api/chits', chitRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
