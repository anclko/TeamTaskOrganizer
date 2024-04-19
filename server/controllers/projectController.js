import asyncHandler from "express-async-handler";
import {Project} from "../models/projectModel.js";

//@desc get all projects
//@route Get api/projects
//@access public
const getProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({});
    res.status(200).json(projects);
});

//@desc get project by id
//@route Get api/projects/:id
//@access public
const getProjectById = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if(project) {
        res.status(200).json(project);
    } else {
        res.status(404);
        throw new Error('Project not found');
    }
});


//@desc create new project
//@route Get api/projects
//@access public


export {
    getProjects,
    getProjectById,
}