const db = require("../models");
const router = require("express").Router();
const cloudinary = require("cloudinary").v2;

const jwt = require("jsonwebtoken");

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
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

router.get("/getImages", async (req, res) => {
  let data = await db.Photo.find()
    .sort({ createdAt: -1 })
    .catch((err) =>
      res.status(404).send("There was an issue retreiving images")
    );
  if(data){
    res.status(200).json(data);
  }else{
    res.status(500).send("Unknown error")
  }
  
});

router.get("/getFeatured", async (req, res) => {
  let data = await db.Photo.find({category: "Featured", layout: "Landscape"})
    .sort({ createdAt: -1 })
    .catch((err) =>
      res.status(404).send("There was an issue retreiving images")
    );
    if(data){
      res.status(200).json(data);
    }else{
      res.status(500).send("Unknown error")
    }
});

router.get("/apiByCategory/:category", async (req, res) => {
  let data = await db.Photo.find({ category: req.params.category })
    .sort({ createdAt: -1 })
    .catch((err) =>
      res.status(404).send("There was an issue retreiving images")
    );
  res.status(200).json(data);
});

router.get("/apiEditPhoto/:title", async (req, res) => {
  console.log(req.body);
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
      const regex = new RegExp(req.params.title, "i");

      let resPhoto = await db.Photo.find({
        title: { $regex: regex },
      }).catch((err) =>
        res.status(409).send("Image Upload Fail. Make sure you are logged in.")
      );
      
      res.status(200).json(resPhoto);
    } else {
      res.status(403).send("Session Expired. Please Login.");
    }
  }
});
router.put("/apiSubmitPhotoEdit", async (req, res) => {
  // console.log(req.body)
  let token = false;
  switch (req) {
    case !req.headers:
      token = false;
      break;
    case !req.headers.authorization:
      token = false;
      break;
    default:
      token = req.headers.authorization.split(" ")[1];
      break;
  }

  if (!token) {
    res.status(404).send("Unauthorized");
  } else {
    const data = await jwt.verify(token, process.env.JWS_TOKEN, (err, data) => {
      if (err) {
        res.status(401).send("Unauthorized or Session Expired.");
      } else {
        return data;
      }
    });
    if (data) {
      await db.Photo.findOneAndUpdate(
        { _id: req.body._id },
        {
          title: req.body.title,
          image: req.body.image,
          layout: req.body.layout,
          category: req.body.category,
          about: req.body.about,
          publicId: req.body.publicId,
        }
      ).catch((err) => res.status(409).send("Issue Updating Img"));
      res.status(200).send("Image Updated");
    } else {
      res.status(404).send("Session Expired");
    }
  }
});

router.delete("/apiPhotoDelete/:_id/:publicId", async (req, res) => {
  let token = false;
  switch (req) {
    case !req.headers:
      token = false;
      break;
    case !req.headers.authorization:
      token = false;
      break;
    default:
      token = req.headers.authorization.split(" ")[1];
      break;
  }
  if (!token) {
    res.status(404).send("Unauthorized");
  } else {
    const data = await jwt.verify(token, process.env.JWS_TOKEN, (err, data) => {
      if (err) {
        res.status(401).send("Unauthorized or Session Expired.");
      } else {
        return data;
      }
    });
    if (data) {
        await cloudinary.uploader
        .destroy(req.params.publicId).then((data) => {
          if (data.result === "ok") {
              db.Photo.findByIdAndDelete(req.params._id).then(data => {
                res.status(200).json(data);
              }).catch((err) =>
              res.status(404).send("Issue deleting image")
            );
          } else {
            res.status(404).send("Issue deleting image");
          }

        })
        .catch((err) => res.status(401).send("Unable to Delete Image"));
       
    } else {
      res.status(404).send("Session Expired");
    }
  }
});

module.exports = router;
