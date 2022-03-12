import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    adminEmail:{
        type:String,
        required:true,
        
    },
    location:{
        type:String,
        required:true
    },
    teachers:{
        type:String
    },

}, { timestamps: true });

const college = mongoose.model('college', userSchema);

export default college;