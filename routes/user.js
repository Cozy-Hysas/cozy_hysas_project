const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const {registerValidation,loginValidation} = require('./validation');

router.get('/', async (req, res) => {
    await User.find()
    .then(data => {
        res.send(data);
    })
})

router.post("/signup", async (req, res) => {
    //Validation register
    const {error} = registerValidation(req.body)
    if(error) return res.send(error.details[0].message)
    //Cheking email 
    const emailExists = await User.findOne({email: req.body.email})
    if(emailExists) return res.status(400).send('Email already exists')
    //Hash password 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
    })
    user.save().then(() => res.json('new user added'))
        .catch((err) => res.status(400).json(err));
})

router.post('/login', async (req, res) => {
    //Validation register
    const { error } = loginValidation(req.body)
    if (error) return res.send(error.details[0].message)
    //Cheking email 
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Email is not found ')
    //Hash password 
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send('Invalid password')
    res.json("logged in");
})




module.exports = router;