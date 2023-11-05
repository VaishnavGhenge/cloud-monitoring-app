import express, {Request, Response} from "express";
import {getAllEC2Instances, getEc2Instance} from "../utils/aws/ec2";


export const ec2Controller = {
    getAllInstances: async (req: Request, res: Response) => {
        try {
            const response = await getAllEC2Instances();
            return res.json(response);
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: 'Internal server error'});
        }
    },
    getEc2Instance: async (req: Request, res: Response) => {
        try {
            const instanceId = req.params.instanceId;
            const response = await getEc2Instance(instanceId);
            return res.json(response);
        } catch(err) {
            console.error(err);
            return res.status(500).json({error: 'Internal server error'});
        }
    }
}