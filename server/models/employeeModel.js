import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
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
});

export { employeeSchema };

export const Employee = mongoose.model('Employee', employeeSchema);