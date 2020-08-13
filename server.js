// We need to stick with either all import or require, so we're going with "import"
import searchRouter from "./routes/searchRouter.js"
// const searchRouter = require('./routes/searchRouter');

import db from "./db.js";
import express from 'express';
import bodyParser from 'body-parser'; //Not entirely sure what this does - same

import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const app = express();
app.use(bodyParser.json()); //Use bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', searchRouter)

// app.set('view engine', 'html');
// app.get('/', (req, res) => {
//     res.send('This API is working');
// })

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on port ${PORT}`);

app.listen(`${PORT}`, handleListening);