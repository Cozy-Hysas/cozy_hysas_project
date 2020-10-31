const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const {registerValidationUsers,loginValidationUsers} = require('./validation');

router.get('/', async (req, res) => {
    await User.find()
    .then(data => {
        res.send(data);
    })
})

router.post("/signup", async (req, res) => {
    //Validation register
    const {error} = registerValidationUsers(req.body.user)
    if(error) return res.send(error.details[0].message)
    //Cheking email 
    const emailExists = await User.findOne({email: req.body.user.email})
    if(emailExists) return res.status(400).send('Email already exists')
    //Hash password 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.user.password, salt)

    user = new User({
        name: req.body.user.name,
        email: req.body.user.email,
        password: hashPassword,
        phoneNumber: req.body.user.phoneNumber,
        address: req.body.user.address,
    })
    user.save().then(() => res.json('new user added'))
        .catch((err) => res.status(400).json(err));
})

router.post('/login', async (req, res) => {
    //Validation register
    const { error } = loginValidationUsers(req.body)
    if (error) return res.send(error.details[0].message)
    //Cheking email 
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.json({"message" : "signup"})
    //Hash password 
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.json({"message" : "signup"})
   const obj = {"message" : "welcome"}
    res.json(obj);
})




module.exports = router;