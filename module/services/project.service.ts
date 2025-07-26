import { IProject, IProjectFormDB } from "@/@types";
import projectRepo from "../repositories/project.repo";

class ProjectService {
    async addProject(project: IProject): Promise<IProjectFormDB[] | null> {
        try {
            const newData = await projectRepo.addProject(project);
            return newData;
        }
        catch(error) {
            console.error("Failed To add the new project",error);
            return null;
        }
    }

    async getAllProjects(){
        try {
            const projects = await projectRepo.getAllProjects();
            return projects;
        }
        catch(error) {
            console.error("Failed to get projects!", error);
            return null;
        }
    }
}
export default new ProjectService();