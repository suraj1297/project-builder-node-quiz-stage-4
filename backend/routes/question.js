const router = require("express").Router()
const { getAllQuestions, createQuestion } = require("../controllers/question")

// router("/question/:id")
//     .get()
//     .put()
//     .delete()

router.get("/questions", getAllQuestions)

router.post("/question/create", createQuestion)

module.exports = router