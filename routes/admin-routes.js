const db = require("../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");


router.post("/createaccount", async (req, res) => {
  const hash = await bcrypt.hashSync(req.body.password, saltRounds);
  await db.Admin.create({
    username: req.body.username,
    email: req.body.email,
    password: hash
  })
  res.status(200)
})

router.post("/adminLoginApi", async (req, res) => {
  const data = await db.Admin.findOne({
    username: req.body.data.username,
  }).catch((err) => res.status(409).send("No Known User!"));
  await console.log(data);

  const match = await bcrypt.compareSync(req.body.data.password, data.password);
  if (match) {
    jwt.sign(
      {
        username: data.username,
        id: data.id,
      },
      process.env.JWS_TOKEN,
      { expiresIn: "1hr" },
      (err, token) => {
        if (err) {
          res.status(401).send("Error connecting token. Try again.");
        }

        res.json({ token });
      }
    );
  } else {
    res.status(401).send("No Such User!");
  }
});

router.get("/adminAccessAuthorized", async (req, res) => {
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
      res.status(200).send("Access Granted");
    } else {
      res.status(403).send("Session Expired. Please Login.");
    }
  }
});

router.get("/getAdminAPi", async (req, res) => {
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
          res.status(401).send("Unauthorised. Please Login.");
        } else {
          return data;
        }
      }
    );
    if (data) {
      let resData = await db.Admin.findById(data.id).select("-password").catch((err) =>
        res.status(401).send("Unable to retrieve user.")
      );
      console.log(resData)
      res.status(200).json(resData);
    } else {
      res.status(403).send("Session Expired. Please Login.");
    }
  }
});

router.put("/UpdateAdminAPi", async (req, res) => {
  console.log(req.body.oldPassword)
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
          res.status(401).send("Unauthorised. Please Login.");
        } else {
          return data;
        }
      }
    );
    if (data) {
      const findUser = await db.Admin.findById(data.id).catch((err) =>
        res.status(401).send("Could not find user.")
      );
      console.log(findUser)
      let match;
      try {
        match = await bcrypt
          .compareSync(req.body.oldPassword, findUser.password, (err, result) => {
            if (err) {
              res.status(401).send("Password not authorized.")
              console.log(134);
            } else {
              return result;
            }
          })
          
      } catch (err) {
        res.status(401).send("Password Authentication Required.")
      }
      if(!match){
        res.status(401).send("Your Current Password is incorrect.")
      }
      if (match && req.body.newPassword === '') {
        await db.Admin.findByIdAndUpdate(data.id, {
          username: req.body.username,
          email: req.body.email
        }).catch(err => res.status(404).send("Error on update"))
        res.status(200).send("Update Success. Please Log Back In.")

      }
      if(match && req.body.newPassword !== '' && req.body.newPassword === req.body.verifyPassword){

        const hash = await bcrypt.hashSync(req.body.newPassword, saltRounds);
        await db.Admin.findByIdAndUpdate(data.id, {
          username: req.body.username,
          email: req.body.email,
          password: hash
        }).catch(err => res.status(404).send("Error on update"))
        res.status(200).send("Update Success. Please Log Back In.")

      } else {
        res.status(401).send("Please verify passwords match.");
      }
    } else {
      res.status(403).send("Session Expired. Please Login.");
    }
  }
});

module.exports = router;
