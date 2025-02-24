const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name : {type: String,
      required: true,},
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["admin", "user"],
    },
    details : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Details",
      required: true,
    }
  }
);

module.exports = mongoose.model("User", userSchema);