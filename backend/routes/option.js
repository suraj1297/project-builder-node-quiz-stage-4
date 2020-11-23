const router = require("express").Router()
const { getAllOptions, createOption } = require("../controllers/option")

// router("/question/:id")
//     .get()
//     .put()
//     .delete()

router.get("/options", getAllOptions)

router.post("/option/create", createOption)

module.exports = router