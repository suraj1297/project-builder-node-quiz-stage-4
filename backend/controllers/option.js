const Option = require("../models/option")

exports.getAllOptions = (req, res) => {
    // 
}

exports.createOption = (req, res) => {

    const options = new Option(req.body)

    options.save((err, options) => {
        if (err) res.status(400).json({ error: "Options creation unsuccessfull" })

        res.json(options)
    })
}