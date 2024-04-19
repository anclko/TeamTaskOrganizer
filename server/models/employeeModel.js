import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    hashed_password: {type: String}
});

const Employee = mongooose.model('Employee', employeeSchema);

export default Employee;