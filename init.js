import db from "./db.js";
import app from "./server.js";
import dotenv from "dotenv";
import "@babel/polyfill";
import "./models/Article.js";
import "./models/Resource.js";
import "./models/Thread.js";

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on port ${PORT}`);

app.listen(`${PORT}`, handleListening);