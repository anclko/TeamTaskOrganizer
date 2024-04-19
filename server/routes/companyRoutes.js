import express from "express";
const router = express.Router();
import { 
    getProjects,
    getProjectById,
} from "../controllers/projectController.js";

router.route('/projects').get(getProjects);
router.route('/projects/:id').get(getProjectById);


export {router};