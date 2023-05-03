const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
    

    gender:{
        type:String,
        trim:true
    },
    pp:{
        type:String,
        trim:true
    },
    
    age:{
        type:String,
        trim:true
    },
    role:{
        type:Number,
        trim:true
    },
    ward:{
        type:String,
        trim:true
    },
    bio:{
        type:String,
        trim:true
    },

})

module.exports = mongoose.model("Farmers", registerSchema)
