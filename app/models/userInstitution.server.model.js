const mongoose = require('mongoose')

// Define the schema
const Schema = mongoose.Schema;

const UserInstitutionSchema = new Schema({
    userID :{
        type: Number, 
        required: true
    },
    institutionID : {
        type: Number, 
        required: true
    },
});

module.exports = mongoose.model('UserInstitution', UserInstitutionSchema);