const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("connected to db"))
    .catch(err => console.log(err))


module.exports = mongoose