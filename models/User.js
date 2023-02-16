//Adam Eliyahu Haymov 203520259
//Eliel Yeshayahu 208574160
const mongoose = require('mongoose');

//a user model
const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
});



module.exports = mongoose.model('Users', usersSchema);
