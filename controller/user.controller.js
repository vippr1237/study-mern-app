const User = require('../models/user.model');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

async function register(req, res) {
    const {username, password} = req.body

    const hashedPassword = await argon2.hash(password);
    try {
    const newUser = new User({
        username: username,
        password: hashedPassword
    })
    const result = await newUser.save()
    res.send(result)
    } catch (err) {
        console.log(err)
    }
}

async function login(req, res) {
    const {username, password} = req.body;
    if (!username || !password) 
        return res.status(400).json({success: false, message: "User and/or password is blank"})
    try {
        const user = await User.findOne({username: username})
        if (!user)
            return res.status(400).json({success: false, message: "Wrong username"})
        
        const hashPassword = await argon2.verify(user.password, password);
        if (!hashPassword)
            return res.status(400).json({success: false, message: "Wrong Password"})
    
        const token = jwt.sign({userId: user._id}, process.env.TOKEN_SECRET, {expiresIn: '12h'})
        res.json({success: true, message:"Login success", token})
    } catch (err) {
        console.log(err)
        res.status(500).json({success: false, message: "Server internal error"})
    }
}

module.exports = {
    register: register,
    login: login
}