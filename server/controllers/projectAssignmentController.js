import asyncHandler from "express-async-handler";
import {ProjectAssignment} from "../models/projectAssignmentModel.js";

//@desc get all project assignments
//@route Get api/project_assignments
//@access public
const getProjectAssignments = asyncHandler(async (req, res) => {
    const projectAssignments = await ProjectAssignment.find({});
    res.status(200).json(projectAssignments);
});

export {
    getProjectAssignments
}