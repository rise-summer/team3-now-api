import mongoose from 'mongoose'
//const dotenv = require('dotenv'); 
//Why do we require and config the dotenv in db AND in server?
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(
    process.env.PRODUCTION ? process.env.MONGO_URL_PROD : process.env.MONGO_URL_TEST,  //From the .env file
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

export default db;