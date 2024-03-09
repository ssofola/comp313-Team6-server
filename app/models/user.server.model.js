const mongoose = require('mongoose')

// Define the schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email : String,
    fullName : String,
    password : String,
    userType : String
});

// Create the 'User' model out of the 'UserSchema'
mongoose.model('User', UserSchema);