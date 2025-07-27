import React, { Suspense } from 'react'
import Header from '../header/header'
import HeroSection from '../hero/HeroSection'
import AboutMeSection from '../about-me/aboutSection'
import { SectionLoader } from '../section-loader/sectionLoader'
import CertificateContent from '../certificates/certificateContent'
import ProjectsContent from '../my-Projects/projectsContent'
import TechSkillsContent from '../tech-skills/techSkillsContent'
import ContactSection from '../contact-me/contactMe'
import FooterSection from '../footer/footer'

const Portfolio = () => {
  return (
    <>
        <Header />
        <HeroSection/>
        <AboutMeSection/>
        <Suspense fallback={<SectionLoader />}>
            <CertificateContent />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
            <ProjectsContent/>
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
            <TechSkillsContent />
        </Suspense>
        <ContactSection />
        <FooterSection />
    </>
  )
}

export default Portfolio