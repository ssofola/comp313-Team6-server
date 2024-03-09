const mongoose = require('./config/mongoose');
const express = require('./config/express');
const advertRouter = require('./app/routes/advert.server.routes');

// Connect to MongoDB
const db = mongoose();

// Create a new Express application instance
const app = express();


// Use the Express application instance to listen to the port 5000
app.listen(5000);

module.exports = app;
console.log('Server running at http://localhost:5000/');

