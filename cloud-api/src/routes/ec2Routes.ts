import express, {Router, Request, Response} from "express";
import {ec2Controller} from "../controllers/ec2Controller";

const router: Router = express.Router();

router.get('/', ec2Controller.getAllInstances);
router.get('/:instanceId', ec2Controller.getEc2Instance);
router.get('/:instanceId/memory-utilization', ec2Controller.getMemoryUtilization);

export default router;