const db = require("../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
    try {
      await jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.JWS_TOKEN,
        (err, data) => {
          if (err) {
            res.status(401);
          } else {
            res.status(200);
          }
        }
      );
    } catch (err) {
      res.status(401);
    }
  } else {
    res.status(403).send("Session Expired. Please Login.");
  }
});

module.exports = router;
