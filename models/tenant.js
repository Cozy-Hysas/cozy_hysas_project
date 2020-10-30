const mongoose = require("mongoose");

const tenantSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    numeroCart: {
        type: Number
    },
    cvv2: {
        type: Number
    }
});


const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;