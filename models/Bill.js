const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Bill = new Schema({
  customername: {
    type: String,
    required: true,
  },
  costomeremail: {
    type: String,
    required: true,
  },
  costomeraddress: {
    type: String,
    required: true,
  },
  costomerphone: {
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
});

module.exports = mongoose.model("bill", Bill);
