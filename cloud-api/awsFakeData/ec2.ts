const ec2Instances = [
    {
        AmiLaunchIndex: 0,
        ImageId: "ami-0287a05f0ef0e9d9a",
        InstanceId: "i-0403f8bf67d96cc6e",
        InstanceType: "t2.micro",
        KeyName: "Vaishnav Ubuntu",
        LaunchTime: "2023-11-27T06:33:13.000Z",
        Monitoring: {
            State: "disabled",
        },
        Placement: {
            AvailabilityZone: "ap-south-1b",
            GroupName: "",
            Tenancy: "default",
        },
        State: {
            Code: 16,
            Name: "running",
        },
        StateTransitionReason: "",
        Architecture: "x86_64",
        RootDeviceName: "/dev/sda1",
        RootDeviceType: "ebs",
        SourceDestCheck: true,
        Tags: [
            {
                Key: "Name",
                Value: "hello",
            },
        ],
        VirtualizationType: "hvm",
        CpuOptions: {
            CoreCount: 1,
            ThreadsPerCore: 1,
        },
        CapacityReservationSpecification: {
            CapacityReservationPreference: "open",
        },
        HibernationOptions: {
            Configured: false,
        },
        MetadataOptions: {
            State: "applied",
            HttpTokens: "required",
            HttpPutResponseHopLimit: 2,
            HttpEndpoint: "enabled",
            HttpProtocolIpv6: "disabled",
            InstanceMetadataTags: "disabled",
        },
        EnclaveOptions: {
            Enabled: false,
        },
        PlatformDetails: "Linux/UNIX",
        UsageOperation: "RunInstances",
        UsageOperationUpdateTime: "2023-11-27T06:33:13.000Z",
        CurrentInstanceBootMode: "legacy-bios",
    },
    {
        AmiLaunchIndex: 2,
        ImageId: "ami-87654321",
        InstanceId: "i-0987654321abcdef0",
        InstanceType: "m5.large",
        KeyName: "Amazon Linux",
        LaunchTime: "2023-11-27T08:15:00.000Z",
        Monitoring: {
            State: "enabled",
        },
        Placement: {
            AvailabilityZone: "us-west-2a",
            GroupName: "my-vpc-group",
            Tenancy: "default",
        },
        State: {
            Code: 0,
            Name: "pending",
        },
        StateTransitionReason: "",
        Architecture: "x86_64",
        RootDeviceName: "/dev/nvme0n1",
        RootDeviceType: "ebs",
        SourceDestCheck: true,
        Tags: [
            {
                Key: "Environment",
                Value: "Development",
            },
            {
                Key: "App",
                Value: "DatabaseServer",
            },
        ],
        VirtualizationType: "hvm",
        CpuOptions: {
            CoreCount: 4,
            ThreadsPerCore: 2,
        },
        CapacityReservationSpecification: {
            CapacityReservationPreference: "open",
        },
        HibernationOptions: {
            Configured: true,
        },
        MetadataOptions: {
            State: "applied",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 3,
            HttpEndpoint: "disabled",
            HttpProtocolIpv6: "enabled",
            InstanceMetadataTags: "enabled",
        },
        EnclaveOptions: {
            Enabled: false,
        },
        PlatformDetails: "Ubuntu 20.04 LTS",
        UsageOperation: "RunInstances",
        UsageOperationUpdateTime: "2023-11-27T08:15:00.000Z",
        CurrentInstanceBootMode: "uefi",
    },
    {
        AmiLaunchIndex: 3,
        ImageId: "ami-98765432",
        InstanceId: "i-abcdef01234567890",
        InstanceType: "t3.medium",
        KeyName: "MacOS",
        LaunchTime: "2023-11-27T10:45:00.000Z",
        Monitoring: {
            State: "enabled",
        },
        Placement: {
            AvailabilityZone: "us-east-1c",
            GroupName: "production-vpc-group",
            Tenancy: "dedicated",
        },
        State: {
            Code: 32,
            Name: "shutting-down",
        },
        StateTransitionReason: "User initiated shutdown",
        Architecture: "arm64",
        RootDeviceName: "/dev/sda1",
        RootDeviceType: "ebs",
        SourceDestCheck: true,
        Tags: [
            {
                Key: "Environment",
                Value: "Production",
            },
            {
                Key: "App",
                Value: "WebServer",
            },
        ],
        VirtualizationType: "nitro",
        CpuOptions: {
            CoreCount: 2,
            ThreadsPerCore: 2,
        },
        CapacityReservationSpecification: {
            CapacityReservationPreference: "none",
        },
        HibernationOptions: {
            Configured: true,
        },
        MetadataOptions: {
            State: "pending",
            HttpTokens: "optional",
            HttpPutResponseHopLimit: 1,
            HttpEndpoint: "enabled",
            HttpProtocolIpv6: "enabled",
            InstanceMetadataTags: "enabled",
        },
        EnclaveOptions: {
            Enabled: true,
        },
        PlatformDetails: "Amazon Linux 2",
        UsageOperation: "RunInstances",
        UsageOperationUpdateTime: "2023-11-27T10:45:00.000Z",
        CurrentInstanceBootMode: "uefi",
    },
    {
        AmiLaunchIndex: 4,
        ImageId: "ami-abcdefg1234567890",
        InstanceId: "i-0123456789abcdefg",
        InstanceType: "m5.large",
        KeyName: "Windowws 2000",
        LaunchTime: "2023-11-27T12:15:00.000Z",
        Monitoring: {
            State: "enabled",
        },
        Placement: {
            AvailabilityZone: "us-west-2a",
            GroupName: "development-vpc-group",
            Tenancy: "default",
        },
        State: {
            Code: 0,
            Name: "pending",
        },
        StateTransitionReason: "",
        Architecture: "x86_64",
        RootDeviceName: "/dev/sdb",
        RootDeviceType: "ebs",
        SourceDestCheck: true,
        Tags: [
            {
                Key: "Environment",
                Value: "Development",
            },
            {
                Key: "App",
                Value: "DatabaseServer",
            },
        ],
        VirtualizationType: "hvm",
        CpuOptions: {
            CoreCount: 2,
            ThreadsPerCore: 4,
        },
        CapacityReservationSpecification: {
            CapacityReservationPreference: "open",
        },
        HibernationOptions: {
            Configured: false,
        },
        MetadataOptions: {
            State: "applied",
            HttpTokens: "required",
            HttpPutResponseHopLimit: 2,
            HttpEndpoint: "enabled",
            HttpProtocolIpv6: "disabled",
            InstanceMetadataTags: "enabled",
        },
        EnclaveOptions: {
            Enabled: false,
        },
        PlatformDetails: "Ubuntu 20.04 LTS",
        UsageOperation: "RunInstances",
        UsageOperationUpdateTime: "2023-11-27T12:15:00.000Z",
        CurrentInstanceBootMode: "uefi",
    },
];

