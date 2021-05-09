const express = require('express');

const router = express.Router();
const portfolioController = require('../controller/portfolio.controller')

router.route('/')
.get(portfolioController.getPortfolio)

module.exports = router