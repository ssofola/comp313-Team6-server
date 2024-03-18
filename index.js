const mongoose = require('./config/mongoose');
const express = require('./config/express');

// Connect to MongoDB
const db = mongoose();

// Create a new Express application instance
const app = express();
// enable a generic port instance
const port = process.env.PORT || 5000;
// Use the Express application instance to listen to the port 5000
const server = app.listen(port,  () => {
    console.log('Server running at http://localhost:5000/')
});

//exported so the test cases don't try to start a server that is already running
module.exports = server;
module.exports = app;