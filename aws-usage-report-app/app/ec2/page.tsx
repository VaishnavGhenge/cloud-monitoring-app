'use client'

import { useState, useEffect } from "react";
import { describeInstances, IEc2Instance } from "@/aws/ec2";
import {Table, TableHeader, TableHead, TableBody, TableRow, TableCell} from "@/components/ui/table";
import { useRouter } from "next/navigation";

const Ec2 = () => {
    const router = useRouter();

    const [instances, setInstances] = useState<IEc2Instance[]>([]);

    useEffect(() => {
        // Fetch data and update instances using describeInstances function
        const fetchData = async () => {
            const data = await describeInstances();
            setInstances(data);
        };
        fetchData();
    }, []);

    const getInstanceStatusClass = (stateName: string) => {
        switch(stateName) {
            case 'running': return 'text-green-700';
            case 'terminated': return 'text-red-600';
            case 'stopped': return 'text-red-600';
            case 'stopping': return 'text-red-600';
            case 'shutting-down': return 'text-red-600';
            case 'pending': return 'text-orange-400';
            default: return 'text-white';
        }
    }

    const onInstanceRowClick = (instanceId: string) => {
        router.push(`/ec2/${instanceId}`);
    }

    const ec2InstancesList = instances.map((instance) => (
        <TableRow key={instance.InstanceId} onClick={() => onInstanceRowClick(instance.InstanceId)} className='hover:cursor-pointer'>
                <TableCell>{instance.InstanceId}</TableCell>
                <TableCell>{instance.KeyName}</TableCell>
                <TableCell>{instance.Placement.AvailabilityZone}</TableCell>
                <TableCell className={getInstanceStatusClass(instance.State.Name)}>{instance.State.Name}</TableCell>
        </TableRow>
    ));

    return (
        <div>
            <h1>EC2 dashboard</h1>
            <Table className='mt-4'>
                <TableHeader>
                    <TableRow>
                        <TableHead>InstanceId</TableHead>
                        <TableHead>KeyName</TableHead>
                        <TableHead>Availability Zone</TableHead>
                        <TableHead>State</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ec2InstancesList}
                </TableBody>
            </Table>
        </div>
    );
};

export default Ec2;
