import { ISkill, ISkillFormDB, SkillForPortfolio } from "@/@types";
import skillRepo from "../repositories/skill.repo";
import { formater } from "./utils/utils";

class SkillService {
    async addSkill(skill: ISkill): Promise<ISkillFormDB[] | null> {
        try {
            const newData = await skillRepo.addSkill(skill);
            return newData;
        }
        catch(error) {
            console.error("Failed To add the new skill",error);
            return null;
        }
    }

    async getAllSkills(){
        try {
            const skills = await skillRepo.getAllSkills();
            return formater<ISkillFormDB, SkillForPortfolio>(skills);
        }
        catch(error) {
            console.error("Failed to get skills!", error);
            return null;
        }
    }
}
export default new SkillService();