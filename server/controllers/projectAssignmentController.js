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
const postProjectAssignment = async (req, res) => {
    try {
        const {employee_id, project_code, start_date} = req.body

        const assignment = await projectAssignmentSchema.create({employee_id, project_code, start_date})
        if(!employee_id || !project_code || !start_date){
            res.status(404)
            throw new Error("All details needed to create an assignment")
        }
        res.status(201).json({assignment})

    } catch (error) {
        res.status(500).json({ error: err.message })
    }
}

export {
    getProjectAssignments,
    postProjectAssignment
}