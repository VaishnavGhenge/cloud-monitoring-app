
import express, {Request, Response} from "express";
import {getAllS3Instances} from "../utils/aws/s3";

 export const s3controller = { 
       getInstances : async (req : Request,res: Response)=>{
            const data= await getAllS3Instances();
            console.log('data', data);
            return res.json(data);
      }
 } 
