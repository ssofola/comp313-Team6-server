const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    },
   courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Course', 
        required: true
    },
   numQuestions:{
    type: Number,
    required: true
   },
   max:{
    type: Number,
    required: true
   }
});

module.exports = mongoose.model('Quiz', QuizSchema);
