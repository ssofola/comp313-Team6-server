const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
   quizId: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    answer: {
        type: String,
        required: true
    },
   mark:{
    type: Number,
    required: true
   }
});

module.exports = mongoose.model('Answer', AnswerSchema);