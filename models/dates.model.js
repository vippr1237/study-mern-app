const mongoose = require('mongoose');
const Schema = mongoose.Schema

const dateSchema = new Schema({
    date: {
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        required: true,
        unique: true
    },
    quote: {
        type: String,
    },
    emoji: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('dates', dateSchema);