import express, {Router, Request, Response} from "express";
import { s3controller } from "../controllers/s3Controller";

const router: Router = express.Router();

router.get('/', s3controller.getBuckets);
router.get('/:bucketName', s3controller.getS3BucketDetails);

export default router;


