const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    courseName: {
        type: String,
        required: true
    },
    courseCode: {
        type: String,
        required: true
    },
    institutionId: {
        type: Schema.Types.ObjectId,
        ref: 'Institution', // This references the Institution model
        required: true
    }
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
