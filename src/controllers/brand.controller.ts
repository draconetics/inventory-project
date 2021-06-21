import {NextFunction, Request, Response } from "express";
import mongoose from 'mongoose';

import Brand from "../models/brand";

import {IBrand} from '../interfaces/IBrand';
import {IBrands} from '../interfaces/IBrands';
import { HttpException } from "../common/HttpException";
import { validate } from "./utils/brand.util";
import { validateParamId } from "./utils/util";



export const getBrandList = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
  
        try{
            const brands:IBrands = await Brand.find({});
            let resp = {
            status: 200,
            message: "success",
            data: brands
            }
            res.status(200).json(resp);
        }catch(e){
            next(new HttpException(e.status, e.message));
        } 
    
    };

  export const createBrand = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
      try{
        validate(req.body)
        const newBrand:IBrand = new Brand(req.body);
        await newBrand.save();
        res.status(201).json({status:201,message:"success",data:newBrand});
      }catch(e){
        //console.log("this is the catcher")
        //console.log(e)
        next(new HttpException(e.status,e.message));
      }
  };

  export const getBrandById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
      try{
        validateParamId(req.params.id,next)
        let id = mongoose.Types.ObjectId(req.params.id);
        const brandFound:IBrand|null = await Brand.findOne({_id: id})
        if(brandFound)
            res.status(200).json({status:200, message:"success", data:brandFound});
        next(new HttpException(500,"Brand not Found"));
      }catch(e){
            next(new HttpException(e.status,e.message));
      }
  };


  export const deleteBrandById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
      try{
        validateParamId(req.params.id,next)
        let id = mongoose.Types.ObjectId(req.params.id);
        const brandFound:IBrand|null = await Brand.findByIdAndRemove(id)
        //console.log(noteFound)
        if(brandFound)
            res.status(200).json({status:200, message:"success", data:brandFound});
        next(new HttpException(500,"Not found element to delete"));
      }catch(e){
        //console.log("this is the catcher")
        //console.log(e)
        next(new HttpException(e.status,e.message));
      }
  }; 