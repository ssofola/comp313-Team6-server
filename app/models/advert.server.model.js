const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdvertSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    fromDate: {
        type: Date,
        required: true
    },
    toDate: {
        type: Date,
        required: true
    }
});

const Advert = mongoose.model('Advert', AdvertSchema);

module.exports = Advert;
