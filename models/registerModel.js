const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    
  },
  pp: {
    type: String,
    trim: true
  },
  age: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true,
  },
  ward: {
    type: String,
    required: true,
    enum: ['1', '2', '3', '4']
  },
  bio: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Registration', registrationSchema);
