import AboutMeSection from "@/components/aboutMe/aboutSection";
import CertificatesSection from "@/components/certificates/certificatesSection";
import HeroSection from "@/components/hero/HeroSection";
import ProjectsSection from "@/components/my-Projects/myProjects";
import TechSkillsSection from "@/components/tech-skills/techSkills";



export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutMeSection/>
    <CertificatesSection />
    <ProjectsSection />
    <TechSkillsSection />
    </>
  );
}
