"use client";
import { FloatingParticles } from "./components/FloatingParticles";
import { TechIconsAnimation } from "./components/TechIconsAnimation";
import { BackgroundOrbs } from "./components/BackgroundOrbs";
import "./hero-animations.css";
import ProfileCard from "./components/ProfileCard";
import HeroContent from "./components/HeroContent";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--background))] to-[hsl(var(--muted)/0.2)]">
        <BackgroundOrbs />
        <TechIconsAnimation />
        <FloatingParticles />
        <div className="absolute inset-0 bg-[hsl(var(--background)/0.6)]  pointer-events-none z-0" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ProfileCard />
          <HeroContent  />
        </div>
      </div>
      
    </section>
  )
}
