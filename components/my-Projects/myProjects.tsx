"use client";
import { motion } from "framer-motion";
import ProjectCard from "./components/projectCard";
import { ProjectForPortfolio } from "@/@types";
import { containerVariants, itemVariants } from "./variants.constant";

interface IProps {
  projects: ProjectForPortfolio[]
}
export default function ProjectsSection({projects}: IProps) {
  

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-[hsl(var(--background))]">
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
              My Projects
            </h2>
            <p className="max-w-[900px] text-[hsl(var(--muted-foreground))] md:text-xl/relaxed">
              A collection of my recent work, showcasing my skills and passion for web development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl"
          >
            {
              projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  {...project}
                />
              ))
            }
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
