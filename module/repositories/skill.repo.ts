import { ISkill, ISkillFormDB } from "@/@types";
import SkillModel from "@/DB/models/projects.model";

class SkillRepo {
    async getAllSkills() {
        return await SkillModel.find({}).lean<ISkillFormDB[]>();
    }
    async addSkill(skillData: ISkill) {
        return await SkillModel.insertOne(skillData);
    }
}

export default new SkillRepo();