import { IProject } from "@/@types";
import mongoose, { Schema } from "mongoose";

export interface ICertificateDocument extends IProject, Document {}

const projectSchema = new Schema<ICertificateDocument>({
        title: {type: String, required: true},
        description:{type: String, required: true},
        imageUrl: {type: String, required: true},
        technologies: {type: [String], required: false},
        githubLink: {type: String, required: false},
        deployLink: {type: String, required: false},
    }, 
    { timestamps: true }
)

const ProjectModel = mongoose.models.ProjectModel || mongoose.model<ICertificateDocument>("Project", projectSchema);

export default ProjectModel;