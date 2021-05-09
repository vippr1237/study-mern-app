const Date = require('../models/dates.model')

async function getDate(req, res) {
    const date = await Date.findOne({date : req.params.date})

    if (!date) 
        return res.status(400).json({success: false, message: "Can not found date"})
    res.json(date)
}

async function addDate(req, res) {
    const date = req.body

    if (!date)
        return res.send("Date is empty");
    const newDate = new Date(date)
    const result = await newDate.save()
    res.send(result)
}

module.exports = {
    getDate: getDate,
    addDate: addDate
}