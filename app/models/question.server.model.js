const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
   quizId: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    question: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
   mark:{
    type: Number,
    required: true
   }
});

module.exports = mongoose.model('Question', QuestionSchema);
