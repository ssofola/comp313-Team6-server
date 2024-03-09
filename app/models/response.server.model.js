const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
    testId: {
        type: Schema.Types.ObjectId,
        ref: 'Test',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quizId: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    answerId: {
        type: Schema.Types.ObjectId,
        ref: 'Answer',
        required: true
    },
   correct:{
    type: Boolean,
    required: true
   }
});

module.exports = mongoose.model('Response', ResponseSchema);