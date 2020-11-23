const Answer = require("../models/answer")

exports.getAllAnswers = (req, res) => {
    // 
}

exports.createAnswer = (req, res) => {

    const answer = new Answer(req.body)

    answer.save((err, answer) => {
        if (err) res.status(400).json({ error: "Answer creation unsuccessfull" })

        return res.json(answer)
    })
}