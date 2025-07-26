import { IProjectFormDB } from "@/@types";

export const formatProject = (projects: IProjectFormDB[]) => {
    const formattedProjects = projects.map((p) => {
        return {
            _id: p._id,
            title: p.title,
            description: p.description,
            imageUrl: p.imageUrl,
            technologies: p.technologies,
            deployLink: p.deployLink || undefined,
            githubLink: p.githubLink || undefined,
        }   
    })
    return formattedProjects;
};


