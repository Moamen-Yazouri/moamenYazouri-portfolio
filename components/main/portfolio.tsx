import React from 'react'
import Header from '../header/header'
import HeroSection from '../hero/HeroSection'
import AboutMeSection from '../about-me/aboutSection'
import ContactSection from '../contact-me/contactMe'
import FooterSection from '../footer/footer'
import certificateService from '@/module/services/certificate.service'
import projectService from '@/module/services/project.service'
import skillService from '@/module/services/skill.service'
import CertificatesSection from '../certificates/components/certificatesSection'
import ProjectsSection from '../my-Projects/components/myProjects'
import TechSkillsSection from '../tech-skills/components/techSkills'

const Portfolio = async() => {
  const [
    certificates,
    projects,
    skills
  ] = await Promise.all([
      certificateService.getAllCertificates(),
      projectService.getAllProjects(),
      skillService.getAllSkills()
  ]);
  return (
    <>
        <Header />
        <HeroSection/>
        <AboutMeSection/>
        <CertificatesSection certificates={certificates} />
        <ProjectsSection projects={projects}/>
        <TechSkillsSection skills={skills} />
        <ContactSection />
        <FooterSection />
    </>
  )
}

export default Portfolio