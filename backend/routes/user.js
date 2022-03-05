const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

// post es registrar
router.post("/", async (req, res) => { 
  // finOne busca coincidencias con el dato entrante
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("Usuario ya existe");
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    city: req.body.city,
  });
  const result = await user.save();
  const jwtToken = user.generateJWT();
  res.status(200).send({ jwtToken });
});

module.exports = router;