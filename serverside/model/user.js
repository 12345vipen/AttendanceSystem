import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    eamilid: {
        type: String,
        required:true,
    },


}, { timestamps: true });
const collegeName = "Landara";
const user = mongoose.model(`${collegeName}user`, userSchema);

export default user;