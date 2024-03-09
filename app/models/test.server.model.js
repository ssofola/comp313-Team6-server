const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const TestSchema = new Schema({
    userID : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    quizID : {
        type: Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    quizDT : Date,
    maxScorePct : Number,
    testScore: Number,
    testTotal: Number,
    completed: Boolean
});

// Create the 'Test' model out of the 'TestSchema'
mongoose.model('Test', TestSchema);