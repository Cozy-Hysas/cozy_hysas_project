const mongoose = require("mongoose");


let userSchema = mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    phoneNumber: {
        type:Number,
        require:true
    },
    address: {
        type:String,
        require:true
    },
  });



  module.exports = mongoose.model('User', userSchema);