import express from "express";
const router = express.Router();
import { 
    getProjects,
    getProjectById,
    postProject,
} from "../controllers/projectController.js";

router.route('/projects').get(getProjects);
router.route('/projects/:id').get(getProjectById);
router.route('/projects').post(postProject);


export {router};