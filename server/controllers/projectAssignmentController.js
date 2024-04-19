import asyncHandler from "express-async-handler";
import { ProjectAssignment } from "../models/projectAssignmentModel.js";
import { Employee } from '../models/employeeModel.js';
import { Project } from '../models/projectModel.js';

//@desc get all project assignments
//@route Get api/project_assignments
//@access public
const getProjectAssignments = asyncHandler(async (req, res) => {
    const projectAssignments = await ProjectAssignment.find({});
    res.status(200).json(projectAssignments);
});

//@desc create new project assignment
//@route POST api/project_assignments
//@access public
const postProjectAssignment = asyncHandler(async (req, res) => {
    const { employee_id, project_id, start_date } = req.body;

    //check if employee exists in db
    const employee = await Employee.findById(employee_id);
    const project = await Project.findById(project_id);

    if (!employee || !project) {
        res.status(404);
        throw new Error('Employee or project not found');
    }

    if (!start_date) {
        res.status(400);
        throw new Error('Start date required');
    }

    const projectAssignment = new ProjectAssignment({
        employee_id,
        project_id,
        start_date
    });

    const createdAssignment = await projectAssignment.save();
    res.status(201).json(createdAssignment);
});

export {
    getProjectAssignments,
    postProjectAssignment
}