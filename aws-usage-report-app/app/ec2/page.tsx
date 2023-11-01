'use client'

import {FunctionComponent, useEffect, useState} from "react";
import {DescribeInstanceAttributeCommandOutput, Instance} from "@aws-sdk/client-ec2";
import {describeInstances} from "@/aws/ec2";

const ec2 = () => {
    const [instances, setInstances] = useState([]);

    useEffect(() => {
        describeInstances()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstances(data.Reservations[0].Instances.map(instance => (
                    <div key={instance.InstanceId}>
                        {instance.InstanceId},
                        {instance.KeyName}
                    </div>
                )));
            })
    }, []);

    return (
        <div>
            <h1>EC2 dashboard</h1>
            <div>
                {instances}
            </div>
        </div>
    )
}

export default ec2;