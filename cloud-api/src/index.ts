// src/app.ts
import express from 'express';
import {getEC2Instances} from "./utils/aws/aws";

const app = express();
const port = 8080;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // You can set other CORS headers as needed, such as methods and headers.
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/', async (req, res) => {
    try {
        const response = await getEC2Instances();
        return res.json(response);
    }
    catch (err) {
        console.error(err)
        return res.json({error: err})
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
