const mongoose = require("mongoose")

const answerSchema = new mongoose.Schema({
    answer: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Answers", answerSchema)