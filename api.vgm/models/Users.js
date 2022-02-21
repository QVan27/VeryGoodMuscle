const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  last_name: {
    type: String,
    required: [true, "Please add a last name"],
  },
  first_name: {
    type: String,
    required: [true, "Please add a first name"],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
  slug: String,
  birthdate: {
    type: String,
    match: [
      /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/,
      "Please add a birthdate",
    ],
  },
  height: {
    type: String,
    match: [/^\d+$/, "Please add a height in cm"],
  },
  gender: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
