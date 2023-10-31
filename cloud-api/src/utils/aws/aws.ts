// import {fromCognitoIdentityPool} from "@aws-sdk/credential-provider-cognito-identity"; // ES6 import
import {DescribeInstancesCommand, EC2Client} from "@aws-sdk/client-ec2"
// import {CognitoIdentityClient} from "@aws-sdk/client-cognito-identity";
import {fromEnv} from "@aws-sdk/credential-providers"

import dotenv from "dotenv"

dotenv.config();

const getEC2Client = () => {
    return new EC2Client({
        region: process.env.REGION ?? 'ap-south-1',
        credentials: fromEnv()
    })
}

export const getEC2Instances = () => {
    const ec2 = getEC2Client();

    return ec2
        .send(
            new DescribeInstancesCommand({})
        )
}