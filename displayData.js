//Justin's API for displaying data
import db from "./db.js";
import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
dotenv.config();

import Article from "./models/Article.js"
import Thread from "./models/Thread.js"
import User from "./models/User.js"

const displayData = express.Router();
displayData.use(bodyParser.json()); //Use bodyParser middleware
displayData.use(bodyParser.urlencoded({ extended: true }));

displayData.use(bodyParser.json());

//const displayData = express.Router();

displayData.get('/article', (req, res) => {
    try{
        const article = Article.find();
        res.json(Article);
    }catch(err){
        res.json({message:err})
    }
})

displayData.get('/thread', (req, res) => {
    try{
        const thread = Thread.find();
        res.json(Thread);
    }catch(err){
        res.json({message:err})
    }
})

displayData.get('/user', (req, res) => {
    try{
        res.send('Fetch user data');
        const user = User.find();
        res.json(User);
    }catch(err){
        res.json({message:err})
    }
})

export default displayData;