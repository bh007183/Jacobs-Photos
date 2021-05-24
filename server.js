const express = require("express");
const mongoose = require('mongoose')
const app = express();
const cors = require("cors");
const db = require("./models");
// Sets up the Express App
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var corsOptions = {
//   origin: 'https://bjh-hop-estore.herokuapp.com'
// }
// corsOptions
app.use(cors());
// Static directory
app.use(express.static("public"));
/////////////////////////////////
const videoRoutes = require("./routes/video-routes.js")
const photoRoutes = require("./routes/photo-routes.js")
const adminRoutes = require("./routes/admin-routes.js")

// Routes
// =============================================================
app.use(videoRoutes)
app.use(photoRoutes)
app.use(adminRoutes)

// app.use(express.static("client/build"));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/JacobDB", {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
  });



  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
