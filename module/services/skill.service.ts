import { ISkill, ISkillFormDB, SkillForPortfolio } from "@/@types";
import skillRepo from "../repositories/skill.repo";
import { formater } from "./utils/utils";
import { connection } from "@/DB/connection";

class SkillService {
    async addSkill(skill: ISkill): Promise<ISkillFormDB[] | null> {
        await connection();
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
        await connection();
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