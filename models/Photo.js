const mongoose = require("mongoose");



const photoSchema = new mongoose.Schema({
  Title: { type: String},
  url: { type: String},
});
const Photo = mongoose.model("Photo", photoSchema)
module.exports =  Photo ;