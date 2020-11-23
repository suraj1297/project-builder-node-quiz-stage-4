const mongoose = require("mongoose")

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    answer: {
        type: mongoose.Types.ObjectId,
        ref: "Answers",
        required: true
    },
    options: {
        type: mongoose.Types.ObjectId,
        ref: "Options",
        required: true
    }
})

module.exports = mongoose.model("Questions", questionSchema)