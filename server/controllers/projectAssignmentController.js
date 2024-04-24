import asyncHandler from "express-async-handler";
import { ProjectAssignment } from "../models/projectAssignmentModel.js";

//@desc get all project assignments
//@route Get api/project_assignments
//@access public
const getProjectAssignments = asyncHandler(async (req, res) => {
    const proj = await ProjectAssignment.find();
    res.status(200).json({ proj });
});


//@desc create new project assignment
//@route POST api/project_assignments
//@access public
const postProjectAssignment = asyncHandler(async (req, res) => {
    const { employee_id, project_code, start_date } = req.body;

    //check fields
    if (!employee_id || !project_code || !start_date) {
        res.status(400);
        throw new Error("All details are needed to create an assignment");
    }

    try {
        const assignment = await ProjectAssignment.create({
            employee_id, 
            project_code, 
            start_date
        });

        //send info as response
        res.status(201).json(assignment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export {
    getProjectAssignments,
    postProjectAssignment
}