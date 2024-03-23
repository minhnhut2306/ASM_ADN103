const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Bill = new Schema({

  costomeraddress: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("bill", Bill);
