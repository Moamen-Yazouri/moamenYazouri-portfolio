import AboutMeSection from "@/components/about-me/aboutSection";
import CertificateContent from "@/components/certificates/certificateContent";
import ContactSection from "@/components/contact-me/contactMe";
import FooterSection from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroSection from "@/components/hero/HeroSection";
import { SectionLoader } from "@/components/section-loader/sectionLoader";
import certificateService from "@/module/services/certificate.service";
import { Suspense } from "react";

export default  async function Home() {
  throw new Error("testring")
  return (
    <>
    {/* <Header/>
    <HeroSection/>
    <AboutMeSection/>
    <CertificatesSection />
    <ProjectsSection />
    <TechSkillsSection />
    <ContactSection />
    <FooterSection/> */}
    <Suspense fallback={<SectionLoader />}>

      <CertificateContent />
    </Suspense>
    </>
  );
}
