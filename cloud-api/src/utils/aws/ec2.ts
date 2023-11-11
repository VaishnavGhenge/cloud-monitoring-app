import {DescribeInstancesCommand, EC2Client} from "@aws-sdk/client-ec2"
import {fromEnv} from "@aws-sdk/credential-providers"
import {GetMetricDataCommand, GetMetricDataCommandInput} from "@aws-sdk/client-cloudwatch"

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

// export const getEC2MetricsData = (instanceId: string) => {
//     const ec2Client = getEC2Client();
//     const endTime = new Date(); // Current time
//     const input: GetMetricDataCommandInput = {
//         StartTime: startTime,
//         EndTime: endTime,
//         MetricDataQueries: [
//             {
//                 Id: 'cpu-utilization',
//                 MetricStat: {
//                   Metric: {
//                     Namespace: 'AWS/EC2',
//                     MetricName: 'CPUUtilization',
//                     Dimensions: [
//                       {
//                         Name: 'InstanceId',
//                         Value: instanceId,
//                       },
//                     ],
//                   },
//                   Period: 30, // 30 sec data points
//                   Stat: 'Average',
//                 },
//               },
//         ]
//     };

    
// }