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