
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name : String,
    email:{
        type : String,
        require : true,
        unique : true
    },
    address : String,
    age: Number,
    country : String,
    phone : Number,
    language : [String],
    passport : Boolean
})

const User = new mongoose.model("Users",userSchema)

module.exports = User;