import db from "./db";
import server from "./server";
import dotenv from "dotenv";
import "@babel/polyfill";
import "./models/Article";
import "./models/Resource";
import "./models/Thread";

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on port ${PORT}`);

server.listen(`${PORT}`, handleListening);