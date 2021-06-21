import {Document} from 'mongoose'
export interface IBrand extends Document{
    code:String,
    name:String
}
/* 
export interface INoteValidator {
    text?: any,
    complete?: any
} */