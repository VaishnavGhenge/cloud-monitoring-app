import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import { fromEnv } from "@aws-sdk/credential-provider-env";

export const getCloudWatchClient = () => {
    return new CloudWatchClient({
        region: process.env.REGION ?? 'ap-south-1',
        credentials: fromEnv() // Requires AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY environment variables
    });
}