import { ObjectId } from "mongoose"

export interface ICertificate {
  title: string,
  description: string,
  imageUrl: string,
  link?: string,
}

export interface ICertificateFormDB {
    _id: ObjectId,             
    title: string,              
    description: string,        
    imageUrl: string,           
    link?: string,              
    createdAt: Date,            
    updatedAt: Date             
    __v: number  
}

export interface IProject {
  id: string,
  title: string,
  description: string,
  imageUrl: string,
  technologies: string[]
  deployLink?: string,
  githubLink?: string,
}

export interface ISkill {
  id: string
  name: string
  iconUrl: string
  description: string
}