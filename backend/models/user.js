const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  city: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.new,
  },
});

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      city: this.city,
    },
    "secretKey"
  );
};

const User = mongoose.model("user", userSchema);

module.exports.User = User;