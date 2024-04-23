import mongoose from 'mongoose';

const projectSchema = mongoose.Schema({
    project_code: {
        type: Number, 
        required: (true, 'Project code is required'),
        unique: true,
    },
    project_name: {
        type: String, 
        required: (true, 'Project name is required'),
    },
    project_description: {
        type: String, 
        required: (true, 'Project description is required'),
    }
}, {
    versionKey: false
});

export { projectSchema };

export const Project = mongoose.model('Project', projectSchema);
