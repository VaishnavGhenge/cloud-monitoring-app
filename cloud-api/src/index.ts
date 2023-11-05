// src/app.ts
import express from 'express';
import ec2Routes from "./routes/ec2Routes";
import dynamodbRoutes from './routes/dynamodbRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// Apply the CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/', async (req, res) => {
    return res.json({message: 'working fine!'});
});

app.use('/ec2', ec2Routes);
app.use('/dynamodb', dynamodbRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
