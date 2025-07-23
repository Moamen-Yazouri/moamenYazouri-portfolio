"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { containerVariants, itemVariants } from "./variants.constants"
import SkillCard from "./components/SkillCard"

interface Skill {
  id: string
  name: string
  iconUrl: string
  description: string
}

export default function TechSkillsSection() {
  
  const skills: Skill[] = [
    {
      id: "react",
      name: "React",
      iconUrl: "/placeholder.svg?height=48&width=48&text=React",
      description: "Building dynamic and interactive user interfaces with a component-based approach.",
    },
    {
      id: "nextjs",
      name: "Next.js",
      iconUrl: "/placeholder.svg?height=48&width=48&text=Next.js",
      description: "Developing server-rendered React applications with powerful features like routing and API routes.",
    },
    {
      id: "typescript",
      name: "TypeScript",
      iconUrl: "/placeholder.svg?height=48&width=48&text=TS",
      description: "Enhancing JavaScript with static type definitions for robust and scalable applications.",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      iconUrl: "/placeholder.svg?height=48&width=48&text=Tailwind",
      description: "Rapidly building custom designs with a utility-first CSS framework.",
    },
    {
      id: "nodejs",
      name: "Node.js",
      iconUrl: "/placeholder.svg?height=48&width=48&text=Node",
      description: "Building scalable server-side applications and APIs using JavaScript.",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      iconUrl: "/placeholder.svg?height=48&width=48&text=Mongo",
      description: "Working with NoSQL databases for flexible and high-performance data storage.",
    },
    {
      id: "firebase",
      name: "Firebase",
      iconUrl: "/placeholder.svg?height=48&width=48&text=Firebase",
      description: "Leveraging Google's platform for backend services, authentication, and real-time databases.",
    },
    {
      id: "git",
      name: "Git",
      iconUrl: "/placeholder.svg?height=48&width=48&text=Git",
      description: "Version control for collaborative development and tracking code changes.",
    },
    {
      id: "docker",
      name: "Docker",
      iconUrl: "/placeholder.svg?height=48&width=48&text=Docker",
      description: "Containerizing applications for consistent development and deployment environments.",
    },
  ]


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
              <SkillCard key={skill.id} {...skill}/>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
