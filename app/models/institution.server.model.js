const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstitutionSchema = new Schema({
    fullName:  {
        type : String,
        required: true
    },
    abbreviation:  {
        type : String,
        required: true
    },
    instCode:  {
        type : String,
        required: true
    },
    location: {
        type: Schema.Types.ObjectId,
        ref: 'Location'
    },
    type:  {
        type : String,
        required: true
    },
});

const Institution = mongoose.model('Institution', InstitutionSchema);
module.exports = Institution;