const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BillSchema = new Schema({
  orderDate: { type: Date, default: Date.now },
  userId: { type: ObjectId, ref: 'User' },
  products: [{
      productId: { type: ObjectId, ref: 'Product' },
      qty: Number
  }],
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bill", BillSchema);
