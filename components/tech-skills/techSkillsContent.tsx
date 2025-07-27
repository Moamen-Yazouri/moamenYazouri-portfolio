import skillService from '@/module/services/skill.service'
import React from 'react'
import TechSkillsSection from './components/techSkills';

const TechSkillsContent = async() => {
    const skills = await skillService.getAllSkills();
  return (
    <TechSkillsSection skills={skills}/>
  )
}

export default TechSkillsContent