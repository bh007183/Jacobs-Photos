const db = require("../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer")


// router.post("/createaccount", async (req, res) => {
//   const hash = await bcrypt.hashSync(req.body.password, saltRounds);
//   await db.Admin.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: hash
//   })
//   res.status(200)
// })

router.post("/adminLoginApi", async (req, res) => {
  
  const data = await db.Admin.findOne({
    username: req.body.data.username,
  }, (err, data) => {
    if(err){
      res.status(401).send("Issue with authentication!")
    }else{
      return data
    }
  })
  console.log(data)
  
  if(data){
  const match = await bcrypt.compare(req.body.data.password, data.password).catch(err => res.status(401).send("No Such User!"))
  
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
  }else{
    res.status(401).send("Username Invalid")
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
      const match = await bcrypt
          .compare(req.body.oldPassword, findUser.password).catch(err => res.status(401).send("Invalid Password"))
          
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


async function mailer(req, res){

  let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });
  

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${req.body.name} <${req.body.email}>`, // sender address
    to: "jacobhopkinsphoto@gmail.com", // list of receivers
    subject: "Image Inquiry", // Subject line
    html: `<h4>${req.body.name}</h4><h5>${req.body.phone}</h5><h5>${req.body.email}</h5><br><p>${req.body.message}</p> ` // html body
  });
  if(info){
    res.status(200).send("Thank you for your message! I will respond as soon as possible!")
  }
  

}


router.post("/emailAdmin", (req, res) => {
    
    // create reusable transporter object using the default SMTP transport
    mailer(req, res).catch(err => res.status(500).send("Sorry! There was an issue with this system. Please send an email from your personal account to jacobhopkinsphoto@gmail.com"))
    
    
})

module.exports = router;