const ec2InstancesResponse = {
   Reservations: ec2Instances.map(instance => ({Instances: [instance]}))
}

const CPUUtilization = {
    "$metadata": {
      "httpStatusCode": 200,
      "requestId": "d6ee5cf9-8e64-496f-ba2b-7929517eff9c",
      "attempts": 1,
      "totalRetryDelay": 0
    },
    "Label": "CPUUtilization",
    "Datapoints": [
      {
        "Timestamp": "2023-11-27T10:01:00.000Z",
        "Average": 0.06695841437436299,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T08:51:00.000Z",
        "Average": 0.0675531214811135,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T11:11:00.000Z",
        "Average": 0.0675238651860508,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T07:21:00.000Z",
        "Average": 0.06586507004633939,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T10:21:00.000Z",
        "Average": 0.0833704115684093,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T06:31:00.000Z",
        "Average": 0.2323322209862813,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T12:41:00.000Z",
        "Average": 0.0655913978494608,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T11:31:00.000Z",
        "Average": 0.0830693711216079,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T07:41:00.000Z",
        "Average": 0.0830781848004373,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T10:41:00.000Z",
        "Average": 0.06530936012691799,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T06:51:00.000Z",
        "Average": 0.0664115181337704,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T09:11:00.000Z",
        "Average": 0.0672413793103446,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T11:51:00.000Z",
        "Average": 0.0667037449017424,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T08:01:00.000Z",
        "Average": 0.066666666666667,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T11:01:00.000Z",
        "Average": 0.0830874466324278,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T07:11:00.000Z",
        "Average": 0.0666666666666664,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T09:31:00.000Z",
        "Average": 0.0841807909604519,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T12:11:00.000Z",
        "Average": 0.0830781848004373,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T08:21:00.000Z",
        "Average": 0.0666759284986568,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T12:31:00.000Z",
        "Average": 0.0664115181337704,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T11:21:00.000Z",
        "Average": 0.10003707823507631,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T07:31:00.000Z",
        "Average": 0.0830874466324278,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T09:51:00.000Z",
        "Average": 0.1973781624871279,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T08:41:00.000Z",
        "Average": 0.0653353814644134,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T09:01:00.000Z",
        "Average": 0.0836348219332957,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T11:41:00.000Z",
        "Average": 0.0667502088554717,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T07:51:00.000Z",
        "Average": 0.066402704454941,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T10:11:00.000Z",
        "Average": 0.0678263455248288,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T06:21:00.000Z",
        "Average": 3,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T09:21:00.000Z",
        "Average": 0.1304412160344364,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T12:01:00.000Z",
        "Average": 0.06639344262295059,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T08:11:00.000Z",
        "Average": 0.0831807297134988,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T10:31:00.000Z",
        "Average": 0.067250641142335,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T06:41:00.000Z",
        "Average": 0.0825224748810154,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T09:41:00.000Z",
        "Average": 0.068098577829729,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T12:21:00.000Z",
        "Average": 0.0669491525423738,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T08:31:00.000Z",
        "Average": 0.08306937112160791,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T10:51:00.000Z",
        "Average": 0.0680985778297289,
        "Unit": "Percent"
      },
      {
        "Timestamp": "2023-11-27T07:01:00.000Z",
        "Average": 0.0836348219332957,
        "Unit": "Percent"
      }
    ]
  }

export default {ec2InstancesResponse, CPUUtilization};