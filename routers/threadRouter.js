import express from 'express';
import routes from '../routes';
import {
    postResourceSubmit
} from "../controllers/threadController"

const threadRouter = express.Router();

threadRouter.post(routes.addResource, postResourceSubmit);

export default threadRouter;