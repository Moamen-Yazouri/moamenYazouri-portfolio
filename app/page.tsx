import AboutMeSection from "@/components/about-me/aboutSection";
import CertificatesSection from "@/components/certificates/certificatesSection";
import ContactSection from "@/components/contact-me/contactMe";
import FooterSection from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroSection from "@/components/hero/HeroSection";
import ProjectsSection from "@/components/my-Projects/myProjects";
import TechSkillsSection from "@/components/tech-skills/techSkills";



export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutMeSection/>
    <CertificatesSection />
    <ProjectsSection />
    <TechSkillsSection />
    <ContactSection />
    <FooterSection/>
    </>
  );
}
