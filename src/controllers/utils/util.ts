import { NextFunction } from "express";

export const validateParamId = (param:string, next: NextFunction)=>{
    let idFilter: RegExp = /[0-9a-f]{24}/;
    if(!idFilter.test(param)){
        next();
    }
        
}