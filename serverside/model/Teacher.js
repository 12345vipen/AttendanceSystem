import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
    EmailId: {
        type: String,
        required:true
    },
    Password: {
        type: String,
        required:true
    },


});

const teacher = mongoose.model('teacher', teacherSchema);

export default teacher;