// src/app.ts
import express from "express";
import ec2Routes from "./routes/ec2Routes";
import dotenv from 'dotenv';
import dynamodbRoutes from './routes/dynamodbRoutes';
import winston from "winston";
import expressWinston from "express-winston";
import s3Routes from './routes/s3Routes'
dotenv.config();
const app = express();

const port = 8081;

// Apply the CORS middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/', async (req, res) => {
    return {message: 'working fine!'}
});

app.use('/ec2', ec2Routes);
app.use('/s3', s3Routes);
app.use('/dynamodb', dynamodbRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
