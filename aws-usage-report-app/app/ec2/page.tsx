'use client'

import { useState, useEffect } from "react";
import { describeInstances, IEc2Instance } from "@/aws/ec2";
import {Table, TableHeader, TableHead, TableBody, TableRow, TableCell} from "@/components/ui/table";

const Ec2 = () => {
    const [instances, setInstances] = useState<IEc2Instance[]>([]);

    useEffect(() => {
        // Fetch data and update instances using describeInstances function
        const fetchData = async () => {
            const data = await describeInstances();
            setInstances(data);
        };
        fetchData();
    }, []);

    const ec2InstancesList = instances.map((instance) => (
        <TableRow key={instance.InstanceId}>
            <TableCell>{instance.InstanceId}</TableCell>
            <TableCell>{instance.KeyName}</TableCell>
            <TableCell>{instance.Placement.AvailabilityZone}</TableCell>
            <TableCell>{instance.State.Name}</TableCell>
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
