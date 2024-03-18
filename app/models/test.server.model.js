const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const TestSchema = new Schema({
    userID : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quizID : {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    quizDT : {
        type: Date, 
        required: true
    },
    maxScorePct : {
        type: Number, 
        required: true
    },
    testScore: {
        type: Number, 
        required: true
    },
    testTotal: {
        type: Number, 
        required: true
    },
    completed: {
        type: Boolean, 
        required: true
    }
});

module.exports = mongoose.model('Test', TestSchema);