import asyncHandler from "express-async-handler";
import {Employee} from "../models/employeeModel.js";


//@desc get all employees
//@route Get api/employees
//@access public
const getEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find({});
    res.status(200).json(employees);
});


//@desc get employee by id
//@route Get api/employees/:id
//@access public


//@desc create new project
//@route POST api/employees
//@access public
const postEmployee = asyncHandler(async (req, res) => {
    const { full_name, email, hashed_password } = req.body;

    //check required fields
    if (!full_name || !email || !hashed_password) {
        res.status(400);
        throw new Error("Please provide all info.");
    }
    const employee = await Employee.create({
        full_name,
        email,
        hashed_password
    });

    // Send the created project as a response
    res.status(201).json(employee);
});

export {
    getEmployees,
    postEmployee,
}