import { IProject } from "@/@types";
import mongoose, { Schema } from "mongoose";

export interface IProjectDocument extends IProject, Document {}

const projectSchema = new Schema<IProjectDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  technologies: { type: [String], required: false },
  githubLink: { type: String, required: false },
  deployLink: { type: String, required: false },
}, {
  timestamps: true
});

// ✅ Match the model name string here
const ProjectModel = mongoose.models.Project || mongoose.model<IProjectDocument>("Project", projectSchema);

export default ProjectModel;
