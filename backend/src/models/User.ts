import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 4,
        max: 10,
        unique: true
    },
    email: {
        type: String,
        require: true,
        max: 20,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        max: 20,
        unique: true,
    },
    
},{timestamps: true})

const User = mongoose.model("User", UserSchema)
export default User;