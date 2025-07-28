"server-only";
import { IProject, IProjectFormDB } from "@/@types";
import ProjectModel from "@/DB/models/projects.model";

class ProjectRepo {
    async getAllProjects() {
        return await ProjectModel.find({}).lean<IProjectFormDB[]>();
    }
    async addProject(projectData: IProject) {
        return await ProjectModel.insertOne(projectData);
    }
}

export default new ProjectRepo();