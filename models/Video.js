const mongoose = require("mongoose");



const videoSchema = new mongoose.Schema({
  Title: { type: String},
  Video: { type: String},
});
const Video = mongoose.model("Video", videoSchema)
module.exports =  Video ;