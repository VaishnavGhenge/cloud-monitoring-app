import express, {Router, Request, Response} from "express";
import {ec2Controller} from "../controllers/ec2Controller";

const router: Router = express.Router();

router.get('/', ec2Controller.getAllInstances);

export default router;