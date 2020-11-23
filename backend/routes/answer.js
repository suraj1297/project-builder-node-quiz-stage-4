const router = require("express").Router()
const { getAllAnswers, createAnswer } = require("../controllers/answer")

// router("/question/:id")
//     .get()
//     .put()
//     .delete()

router.get("/answers", getAllAnswers)

router.post("/answer/create", createAnswer)

module.exports = router