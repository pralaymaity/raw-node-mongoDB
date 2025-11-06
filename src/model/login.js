
const mongoose = require("mongoose");


const loginSchema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})


const Login = new mongoose.model("Login", loginSchema);

module.exports = Login;