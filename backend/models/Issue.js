const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    bookId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    issueDate: {
        type: String,
        required: true,
    },
    returnDate: {
        type: String,
        required: true,
    },
    fine: {
      type: Number,
      required: true,
      default : 0
  },
  remarks : {
    type : String
  }
  }
);

module.exports = mongoose.model("Issue", issueSchema);