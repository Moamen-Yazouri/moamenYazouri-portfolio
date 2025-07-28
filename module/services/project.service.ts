import { IProject, IProjectFormDB, ProjectForPortfolio } from "@/@types";
import projectRepo from "../repositories/project.repo";
import { formater } from "./utils/utils";
import { connection } from "@/DB/connection";

class ProjectService {
    async addProject(project: IProject): Promise<IProjectFormDB[] | null> {
        await connection();
        try {
            const newData = await projectRepo.addProject(project);
            return newData;
        }
        catch(error) {
            console.error("Failed To add the new project",error);
            return null;
        }
    }

    async getAllProjects(): Promise<ProjectForPortfolio[]>{
        await connection();
        try {
            const projects = await projectRepo.getAllProjects();
            const formatedProjects = formater<IProjectFormDB, ProjectForPortfolio>(projects);
            return formatedProjects;
        }
        catch(error) {
            console.error("Failed to get projects!", error);
            return [];
        }
    }
}
export default new ProjectService();