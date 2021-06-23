const mongoose = require("mongoose");
import { IProduct } from "../interfaces/IProduct";

const productSchema = new mongoose.Schema({
    gender: String,
    cost: Number,
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand"
      }
  },{  timestamps: true });
  
  
  export = mongoose.model("Product", productSchema);
  