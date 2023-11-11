
import express, {Request, Response} from "express";
import {getS3Buckets , getS3BucketDetails} from "../utils/aws/s3";

 export const s3controller = { 
       getBuckets : async (req : Request,res: Response)=>{
      try {
            const data= await getS3Buckets();
            return res.json(data);
      } catch(err) {
            console.error(err);
            return res.status(500).json({error: 'Internal server error'});
        }
      },
       getS3BucketDetails : async (req: Request, res: Response) => {
            try {
                  const bucketName = req.params.bucketName;
                  const bucketDetails = await getS3BucketDetails(bucketName);
                  return res.json(bucketDetails);
            } catch (err) {
                  console.error(err);
                  return res.status(500).json({ error: 'Internal server error' });
            }
      }
} 