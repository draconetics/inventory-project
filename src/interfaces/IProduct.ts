import mongoose, {Document, ObjectId} from 'mongoose'

export interface IProduct extends Document{
    gender: String,
    cost: Number,
    brand: IBrand['_id'];
}
