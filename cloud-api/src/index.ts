// src/app.ts
import express from 'express';
import {getEC2Instances} from "./utils/aws/aws";

const app = express();
const port = 3000;

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
