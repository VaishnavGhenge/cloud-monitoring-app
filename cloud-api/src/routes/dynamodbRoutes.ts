import express, {Router, Request, Response} from "express";
import { dynamodbcontroller } from "../controllers/dynamodbController";

const router: Router = express.Router();

router.get('/', dynamodbcontroller.getAllDbTables);

export default router;