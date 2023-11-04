import {DescribeInstancesCommand, EC2Client} from "@aws-sdk/client-ec2"
import {fromEnv} from "@aws-sdk/credential-providers"

import dotenv from "dotenv"

dotenv.config();

/**
 * Returns EC2Client object
 * */
const getEC2Client = () => {
    return new EC2Client({
        region: process.env.REGION ?? 'ap-south-1',
        credentials: fromEnv() // Requires AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables
    });
}

export const getAllEC2Instances = () => {
    const ec2 = getEC2Client();

    return ec2
        .send(
           new DescribeInstancesCommand({})
        )
}