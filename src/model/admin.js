
const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  }
})


const Login = new mongoose.model("admin", adminSchema);

module.exports = Login;