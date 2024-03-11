const mongoose = require('./config/mongoose');
const express = require('./config/express');

// Connect to MongoDB
const db = mongoose();

// Create a new Express application instance
const app = express();
// enable a generic port instance
const port = process.env.PORT || 5000;
// Use the Express application instance to listen to the port 5000
app.listen(port,  () => {
    console.log(`Server running on port ${port}`)
});

module.exports = app;
console.log('Server running at http://localhost:5000/');