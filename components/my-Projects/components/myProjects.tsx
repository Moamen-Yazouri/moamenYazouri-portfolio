"use client";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./projectCard";
import { ProjectForPortfolio } from "@/@types";
import { containerVariants, itemVariants } from "../variants.constant";
import { useContext, useEffect, useRef } from "react";
import { InViewContext } from "@/providers/inViewSection/inViewSection";

interface IProps {
  projects: ProjectForPortfolio[]
}
export default function ProjectsSection({projects}: IProps) {
    const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -50% 0px" });
  const {setInView} = useContext(InViewContext);
  
  useEffect(() => {
    let debounce = undefined;

    if(isInView) {
      debounce = setTimeout(() => {
        setInView("#projects");
      }, 500);
    }
    return () => {
      if(debounce) {
        clearTimeout(debounce);
      }
    }
  }, [isInView]);

  return (
    <section id="projects" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-[hsl(var(--background))]">
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
