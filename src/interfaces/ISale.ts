import mongoose, {Document} from 'mongoose'

export interface ISale extends Document{
    products: [IProduct['_id']];
}
