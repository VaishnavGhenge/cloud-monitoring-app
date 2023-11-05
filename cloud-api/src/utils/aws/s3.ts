import { Response } from 'express';

import {ListBucketsCommand, S3Client} from "@aws-sdk/client-s3"
import {fromEnv} from "@aws-sdk/credential-providers"


const getS3Client = () => {
    return new S3Client({
        region: process.env.REGION ?? 'ap-south-1',
        credentials: fromEnv()
    })
}

export const getAllS3Instances = () => {
    const s3 = getS3Client();

    return s3
        .send(
            new ListBucketsCommand({})
        )
}