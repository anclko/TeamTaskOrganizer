import express from "express";
const router = express.Router();
import { 
    getProjects,
    getProjectById,
    postProject,
} from "../controllers/projectController.js";
import {
    getEmployees,
    postEmployee,
    getEmployeeById,
} from "../controllers/employeeController.js";
import {
    getProjectAssignments,
    postProjectAssignment
} from "../controllers/projectAssignmentController.js";


//PROJECTS ROUTES
router.route('/projects').get(getProjects);
router.route('/projects/:id').get(getProjectById);
router.route('/projects').post(postProject);

//EMPLOYEE ROUTES
router.route('/employees').get(getEmployees);
router.route('/employees').post(postEmployee);
router.route('/employees/:id').get(getEmployeeById);

//PROJECT ASSIGMENT
router.route('/project_assignments').get(getProjectAssignments);
router.route('/project_assignments').post(postProjectAssignment);

export {router};