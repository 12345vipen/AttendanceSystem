import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    RollNumber: {
        type: String,
        required:true
    },
    Password: {
        type: String,
        required:true
    },


});

const Student = mongoose.model('Student', studentSchema);

export default Student;