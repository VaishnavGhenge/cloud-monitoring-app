import {DescribeInstancesCommand, EC2Client} from "@aws-sdk/client-ec2"
import {fromEnv} from "@aws-sdk/credential-providers"
import {GetMetricStatisticsCommand, GetMetricStatisticsCommandInput} from "@aws-sdk/client-cloudwatch"
import { getCloudWatchClient } from "./cloudWatch"

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
    const ec2Client = getEC2Client();
    return ec2Client
        .send(
            new DescribeInstancesCommand({})
        )
}

export const getEc2Instance = (instanceId: string) => {
    const ec2Client = getEC2Client();
    return ec2Client.send(
        new DescribeInstancesCommand({
            InstanceIds: [instanceId]
        })
    )
}

/**
 * Function to get EC2 memory utilization data
 * @param instanceId EC2 instance id
 * @param startTime Time from EC2 memory utilization data is to be fetched (default: 1 hour ago)
 * @param endTime Time till EC2 memory utilization data is to be fetched (default: current time)
 * @returns EC2 instance memory utilization data
 */
export const getEc2MemoryUtilization = (instanceId: string, startTime = new Date(Date.now() - 3600000), endTime = new Date()) => {
    const cloudWatchClient = getCloudWatchClient();
    const params: GetMetricStatisticsCommandInput = {
        Namespace: 'AWS/EC2',
        MetricName: 'CPUUtilization',
        Dimensions: [
            {
                Name: 'InstanceId',
                Value: instanceId
            }
        ],
        StartTime: startTime,
        EndTime: endTime,
        Period: 300,
        Statistics: ['Average']
    };

    return cloudWatchClient.send(
        new GetMetricStatisticsCommand(params)
    )
}