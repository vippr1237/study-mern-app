const express = require('express');
const router = express.Router();
const dateController = require('../controller/dates.controller')

router.route('/:date')
.get(dateController.getDate)


module.exports = router;