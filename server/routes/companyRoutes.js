import express from "express";
const router = express.Router();
import { 
    getProjects,
    getProjectById,
    postProject,
} from "../controllers/projectController.js";
import {
    getEmployees
} from "../controllers/employeeController.js";

//PROJECTS ROUTES
router.route('/projects').get(getProjects);
router.route('/projects/:id').get(getProjectById);
router.route('/projects').post(postProject);

//EMPLOYEE ROUTES
router.route('/employees').get(getEmployees);


export {router};