import express from 'express'; //Research a way to do it just once for all files?
import {search} from "../controllers/searchController.js"

const searchRouter = express.Router();
searchRouter.get('/search', search)

export default searchRouter;