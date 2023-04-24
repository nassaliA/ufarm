const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true
    },
    lastname:{
        type:String,
        trim:true
    },
    phone:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    

    city:{
        type:String,
        trim:true
    },
    age:{
        type:Number,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    ward:{
        type:Number,
        trim:true
    },
    NIN:{
        type:String,
        trim:true
    },

})

module.exports = mongoose.model("Farmers", registerSchema)
