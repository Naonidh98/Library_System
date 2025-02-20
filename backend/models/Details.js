const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema(
  {
    contact : {
      type: String,
      required: true,
    },
    address : {
        type: String,
        required: true,
    }
  }
);

module.exports = mongoose.model("Details", detailSchema);