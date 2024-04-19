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

export {
    getEmployees,
}