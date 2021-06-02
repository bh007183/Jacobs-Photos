const db = require("../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");






// create user
// router.post("/api/createUser", async (req, res) => {
//   const hashPass = bcrypt.hashSync("peace", saltRounds);

//   const data = await db.Admin.create({
   
//     username: req.body.username,
//     email: "jacobhopkinsphoto@gmail.com",
//     password: hashPass,

//   }).catch((err) => {if(err.errors[0].message.substring(0, 6) === "users."){res.status(409).send(err.errors[0].message.substring(6))} else{res.status(409).send("invalid email")} })

//   res.status(200).send("Account Created!");
// });






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

module.exports = router;
