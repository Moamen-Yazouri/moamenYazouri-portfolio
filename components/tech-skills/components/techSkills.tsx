"use client"
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../variants.constants";
import SkillCard from "./SkillCard";
import { SkillForPortfolio } from "@/@types";

interface IProps {
  skills: SkillForPortfolio[];
}

export default function TechSkillsSection({skills}: IProps) {
  
  
  return (
    <section id="tech-skills" className="w-full py-12 md:py-24 lg:py-32 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
