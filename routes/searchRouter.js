import express from "express"

const searchRoute = express.Router();
searchRoute.get('/search', searchFunction)

module.exports