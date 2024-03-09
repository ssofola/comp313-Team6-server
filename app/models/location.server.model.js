const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Define the schema
const LocationSchema = new Schema({
    physical: Number,
    postal : Number,
    email: Number,
    country : Number,
    province : Number,
    city : Number,
    telephone : Number
});

// Create the 'Location' model out of the 'LocationSchema'
mongoose.model('Location', LocationSchema);