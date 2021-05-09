const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller');

router.route('/register')
.get(function (req, res){
    res.send('Access Denied');
})

router.route('/')
.post(userController.login)

module.exports = router;