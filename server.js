// We need to stick with either all import or require, so we're going with "import"
import searchRouter from "./routers/searchRouter.js"
import displayData from './displayData.js'
import threadRouter from "./routers/threadRouter.js";

import db from "./db.js";
import express from 'express';
import bodyParser from 'body-parser'; //Not entirely sure what this does - same
import helmet from 'helmet';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(helmet());
app.use(bodyParser.json()); //Use bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Import Routes
app.use('/', displayData) //Gets article, thread, and user
app.use('/', searchRouter);
app.use('/thread', threadRouter);

// app.set('view engine', 'html');
app.get('/', (req, res) => {
    res.send('This API is working');
});
export default app;


