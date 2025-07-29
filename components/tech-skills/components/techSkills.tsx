"use client"
import { motion, useInView } from "framer-motion";
import { containerVariants, itemVariants } from "../variants.constants";
import SkillCard from "./SkillCard";
import { SkillForPortfolio } from "@/@types";
import { useContext, useEffect, useRef } from "react";
import { InViewContext } from "@/providers/inViewSection/inViewSection";

interface IProps {
  skills: SkillForPortfolio[];
}

export default function TechSkillsSection({skills}: IProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -50% 0px" });
  const {setInView} = useContext(InViewContext);
  
  useEffect(() => {
    let debounce = undefined;

    if(isInView) {
      debounce = setTimeout(() => {
        setInView("#tech-skills");
      }, 500);
    }
    return () => {
      if(debounce) {
        clearTimeout(debounce);
      }
    }
  }, [isInView]);
  
  return (
    <section id="tech-skills" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              My Tech Skills
            </h2>
            <p className="max-w-[900px] text-[hsl(var(--muted-foreground))] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A comprehensive overview of the technologies and tools I master.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl"
          >
            {skills.map((skill) => (
              <SkillCard key={skill._id} {...skill}/>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
