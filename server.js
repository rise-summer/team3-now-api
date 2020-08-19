import express from 'express';
import helmet from 'helmet';

import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import bodyParser from 'body-parser';

import db from "./db";
import searchRouter from "./routers/searchRouter" //Should we use require instead of import?
import threadRouter from "./routers/threadRouter";

const server = express();
server.use(helmet());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/', searchRouter);
server.use('/thread', threadRouter);


export default server;


