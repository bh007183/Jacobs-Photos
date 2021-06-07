const express = require("express");
const mongoose = require('mongoose')
const app = express();
const cors = require("cors");
const path = require("path")
// Sets up the Express App
var PORT = process.env.PORT || 8080;
require("dotenv").config();


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var corsOptions = {
//   origin: 'http://localhost:8080'
// }
// corsOptions
app.use(cors());
// Static directory
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
/////////////////////////////////
const videoRoutes = require("./routes/video-routes.js")
const photoRoutes = require("./routes/photo-routes.js")
const adminRoutes = require("./routes/admin-routes.js")

// Routes
// =============================================================
app.use(videoRoutes)
app.use(photoRoutes)
app.use(adminRoutes)




mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/jacobsphotos", {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
  });



app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});


  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
