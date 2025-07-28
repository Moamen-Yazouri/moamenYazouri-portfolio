"use client"

import type React from "react";

import { useContext, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import StoryCard from "./components/storyCard";
import TechStack from "./components/techStack";
import Achivements from "./components/achivements";
import AboutTitle from "./components/aboutTitle";
import BackgroundOrbs from "./components/backgroundOrbs";
import { InViewContext } from "@/providers/inViewSection/inViewSection";

export default function AboutMeSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -50% 0px" });
  const {setInView, inView} = useContext(InViewContext);
  
  useEffect(() => {
    let debounce = undefined;

    if(isInView) {
      debounce = setTimeout(() => {
        setInView("#about-me");
      }, 500);
    }
    return () => {
      if(debounce) {
        clearTimeout(debounce);
      }
    }
  }, [isInView]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])



  return (
    <section
      id="about-me"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10"
    >
      <BackgroundOrbs />
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl pointer-events-none z-0"
        animate={{ x: mousePosition.x - 192, y: mousePosition.y - 192 }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
          className="flex flex-col items-center justify-center space-y-12 text-center"
        >
          <AboutTitle /> 
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <StoryCard />
            <TechStack />
            <Achivements />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
