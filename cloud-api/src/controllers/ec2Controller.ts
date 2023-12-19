import express, { Request, Response } from "express";
import ec2DummyData from "../../awsFakeData/ec2"

import {
    getAllEC2Instances,
    getEc2Instance,
    getEc2MemoryUtilization,
} from "../utils/aws/ec2";

export const ec2Controller = {
    getAllInstances: async (req: Request, res: Response) => {
        try {
            const response = process.env.DUMMY_DATA_MODE == 'true' ? ec2DummyData.ec2InstancesResponse : await getAllEC2Instances();
            return res.json(response);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
    getEc2Instance: async (req: Request, res: Response) => {
        try {
            const instanceId = req.params.instanceId;
            const response = await getEc2Instance(instanceId);
            return res.json(response);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
    getMemoryUtilization: async (req: Request, res: Response) => {
        try {
            const instanceId = req.params.instanceId;

            const startTimeISOString = req.query.startTime;
            const endTimeISOString = req.query.endTime;
            const startTime = startTimeISOString
                ? new Date(startTimeISOString as string)
                : new Date(Date.now() - ((7 * 24 * 60 * 60 * 1000))); // 1 hour ago
            const endTime = endTimeISOString
                ? new Date(endTimeISOString as string)
                : new Date(); // current time

            const response = process.env.DUMMY_DATA_MODE == 'true' ? ec2DummyData.CPUUtilization : await getEc2MemoryUtilization(
                instanceId,
                startTime,
                endTime
            );

            return res.json(response);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
};
