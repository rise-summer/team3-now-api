const db = require("./db");
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.get('/', (req, res) => {
    res.render('This API is working');
})

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on port ${PORT}`);

app.listen(`${PORT}`, handleListening);