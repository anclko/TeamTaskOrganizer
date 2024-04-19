import mongoose from 'mongoose';

const projectAssignmentSchema = mongoose.Schema({
    employee_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', 
        required: true
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Project', 
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