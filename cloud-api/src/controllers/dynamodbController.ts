import { Express } from "express";
import { Request, Response } from "express";
import { getallDynamoDBTables } from "../utils/aws/dynamodb";

export const dynamodbcontroller = {
    getAllDbTables: async (req: Request, res: Response) => {
        console.log('GET: Dynamo instances');
        const data = await getallDynamoDBTables();

        return res.json(data);
    }
}
