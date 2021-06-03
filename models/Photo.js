const mongoose = require("mongoose");



const photoSchema = new mongoose.Schema({
  title: { type: String},
  image: { type: String},
  layout: { type: String},
  category: { type: String},
  about: { type: String},
});
const Photo = mongoose.model("Photo", photoSchema)
module.exports =  Photo ;