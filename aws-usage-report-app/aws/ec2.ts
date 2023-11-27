import { apiUrl } from "@/config";

export interface IEc2Instance {
    InstanceId: string;
    InstanceType: string;
    LaunchTime: string;
    Placement: {
      AvailabilityZone: string;
    };
    PrivateDnsName: string;
    PrivateIpAddress: string;
    State: {
      Name: string;
    };
  }

/**
 * This function retrives all EC2 instances from aws
 * @returns Promise<IEc2Instance[]> An array of EC2 instances.
 */
export const describeInstances = async (): Promise<IEc2Instance[]> => {
    const response =  await fetch(`${apiUrl}/ec2`);
    const data = await response.json();

    console.log(data)
    
    const instances = data.Reservations.map((reserve: any) => reserve.Instances[0])
    return instances ?? [];
}

export const describeInstance = async (instanceId: string) => {
    const getEC2InstanceUrl = `${apiUrl}/ec2/${instanceId}`
    const response = await fetch(getEC2InstanceUrl);
    return response;
}

export const getMemoryUtilization = async (instanceId: string, startTime: string, endTime: string) => {
    const getMemoryUtilizationUrl = `${apiUrl}/ec2/${instanceId}/memory-utilization?startTime=${startTime}&endTime=${endTime}`;
    const response = await fetch(getMemoryUtilizationUrl);
    return response;
}