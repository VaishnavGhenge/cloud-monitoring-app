import { DescribeTableOutput, DynamoDBClient, DescribeTableCommandInput, DescribeTableCommand, ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { fromEnv } from "@aws-sdk/credential-providers";

import dotenv from "dotenv"

dotenv.config();

const getDynamoDBClient = () => {
    return new DynamoDBClient({
        region: process.env.REGION ?? 'ap-south-1' , // Replace with your desired AWS region
        credentials: fromEnv()
        });
}

export const getallDynamoDBTables = () => {
    const DDb = getDynamoDBClient();

    return DDb
            .send(
                new ListTablesCommand({})
            )
}
