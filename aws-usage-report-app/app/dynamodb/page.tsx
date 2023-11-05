'use client'

import { useState, useEffect } from "react";
import { DescribeTableOutput,  } from "@aws-sdk/client-dynamodb";
import {Table, TableHeader, TableHead, TableBody, TableRow, TableCell} from "@/components/ui/table";
import { describeInstances} from "@/aws/dynamodb";

const Ddb = () => {

    const [instances, setInstances] = useState<string[]>([]);

    useEffect(() => {
        // Fetch data and update instances using describeInstances function
        const fetchData = async () => {
            const data = await describeInstances();
            setInstances(data);
        };
        fetchData();
    }, []);

    const db2instancesList = instances.map((instance) => (
        <TableRow key={instance}>
            <TableCell>{instance}</TableCell>
        </TableRow>
    ));

    return (
        <div>
            <h1>DynamoDB Dashboard</h1>
            <Table className='mt-4'>
                <TableHeader>
                    <TableRow>
                        <TableHead>Table Name</TableHead>
                        
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* {ec2InstancesList} */}
                    {db2instancesList}
                </TableBody>
            </Table>
        </div>
    )
}

export default Ddb;