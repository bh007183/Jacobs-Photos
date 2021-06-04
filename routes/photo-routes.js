const db = require("../models")
const router = require("express").Router()
const cloudinary = require("cloudinary").v2

const jwt = require("jsonwebtoken");

cloudinary.config({ 
  cloud_name: process.env.CLOUDNAME, 
  api_key: process.env.APIKEY, 
  api_secret: process.env.APISECRET 
});



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


  router.delete("/deleteImg", async (req, res)=> {


  let cloudData = await cloudinary.uploader.destroy(req.body.publicId).catch(err => console.log(err))
  if(cloudData.result === "ok"){
    await db.Photo.findByIdAndDelete(req.body.id).catch(err => res.status(404).send("Issue deleting image"))
    res.status(200).send("Image Deleted")
  }else{
    res.status(404).send("Issue deleting image")
  }


  })





  router.get("/getImages", async (req, res)=> {
    let data = await db.Photo.find({}).sort({ createdAt: -1 }).catch(err => res.status(404).send("There was an issue retreiving images"))
    res.status(200).json(data)
  })

  router.get("/apiByCategory/:category", async (req, res)=> {
    let data = await db.Photo.find({category: req.params.category}).sort({ createdAt: -1 }).catch(err => res.status(404).send("There was an issue retreiving images"))
    res.status(200).json(data)
  })


  router.get("/apiEditPhoto/:title", async (req, res) => {
    console.log(req.body)
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
        
        const regex = new RegExp(req.params.title, "i")

        let resData = await db.Photo.find({"title": {$regex: regex}}).catch((err) =>
          res.status(409).send("Image Upload Fail. Make sure you are logged in.")
        );
      
        res.status(200).json(resData);
      } else {
        res.status(403).send("Session Expired. Please Login.");
      }
    }
  });
  
  


module.exports = router