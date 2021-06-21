const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    gender: String,
    cost: Number,
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand"
    }
  })
);

module.exports = Product;