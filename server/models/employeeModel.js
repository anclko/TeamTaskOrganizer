import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
    employee_id: {
        type: Number, 
        required: (true, 'Employee ID is required'), 
        unique: true,
    },
    full_name: {
        type: String, 
        required: (true, 'Name is required'),
    },
    email: {
        type: String, 
        required: (true, 'Email is required'), 
        unique: true,
    },
    hashed_password: {
        type: String
    }
}, {
    versionKey: false
});

export { employeeSchema };

export const Employee = mongoose.model('Employee', employeeSchema);