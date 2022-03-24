import express from "express";
import { body, validationResult } from "express-validator";
import { createServer } from "http";

import config from 'config';

const port = config.get<number>("port");
const host = config.get<string>("host");

const app = express();

const httpServer = createServer(app);

app.get('/', (req,res)=>{
    res.send(`Server health ok`);
});

app.post("/register", (req, res)=>{

    res.send(req.body);
})
app.post('/login', (req, res)=>{
    res.send('login api');
})

httpServer.listen(port, host, ()=>{
    console.log(`server started on ${host} : ${port}`);
})