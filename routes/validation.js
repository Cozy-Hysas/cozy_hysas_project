const Joi = require('@hapi/joi');

const registerValidationUsers = data => {
    const validation = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        phoneNumber: Joi.number().required(),
        address: Joi.string().min(10).required()
    })
    return validation.validate(data)
}

const loginValidationUsers = data => {
    const validation = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required()
    })
    return validation.validate(data)
}

const registerValidationTenant = data => {
    const validation = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        phoneNumber: Joi.number().required(),
        address: Joi.string().min(10).required(),
        numeroCart: Joi.number(),
        cvv2: Joi.number()
    })
    return validation.validate(data)
}

const loginValidationTenant = data => {
    const validation = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required()
    })
    return validation.validate(data)
}

module.exports.registerValidationUsers = registerValidationUsers;
module.exports.loginValidationUsers = loginValidationUsers;
module.exports.registerValidationTenant = registerValidationTenant;
module.exports.loginValidationTenant = loginValidationTenant;
