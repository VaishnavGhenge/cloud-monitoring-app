import { Response } from 'express';

import {ListBucketsCommand, S3Client} from "@aws-sdk/client-s3"
import {fromEnv} from "@aws-sdk/credential-providers"


const getS3Client = () => {
    return new S3Client({
        region: process.env.REGION ?? 'ap-south-1',
        credentials: fromEnv()
    })
}

 export const  getS3Buckets = () => {
        const S3= getS3Client();
        return S3.send(new ListBucketsCommand({}));
  }

  export const getS3BucketDetails = (bucketName: string) => {
            const s3= getS3Client();
            return s3.send(new ListBucketsCommand({
                 Bucket: bucketName 
                }));
  };

  


