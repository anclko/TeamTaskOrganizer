import mongoose from 'mongoose';

const projectAssignmentSchema = new mongoose.Schema({
    employee_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true},
    project_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true},
    start_date: {type: Date, required: true},
});

const projectAssignment = mongoose.model('ProjectAssignment', projectAssignmentSchema);

export default projectAssignment;