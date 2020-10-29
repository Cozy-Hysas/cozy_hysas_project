const mongoose = require('mongoose');
const db = require('../database/index.js')
const houseSchema = new mongoose.Schema({
  title: {type: String, required:true},
  imageUrl: {type: String, required:true},
  description: {type: String, required:true},
  adress:{type: String, required:true},
  price: {type: Number, required:true},
  startDate: {type: Date, required:true},
  endDate: {type: Date, required:true}
}, 
  {
    timestamps: true
  }
);

const House = mongoose.model('House', houseSchema);
module.exports=House