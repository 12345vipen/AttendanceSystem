import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    logo: {
        type: String,
        required:true
    },
    adminEmailId:{
        type:String,
        required:true
    }

});

const collegeName = mongoose.model('collegeNames', userSchema);

export default collegeName;