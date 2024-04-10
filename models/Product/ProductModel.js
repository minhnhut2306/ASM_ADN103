const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  description: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("products", ProductSchema);
