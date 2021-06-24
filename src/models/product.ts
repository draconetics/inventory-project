const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    gender: String,
    cost: Number,
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand"
      }
  },{  timestamps: true });
  
  
  export = mongoose.model("Product", productSchema);
  