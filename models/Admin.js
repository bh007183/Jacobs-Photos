const mongoose = require("mongoose");
const  validator= require("validator");


const adminSchema = new mongoose.Schema({
  username: { type: String},
  email: { type: String},
  password: { type: String},
});

const Admin = mongoose.model("Admin", adminSchema)
module.exports =  Admin ;
