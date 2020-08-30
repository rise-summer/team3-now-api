import express from 'express';
import routes from '../routes.js';
import {
    postResourceSubmit
} from "../controllers/threadController.js"

const threadRouter = express.Router();

threadRouter.post(routes.addResource, postResourceSubmit);

export default threadRouter;