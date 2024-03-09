const mongoose = require('mongoose')

// Define the schema
const Schema = mongoose.Schema;

const UserInstitutionSchema = new Schema({
    userID : Number,
    institutionID : Number
});

// Create the 'UserInstitution' model out of the 'UserInstitutionSchema'
mongoose.model('UserInstitution', UserInstitutionSchema);