const express = require("express");
const router = express.Router();
const Tenant = require('../models/tenant')
const bcrypt = require('bcryptjs');
const { registerValidationTenant, loginValidationTenant } = require("./validation");

router.get('/', async (req, res) => {
    await Tenant.find()
        .then(data => {
            res.send(data);
        })
})

router.get('/:id', async (req, res) => {
    await Tenant.findById(req.params.id)
        .then(data => {
            res.json(data);

        })
})

router.post("/signup", async (req, res) => {
    //Validation register
    const { error } = registerValidationTenant(req.body)
    if (error) return res.send(error.details[0].message)
    //Cheking email 
    const emailExists = await Tenant.findOne({ email: req.body.email })
    if (emailExists) return res.status(400).send('Email already exists')
    //Hash password 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    tenant = new Tenant({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
        })
    tenant.save().then(() => res.json('new tenant added'))
        .catch((err) => res.status(400).json(err));
})


router.post('/login', async (req, res) => {
    //Validation login
    const { error } = loginValidationTenant(req.body)
    if (error) return res.send(error.details[0].message)
    //Cheking email 
    const tenant = await Tenant.findOne({ email: req.body.email })
    if (!tenant) return res.status(400).send('Email is not found ')
    //Hash password 
    const validPassword = await bcrypt.compare(req.body.password, tenant.password)
    if (!validPassword) return res.status(400).send('Invalid password')
    const obj = {"message" : "welcome"}
    res.json(obj);
})

router.put('/:id', async (req, res) => {
    await Tenant.findByIdAndUpdate(req.params.id, req.body)
    res.json("tenant updated");
})

module.exports = router;
