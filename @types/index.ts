
export interface ICertificate {
  title: string,
  description: string,
  imageUrl: string,
  link?: string,
}

export interface IProject {
  title: string,
  description: string,
  imageUrl: string,
  technologies: string[]
  deployLink?: string,
  githubLink?: string,
}

export interface ISkill {
  name: string
  iconUrl: string
  description: string
}

export interface IDbFormat {
    _id: string,                           
    createdAt: Date,            
    updatedAt: Date             
    __v: number  
}

export interface IMessage {
  name: string,
  email: string,
  message: string,
}

export interface IMessageFromDB extends IMessage, IDbFormat {};

export interface ICertificateFromDB extends ICertificate, IDbFormat {};

export interface IProjectFormDB extends IProject, IDbFormat {};

export interface ISkillFormDB extends ISkill, IDbFormat {};

export type SkillForPortfolio = ISkill & Pick<ISkillFormDB, "_id">
export type ProjectForPortfolio = IProject & Pick<IProjectFormDB, "_id">
export type CertificateForPortfolio = ICertificate & Pick<ICertificateFromDB, "_id">