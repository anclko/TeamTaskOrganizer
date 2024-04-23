import mongoose from 'mongoose';

const projectAssignmentSchema = mongoose.Schema({
    employee_id: {
        type: Number,
        required: (true, 'Employee ID is required')
    },
    project_code: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date, 
        required: (true, 'Start date is required')
    },
}, {
    versionKey: false
});

export { projectAssignmentSchema };

export const ProjectAssignment = mongoose.model('ProjectAssignment', projectAssignmentSchema);