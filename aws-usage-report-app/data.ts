export const ec2Instances = [
    {
        "AmiLaunchIndex": 0,
        "ImageId": "ami-08e5424edfe926b43",
        "InstanceId": "i-06446eaf4dd8eb590",
        "InstanceType": "t2.micro",
        "KeyName": "Vaishnav Ubuntu",
        "LaunchTime": "2023-10-29T08:26:36.000Z",
        "Monitoring": {
            "State": "disabled"
        },
        "Placement": {
            "AvailabilityZone": "ap-south-1b",
            "GroupName": "",
            "Tenancy": "default"
        },
        "PrivateDnsName": "ip-172-31-10-251.ap-south-1.compute.internal",
        "PrivateIpAddress": "172.31.10.251",
        "ProductCodes": [],
        "PublicDnsName": "",
        "State": {
            "Code": 80,
            "Name": "stopped"
        },
        "StateTransitionReason": "User initiated (2023-10-29 08:34:20 GMT)",
        "SubnetId": "subnet-0c3e9265259ac6356",
        "VpcId": "vpc-0874eb1f0276b8168",
        "Architecture": "x86_64",
        "BlockDeviceMappings": [
            {
                "DeviceName": "/dev/sda1",
                "Ebs": {
                    "AttachTime": "2023-10-26T17:07:47.000Z",
                    "DeleteOnTermination": true,
                    "Status": "attached",
                    "VolumeId": "vol-0973ab3564044d814"
                }
            }
        ],
        "ClientToken": "b499e5e7-3e9a-43cd-b686-3482fabab3a8",
        "EbsOptimized": false,
        "EnaSupport": true,
        "Hypervisor": "xen",
        "NetworkInterfaces": [
            {
                "Attachment": {
                    "AttachTime": "2023-10-26T17:07:46.000Z",
                    "AttachmentId": "eni-attach-0ca3c34ab9fa721ba",
                    "DeleteOnTermination": true,
                    "DeviceIndex": 0,
                    "Status": "attached",
                    "NetworkCardIndex": 0
                },
                "Description": "",
                "Groups": [
                    {
                        "GroupName": "launch-wizard-1",
                        "GroupId": "sg-0c4667dfb484bb772"
                    }
                ],
                "Ipv6Addresses": [],
                "MacAddress": "0a:d9:fa:90:8e:a2",
                "NetworkInterfaceId": "eni-0e7e16c46ec36e42c",
                "OwnerId": "595111116143",
                "PrivateDnsName": "ip-172-31-10-251.ap-south-1.compute.internal",
                "PrivateIpAddress": "172.31.10.251",
                "PrivateIpAddresses": [
                    {
                        "Primary": true,
                        "PrivateDnsName": "ip-172-31-10-251.ap-south-1.compute.internal",
                        "PrivateIpAddress": "172.31.10.251"
                    }
                ],
                "SourceDestCheck": true,
                "Status": "in-use",
                "SubnetId": "subnet-0c3e9265259ac6356",
                "VpcId": "vpc-0874eb1f0276b8168",
                "InterfaceType": "interface"
            }
        ],
        "RootDeviceName": "/dev/sda1",
        "RootDeviceType": "ebs",
        "SecurityGroups": [
            {
                "GroupName": "launch-wizard-1",
                "GroupId": "sg-0c4667dfb484bb772"
            }
        ],
        "SourceDestCheck": true,
        "StateReason": {
            "Code": "Client.UserInitiatedShutdown",
            "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
        },
        "VirtualizationType": "hvm",
        "CpuOptions": {
            "CoreCount": 1,
            "ThreadsPerCore": 1
        },
        "CapacityReservationSpecification": {
            "CapacityReservationPreference": "open"
        },
        "HibernationOptions": {
            "Configured": false
        },
        "MetadataOptions": {
            "State": "applied",
            "HttpTokens": "optional",
            "HttpPutResponseHopLimit": 1,
            "HttpEndpoint": "enabled",
            "HttpProtocolIpv6": "disabled",
            "InstanceMetadataTags": "disabled"
        },
        "EnclaveOptions": {
            "Enabled": false
        },
        "PlatformDetails": "Linux/UNIX",
        "UsageOperation": "RunInstances",
        "UsageOperationUpdateTime": "2023-10-26T17:07:46.000Z",
        "PrivateDnsNameOptions": {
            "HostnameType": "ip-name",
            "EnableResourceNameDnsARecord": true,
            "EnableResourceNameDnsAAAARecord": false
        },
        "MaintenanceOptions": {
            "AutoRecovery": "default"
        },
        "CurrentInstanceBootMode": "legacy-bios"
    },
    {
        "AmiLaunchIndex": 0,
        "ImageId": "ami-08e5424edfe926b43",
        "InstanceId": "i-06446eaf4dd8eb590",
        "InstanceType": "t2.micro",
        "KeyName": "Vaishnav Ubuntu",
        "LaunchTime": "2023-10-29T08:26:36.000Z",
        "Monitoring": {
            "State": "disabled"
        },
        "Placement": {
            "AvailabilityZone": "ap-south-1b",
            "GroupName": "",
            "Tenancy": "default"
        },
        "PrivateDnsName": "ip-172-31-10-251.ap-south-1.compute.internal",
        "PrivateIpAddress": "172.31.10.251",
        "ProductCodes": [],
        "PublicDnsName": "",
        "State": {
            "Code": 80,
            "Name": "stopped"
        },
        "StateTransitionReason": "User initiated (2023-10-29 08:34:20 GMT)",
        "SubnetId": "subnet-0c3e9265259ac6356",
        "VpcId": "vpc-0874eb1f0276b8168",
        "Architecture": "x86_64",
        "BlockDeviceMappings": [
            {
                "DeviceName": "/dev/sda1",
                "Ebs": {
                    "AttachTime": "2023-10-26T17:07:47.000Z",
                    "DeleteOnTermination": true,
                    "Status": "attached",
                    "VolumeId": "vol-0973ab3564044d814"
                }
            }
        ],
        "ClientToken": "b499e5e7-3e9a-43cd-b686-3482fabab3a8",
        "EbsOptimized": false,
        "EnaSupport": true,
        "Hypervisor": "xen",
        "NetworkInterfaces": [
            {
                "Attachment": {
                    "AttachTime": "2023-10-26T17:07:46.000Z",
                    "AttachmentId": "eni-attach-0ca3c34ab9fa721ba",
                    "DeleteOnTermination": true,
                    "DeviceIndex": 0,
                    "Status": "attached",
                    "NetworkCardIndex": 0
                },
                "Description": "",
                "Groups": [
                    {
                        "GroupName": "launch-wizard-1",
                        "GroupId": "sg-0c4667dfb484bb772"
                    }
                ],
                "Ipv6Addresses": [],
                "MacAddress": "0a:d9:fa:90:8e:a2",
                "NetworkInterfaceId": "eni-0e7e16c46ec36e42c",
                "OwnerId": "595111116143",
                "PrivateDnsName": "ip-172-31-10-251.ap-south-1.compute.internal",
                "PrivateIpAddress": "172.31.10.251",
                "PrivateIpAddresses": [
                    {
                        "Primary": true,
                        "PrivateDnsName": "ip-172-31-10-251.ap-south-1.compute.internal",
                        "PrivateIpAddress": "172.31.10.251"
                    }
                ],
                "SourceDestCheck": true,
                "Status": "in-use",
                "SubnetId": "subnet-0c3e9265259ac6356",
                "VpcId": "vpc-0874eb1f0276b8168",
                "InterfaceType": "interface"
            }
        ],
        "RootDeviceName": "/dev/sda1",
        "RootDeviceType": "ebs",
        "SecurityGroups": [
            {
                "GroupName": "launch-wizard-1",
                "GroupId": "sg-0c4667dfb484bb772"
            }
        ],
        "SourceDestCheck": true,
        "StateReason": {
            "Code": "Client.UserInitiatedShutdown",
            "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
        },
        "VirtualizationType": "hvm",
        "CpuOptions": {
            "CoreCount": 1,
            "ThreadsPerCore": 1
        },
        "CapacityReservationSpecification": {
            "CapacityReservationPreference": "open"
        },
        "HibernationOptions": {
            "Configured": false
        },
        "MetadataOptions": {
            "State": "applied",
            "HttpTokens": "optional",
            "HttpPutResponseHopLimit": 1,
            "HttpEndpoint": "enabled",
            "HttpProtocolIpv6": "disabled",
            "InstanceMetadataTags": "disabled"
        },
        "EnclaveOptions": {
            "Enabled": false
        },
        "PlatformDetails": "Linux/UNIX",
        "UsageOperation": "RunInstances",
        "UsageOperationUpdateTime": "2023-10-26T17:07:46.000Z",
        "PrivateDnsNameOptions": {
            "HostnameType": "ip-name",
            "EnableResourceNameDnsARecord": true,
            "EnableResourceNameDnsAAAARecord": false
        },
        "MaintenanceOptions": {
            "AutoRecovery": "default"
        },
        "CurrentInstanceBootMode": "legacy-bios"
    },
    {
        "AmiLaunchIndex": 0,
        "ImageId": "ami-08e5424edfe926b43",
        "InstanceId": "i-06446eaf4dd8eb590",
        "InstanceType": "t2.micro",
        "KeyName": "Vaishnav Ubuntu",
        "LaunchTime": "2023-10-29T08:26:36.000Z",
        "Monitoring": {
            "State": "disabled"
        },
        "Placement": {
            "AvailabilityZone": "ap-south-1b",
            "GroupName": "",
            "Tenancy": "default"
        },
        "PrivateDnsName": "ip-172-31-10-251.ap-south-1.compute.internal",
        "PrivateIpAddress": "172.31.10.251",
        "ProductCodes": [],
        "PublicDnsName": "",
        "State": {
            "Code": 80,
            "Name": "stopped"
        },
        "StateTransitionReason": "User initiated (2023-10-29 08:34:20 GMT)",
        "SubnetId": "subnet-0c3e9265259ac6356",
        "VpcId": "vpc-0874eb1f0276b8168",
        "Architecture": "x86_64",
        "BlockDeviceMappings": [
            {
                "DeviceName": "/dev/sda1",
                "Ebs": {
                    "AttachTime": "2023-10-26T17:07:47.000Z",
                    "DeleteOnTermination": true,
                    "Status": "attached",
                    "VolumeId": "vol-0973ab3564044d814"
                }
            }
        ],
        "ClientToken": "b499e5e7-3e9a-43cd-b686-3482fabab3a8",
        "EbsOptimized": false,
        "EnaSupport": true,
        "Hypervisor": "xen",
        "NetworkInterfaces": [
            {
                "Attachment": {
                    "AttachTime": "2023-10-26T17:07:46.000Z",
                    "AttachmentId": "eni-attach-0ca3c34ab9fa721ba",
                    "DeleteOnTermination": true,
                    "DeviceIndex": 0,
                    "Status": "attached",
                    "NetworkCardIndex": 0
                },
                "Description": "",
                "Groups": [
                    {
                        "GroupName": "launch-wizard-1",
                        "GroupId": "sg-0c4667dfb484bb772"
                    }
                ],
                "Ipv6Addresses": [],
                "MacAddress": "0a:d9:fa:90:8e:a2",
                "NetworkInterfaceId": "eni-0e7e16c46ec36e42c",
                "OwnerId": "595111116143",
                "PrivateDnsName": "ip-172-31-10-251.ap-south-1.compute.internal",
                "PrivateIpAddress": "172.31.10.251",
                "PrivateIpAddresses": [
                    {
                        "Primary": true,
                        "PrivateDnsName": "ip-172-31-10-251.ap-south-1.compute.internal",
                        "PrivateIpAddress": "172.31.10.251"
                    }
                ],
                "SourceDestCheck": true,
                "Status": "in-use",
                "SubnetId": "subnet-0c3e9265259ac6356",
                "VpcId": "vpc-0874eb1f0276b8168",
                "InterfaceType": "interface"
            }
        ],
        "RootDeviceName": "/dev/sda1",
        "RootDeviceType": "ebs",
        "SecurityGroups": [
            {
                "GroupName": "launch-wizard-1",
                "GroupId": "sg-0c4667dfb484bb772"
            }
        ],
        "SourceDestCheck": true,
        "StateReason": {
            "Code": "Client.UserInitiatedShutdown",
            "Message": "Client.UserInitiatedShutdown: User initiated shutdown"
        },
        "VirtualizationType": "hvm",
        "CpuOptions": {
            "CoreCount": 1,
            "ThreadsPerCore": 1
        },
        "CapacityReservationSpecification": {
            "CapacityReservationPreference": "open"
        },
        "HibernationOptions": {
            "Configured": false
        },
        "MetadataOptions": {
            "State": "applied",
            "HttpTokens": "optional",
            "HttpPutResponseHopLimit": 1,
            "HttpEndpoint": "enabled",
            "HttpProtocolIpv6": "disabled",
            "InstanceMetadataTags": "disabled"
        },
        "EnclaveOptions": {
            "Enabled": false
        },
        "PlatformDetails": "Linux/UNIX",
        "UsageOperation": "RunInstances",
        "UsageOperationUpdateTime": "2023-10-26T17:07:46.000Z",
        "PrivateDnsNameOptions": {
            "HostnameType": "ip-name",
            "EnableResourceNameDnsARecord": true,
            "EnableResourceNameDnsAAAARecord": false
        },
        "MaintenanceOptions": {
            "AutoRecovery": "default"
        },
        "CurrentInstanceBootMode": "legacy-bios"
    }
]