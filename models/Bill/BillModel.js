const mongoose = require("mongoose");
const { Schema } = mongoose;

const BillSchema = new Schema({
  orderDate: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    qty: Number
  }],
  status: {
    type: String,
    required: true,
  },
});

const Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;
