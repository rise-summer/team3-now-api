//const mongoose = require('mongoose');
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

// Need to set MONGOHQ_URL to our database
// MongoClient.connect(process.env.MONGO_URL_PROD, function(err, database) {  
//     db = database;
//     db.collection("textstore", { }, function(err, coll) {
        
//         // Capture error in callback and check if it's not null
//         // If it doesn't exist, create it
//         if (err != null) {
//             db.createCollection("textstore", function(err, result) {
//                 assert.equal(null, err); // Quick way to make program halt if there is an error
//             });
//         }

//     db.ensureIndex("textstore", {
//         document: "text"
//     }, function(err, indexname) {
//         assert.equal(null, err);
//         });
//     app.listen(3000);
//     });
// });

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

export default db;