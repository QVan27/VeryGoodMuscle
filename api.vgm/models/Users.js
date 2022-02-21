const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  last_name: {
    type: String,
    required: [true, "Please add a last name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  first_name: {
    type: String,
    required: [true, "Please add a first name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
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
  birthdate: {
    type: Date,
    required: [true, "Please add a birthdate"],
  },
  height: {
    type: Number,
    required: [false],
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
