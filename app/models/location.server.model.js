const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Define the schema
const LocationSchema = new Schema({
    physical: {
        type : String,
        required: true
    },
    postal : {
        type : String,
        required: true
    },
    email: {
        type : String,
        required: true
    },
    country : {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required: true
    },
    province : {
        type: Schema.Types.ObjectId,
        ref: 'Province',
        required: true
    },
    city : {
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    telephone : {
        type : String,
        required: true
    }
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;