import { ISkill } from "@/@types";
import mongoose, { Schema } from "mongoose";

export interface ISkillDocument extends ISkill, Document { };

const skillSchema = new Schema<ISkillDocument>({
  name: { type: String, required: true },
  iconUrl: { type: String, required: true },
  description: { type: String, required: true },
}, {
  timestamps: true
});

const SkillModel = mongoose.models.Skill || mongoose.model<ISkillDocument>("Skill", skillSchema);

export default SkillModel;
