const db = require("../models")
const router = require("express").Router()

const jwt = require("jsonwebtoken");



  router.post("/addPhoto", async (req, res) => {
    
    let token = false;
    if (!req.headers) {
      token = false;
    } else if (!req.headers.authorization) {
      token = false;
    } else {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      res.status(500).send("Please Login");
    } else {
      const data = await jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.JWS_TOKEN,
        (err, data) => {
          if (err) {
            res.status(401);
          } else {
            return data;
          }
        }
      );
      if (data) {
        db.Photo.create(req.body).catch((err) =>
          res.status(409).send("Image Upload Fail. Make sure you are logged in.")
        );
        res.status(200).send("Photo Uploaded");
      } else {
        res.status(403).send("Session Expired. Please Login.");
      }
    }
  });

  router.get("/getImages", async (req, res)=> {
    let data = await db.Photo.find().catch(err => console.log(err))

    res.status(200).json(data)
  })
  


module.exports = router