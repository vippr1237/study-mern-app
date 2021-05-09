const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('portfolio', portfolioSchema);