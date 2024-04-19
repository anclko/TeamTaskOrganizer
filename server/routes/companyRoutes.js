import express from "express";
const router = express.Router();
import { 
    getProjects 
} from "../controllers/projectController.js";

router.route('/projects').get(getProjects);

export {router};