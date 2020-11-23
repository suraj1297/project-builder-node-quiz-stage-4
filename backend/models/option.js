const mongoose = require("mongoose")

const optionsSchema = new mongoose.Schema({
    options: {
        type: Array,
        required: true,
    }
})

module.exports = mongoose.model("Options", optionsSchema)