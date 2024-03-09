const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const InstitutionSchema = new Schema({
    fullName: String,
    abbreviation: String,
    instCode: String,
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    },
    type: String
});

// Create the 'Institution' model out of the 'InstitutionSchema'
mongoose.model('Institution', InstitutionSchema);