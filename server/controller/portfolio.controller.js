const Portfolio = require('../models/portfolio.model')

async function getPortfolio(req, res) {
    const portfolios = await Portfolio.find();
    try {
    res.json(portfolios)
    } catch (err) {
        res.status(500).send(err);
    }
}

async function addPortfolio(req, res) {
    const portfolio = req.body;

    if (!portfolio) 
        return res.send("Empty portfolio");
    const newPortfolio = new Portfolio(portfolio)
    const result = await newPortfolio.save()
    res.json(result);
}

module.exports = {
    getPortfolio: getPortfolio,
    addPortfolio: addPortfolio
}