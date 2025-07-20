"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, LinkIcon } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  deployLink?: string;
  githubLink?: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      id: "proj1",
      title: "E-commerce Platform",
      description:
        "A full-featured online store with user authentication, product management, and secure payment gateway integration.",
      imageUrl: "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe"],
      deployLink: "#",
      githubLink: "#",
    },
    {
      id: "proj2",
      title: "Real-time Chat App",
      description:
        "A real-time messaging application with user presence, typing indicators, and group chat functionality.",
      imageUrl: "/placeholder.svg?height=400&width=600&text=Chat+App",
      technologies: ["React", "Node.js", "Express.js", "Socket.IO", "PostgreSQL"],
      deployLink: "#",
      githubLink: "#",
    },
    {
      id: "proj3",
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase projects, skills, and contact information, built with modern web technologies.",
      imageUrl: "/placeholder.svg?height=400&width=600&text=Portfolio+Website",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      deployLink: "#",
      githubLink: "#",
    },
    {
      id: "proj4",
      title: "Task Management Tool",
      description:
        "A simple and intuitive task management application to help users organize their daily tasks and projects.",
      imageUrl: "/placeholder.svg?height=400&width=600&text=Task+Manager",
      technologies: ["React", "Firebase", "Chakra UI", "JavaScript"],
      deployLink: "#",
      githubLink: "#",
    },
    {
      id: "proj5",
      title: "Recipe Finder App",
      description:
        "An application that allows users to search for recipes based on ingredients and dietary preferences, fetching data from an external API.",
      imageUrl: "/placeholder.svg?height=400&width=600&text=Recipe+App",
      technologies: ["React", "Redux", "Sass", "REST API"],
      deployLink: "#",
      githubLink: "#",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

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
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03, rotateZ: 1 }}
                className="transition-all duration-300"
              >
                <Card className="h-full flex flex-col overflow-hidden group border border-border hover:border-[hsl(var(--primary))] hover:shadow-lg transition-all duration-300">
                  <div className="relative w-full h-56 overflow-hidden bg-muted">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-auto">
                      {project.deployLink && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="transition-colors duration-300 ease-in-out hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))] cursor-pointer"
                        >
                          <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                            <LinkIcon className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="transition-colors duration-300 ease-in-out hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))] cursor-pointer"
                        >
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
