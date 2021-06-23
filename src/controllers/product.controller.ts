import {NextFunction, Request, response, Response } from "express";
import mongoose from 'mongoose';

import { HttpException } from "../common/HttpException";
import { validate } from "./utils/brand.util";
import { validateParamId } from "./utils/util";
import { IProducts } from "../interfaces/IProducts";
import { IProduct } from "../interfaces/IProduct";
import Product from "../models/product";



export const getProductList = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
  
        try{
            const products:IProducts = await Product.find({}).populate("brand");
            let resp = {
                status: 200,
                message: "success",
                data: products
            }
            res.status(200).json(resp);
        }catch(e){
            next(new HttpException(e.status, e.message));
        } 
    
    };

  export const createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
      try{
        //validate(req.body)
        const newProduct:IProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({status:201,message:"success",data:newProduct});
      }catch(e){
        //console.log("this is the catcher")
        //console.log(e)
        next(new HttpException(e.status,e.message));
      }
  };

  export const getProductById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
      try{
        validateParamId(req.params.id,next)
        let id = mongoose.Types.ObjectId(req.params.id);
        const productFound:IProduct|null = await Product.findOne({_id: id}).populate("brand");
        if(productFound)
            res.status(200).json({status:200, message:"success", data:productFound});
        else
            next(new HttpException(500,"Brand not Found"));
      }catch(e){
            next(new HttpException(e.status,e.message));
      }
  };

  export const updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
      try{
        validateParamId(req.body._id,next)
        let productId = mongoose.Types.ObjectId(req.body._id);
        validateParamId(req.body.brand,next)
        let brandId = mongoose.Types.ObjectId(req.body.brand);
        
        const productFound = await Product.findOneAndUpdate(
          { _id: productId },
          {
            $set: {
              gender: req.body.gender,
              cost: req.body.cost,
              brand: brandId
            }
          },
          {
            upsert: true
          }
        ).populate('brand');

        if(productFound){
          res.status(200).json({status:200, message:"success", data:{...req.body,brand:productFound.brand}});
        }else{
          next(new HttpException(500,"Product not Found"));
        }
      }catch(e){
            next(new HttpException(e.status,e.message));
      }
  };



  export const deleteProductById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
      try{
        validateParamId(req.params.id,next)
        let id = mongoose.Types.ObjectId(req.params.id);
        const productFound:IProduct|null = await Product.findByIdAndRemove(id)
        //console.log(noteFound)
        if(productFound)
            res.status(200).json({status:200, message:"success", data:productFound});
        else
            next(new HttpException(500,"Not found element to delete"));
      }catch(e){
        //console.log("this is the catcher")
        //console.log(e)
        next(new HttpException(e.status,e.message));
      }
  };