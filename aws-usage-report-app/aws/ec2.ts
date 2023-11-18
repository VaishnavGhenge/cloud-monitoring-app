import { apiUrl } from "@/config";
import { log } from "console";

export interface IEc2Instance {
    AmiLaunchIndex: number;
    ImageId: string;
    InstanceId: string;
    InstanceType: string;
    KeyName: string;
    LaunchTime: string;
    Monitoring: {
        State: string;
    };
    Placement: {
        AvailabilityZone: string;
        GroupName: string;
        Tenancy: string;
    };
    PrivateDnsName: string;
    PrivateIpAddress: string;
    ProductCodes: string[];
    PublicDnsName: string;
    State: {
        Code: number;
        Name: string;
    };
    StateTransitionReason: string;
    SubnetId: string;
    VpcId: string;
    Architecture: string;
    BlockDeviceMappings: {
        DeviceName: string;
        Ebs: {
            AttachTime: string;
            DeleteOnTermination: boolean;
            Status: string;
            VolumeId: string;
        };
    }[];
    ClientToken: string;
    EbsOptimized: boolean;
    EnaSupport: boolean;
    Hypervisor: string;
    NetworkInterfaces: {
        Attachment: {
            AttachTime: string;
            AttachmentId: string;
            DeleteOnTermination: boolean;
            DeviceIndex: number;
            Status: string;
            NetworkCardIndex: number;
        };
        Description: string;
        Groups: {
            GroupName: string;
            GroupId: string;
        }[];
        Ipv6Addresses: string[];
        MacAddress: string;
        NetworkInterfaceId: string;
        OwnerId: string;
        PrivateDnsName: string;
        PrivateIpAddress: string;
        PrivateIpAddresses: {
            Primary: boolean;
            PrivateDnsName: string;
            PrivateIpAddress: string;
        }[];
        SourceDestCheck: boolean;
        Status: string;
        SubnetId: string;
        VpcId: string;
        InterfaceType: string;
    }[];
    RootDeviceName: string;
    RootDeviceType: string;
    SecurityGroups: {
        GroupName: string;
        GroupId: string;
    }[];
    SourceDestCheck: boolean;
    StateReason: {
        Code: string;
        Message: string;
    };
    VirtualizationType: string;
    CpuOptions: {
        CoreCount: number;
        ThreadsPerCore: number;
    };
    CapacityReservationSpecification: {
        CapacityReservationPreference: string;
    };
    HibernationOptions: {
        Configured: boolean;
    };
    MetadataOptions: {
        State: string;
        HttpTokens: string;
        HttpPutResponseHopLimit: number;
        HttpEndpoint: string;
        HttpProtocolIpv6: string;
        InstanceMetadataTags: string;
    };
    EnclaveOptions: {
        Enabled: boolean;
    };
    PlatformDetails: string;
    UsageOperation: string;
    UsageOperationUpdateTime: string;
    PrivateDnsNameOptions: {
        HostnameType: string;
        EnableResourceNameDnsARecord: boolean;
        EnableResourceNameDnsAAAARecord: boolean;
    };
    MaintenanceOptions: {
        AutoRecovery: string;
    };
    CurrentInstanceBootMode: string;
}

/**
 * This function retrives all EC2 instances from aws
 * @returns Promise<IEc2Instance[]> An array of EC2 instances.
 */
export const describeInstances = async (): Promise<IEc2Instance[]> => {
    const response =  await fetch(`${apiUrl}/ec2`);
    const data = await response.json();
    
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