import mongoose from "mongoose";

const PinSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
        min: 4,
    },
    desc: {
        type: String,
        require: true,
        min: 5,
    },
    rating: {
        type: Number,
        require: true,
        min: 0,
        max: 5,
    }
    
},{timestamps: true})

module.exports = mongoose.model("Pin", PinSchema)