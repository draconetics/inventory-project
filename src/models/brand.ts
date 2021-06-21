import mongoose from "mongoose";
import {IBrand} from '../interfaces/IBrand';

const brandSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    
  },
  name: {
    type: String,
    required: true
  }
},{  timestamps: true });


export = mongoose.model<IBrand>("Brand", brandSchema);
