var mongoose = require('./config/mongoose');
var express = require('./config/express');

// Connect to MongoDB
var db = mongoose();

// Create a new Express application instance
var app = express();

// Use the Express application instance to listen to the port 5000
app.listen(5000);

module.exports = app;
console.log('Server running at http://localhost:5000/'); //