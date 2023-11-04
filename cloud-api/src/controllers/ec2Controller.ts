import express, {Request, Response} from "express";
import {getAllEC2Instances} from "../utils/aws/aws";


export const ec2Controller = {
    getAllInstances: async (req: Request, res: Response) => {
        console.log('GET: ec2 instaces');
        const data = await getAllEC2Instances();
        console.log('data', data);
        return res.json(data);
    }
}