import AboutMeSection from "@/components/about-me/aboutSection";
import ContactSection from "@/components/contact-me/contactMe";
import FooterSection from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroSection from "@/components/hero/HeroSection";

export default async function Home() {
  
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutMeSection/>
    {/* <CertificatesSection />
    <ProjectsSection />
    <TechSkillsSection /> */}
    <ContactSection />
    <FooterSection/>
    </>
  );
}
