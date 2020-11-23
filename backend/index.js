const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
require("./connection/connection")
const questionRoutes = require("./routes/question")
const optionRoutes = require("./routes/option")
const answerRoutes = require("./routes/answer")


// middlewares
app.use(cors({ origin: "*" }))
app.use(bodyParser.json())

// routes
app.use("/api", questionRoutes)
app.use("/api", optionRoutes)
app.use("/api", answerRoutes)


// server
app.listen(8000, () => console.log("App listening at port 8000."))