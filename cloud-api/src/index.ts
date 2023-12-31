// src/app.ts
import express from "express";
import ec2Routes from "./routes/ec2Routes";
import dotenv from "dotenv";
import winston from "winston";
import expressWinston from "express-winston";
import s3Routes from './routes/s3Routes';
import dynamodbRoutes from './routes/dynamodbRoutes';

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

// Apply the CORS middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

const logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message, meta }) => {
        // return `${timestamp} [${level}]: ${message} ${meta ? JSON.stringify(meta, null, 2) : ''} \n`;
        return `${timestamp} [${level}]: ${message}`;

      })
    ),
    transports: [
      new winston.transports.Console()
    ]
  });
  
  // Log requests and responses using Express-Winston middleware
  app.use(expressWinston.logger({
    winstonInstance: logger,
    meta: true, // Log metadata like request and response information
    msg: 'HTTP {{req.method}} {{res.statusCode}} {{req.url}} {{res.responseTime}}ms',
    colorize: true // Apply colors to the console output
  }));

app.get("/", async (req, res) => {
    return res.json({ message: "working fine!" });
});

app.use("/ec2", ec2Routes);
app.use('/s3', s3Routes);
app.use('/dynamodb', dynamodbRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
