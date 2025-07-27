import projectService from '@/module/services/project.service';
import React from 'react';
import ProjectsSection from './components/myProjects';

const ProjectsContent = async() => {
  const projects = await projectService.getAllProjects();
  return (
    <ProjectsSection projects={projects}/>
  ) 
}

export default ProjectsContent