const { response } = require("express")
const Question = require("../models/question")


exports.getAllQuestions = (req, res) => {
    Question.find()
        .populate("answer", "answer")
        .populate("options", "options")
        .exec((err, response) => {
            if (err) {
                console.log(err);
                res.status(400).json({ error: "Couldn't fetch questions" })
            }

            const questions = []

            response.forEach((que, index) => {
                questions.push({
                    id: index + 1,
                    question: que.question,
                    answer: que.answer.answer,
                    options: que.options.options

                })
            })

            return res.json(questions)
        })
}

exports.createQuestion = (req, res) => {

    const question = new Question(req.body)

    question.save((err, question) => {
        if (err) res.status(400).json({ error: "Creation unsuccessfull" })
        res.json(question)
    })
}