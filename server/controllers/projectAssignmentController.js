import asyncHandler from "express-async-handler";
import { ProjectAssignment } from "../models/projectAssignmentModel.js";

//@desc get all project assignments
//@route Get api/project_assignments
//@access public
// This controller gets a list of project assignments along with employee full names and project names
const getProjectAssignments = async (req,res) => {
    try{
        const proj = await ProjectAssignment.find()
        res.status(200).json({proj})
    }catch(err){
        res.status(500).json({ error: err.message })
    }
}


//@desc create new project assignment
//@route POST api/project_assignments
//@access public
const postProjectAssignment = asyncHandler(async (req, res) => {
    const { employee_id, project_code, start_date } = req.body;

    // Check required fields
    if (!employee_id || !project_code || !start_date) {
        res.status(400);
        throw new Error("All details are needed to create an assignment");
    }

    // Attempt to create the project assignment
    try {
        const assignment = await ProjectAssignment.create({
            employee_id, 
            project_code, 
            start_date
        });

        // Send the created assignment as a response
        res.status(201).json(assignment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export {
    getProjectAssignments,
    postProjectAssignment
}