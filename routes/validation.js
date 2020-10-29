const Joi = require('@hapi/joi');

const registerValidation = data => {
    const validation = Joi.object({
        name:Joi.string().min(6).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
        phoneNumber: Joi.number().valid(8).required(),
        address: Joi.string().min(10).required()
    })
    return validation.validate(data)
}

const loginValidation = data => {
    const validation = Joi.object({
        email:Joi.string().required().email(),
        password:Joi.string().min(6).required()
    })
    return validation.validate(data)
}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation ;