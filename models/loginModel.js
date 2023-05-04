const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")
const loginSchema = new mongoose.Schema({
  id: { type: String },
  email: { type: String },
  password: { type: String },
  role: { type: String },
});

loginSchema.plugin(passportLocalMongoose,{usernameField:"username"});
module.exports = mongoose.model("login",loginSchema)