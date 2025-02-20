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
        type: Date,
        required: true,
        default : Date.now()
    },
    returnDate: {
        type: Date,
        required: true,
    },
  }
);

module.exports = mongoose.model("Issue", issueSchema);