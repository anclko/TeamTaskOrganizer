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
const getEmployeeById = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id);

    if(employee) {
        res.status(200).json(employee);
    } else {
        res.status(404);
        throw new Error('Employee not found');
    }
});

//@desc create new employee
//@route POST api/employees
//@access public
const postEmployee = asyncHandler(async (req, res) => {
    const { employee_id, full_name, email, hashed_password } = req.body;

    //check required fields
    if (!employee_id || !full_name || !email || !hashed_password) {
        res.status(400);
        throw new Error("Please provide all info.");
    }
    const employee = await Employee.create({
        employee_id,
        full_name,
        email,
        hashed_password
    });

    res.status(201).json(employee);
});

export {
    getEmployees,
    postEmployee,
    getEmployeeById,
}