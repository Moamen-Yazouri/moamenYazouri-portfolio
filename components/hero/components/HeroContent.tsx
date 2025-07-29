"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link";
import { skills } from "../constants";

const socialLinks = [
  { Icon: Github, name: "github", href: "https://github.com/Moamen-Yazouri" },
  { Icon: Linkedin, name: "linkedin", href: "https://www.linkedin.com/in/moamen-al-yazouri-80742433a/" },
  { Icon: Mail, name: "mail", href: "mailto:moaamenalyazouri@gmail.com.com" },
];
export default function HeroContent() {
  
  return (
    <motion.div className="text-center lg:text-left">
      <Badge variant="secondary" className="mb-4 px-3 py-1">
        👋 Welcome to my portfolio
      </Badge>
      <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Hi, I am <span className="gradient-text">Moamen Al-Yazouri</span>
      </motion.h1>
      <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[hsl(var(--muted-foreground))] mb-6">
        React & Next.js Developer
      </motion.h2>
      <motion.p className="text-lg text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl leading-relaxed">
        I’m a React and Next.js developer with deep expertise in JavaScript and TypeScript. Currently expanding my skills in backend development with Node.js and Express to become a well-rounded full-stack engineer.
        I study Cyber Security Engineering at the University College of Applied Sciences in Gaza.
      </motion.p>
      <motion.div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
        {
          skills.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))
        }
      </motion.div>
      
      <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
        <Button size="lg" className="group transition-colors hover:bg-cyan-600 hover:text-white cursor-pointer">
          <Link href={"#projects"} className="flex items-center">
          View My Work
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="group cursor-pointer bg-transparent transition-colors hover:bg-slate-800 hover:border-slate-500 hover:text-cyan-300"
        >
          <a href="/CV-MoamenYazouri.pdf" download>
            <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Download CV
          </a>
        </Button>

      </motion.div>

      <motion.div className="flex gap-4 justify-center lg:justify-start">
        {socialLinks.map(({ Icon, name, href }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="ghost"
            size="icon"
            className="transition-colors hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))] cursor-pointer"
          >
            <Icon className="h-5 w-5" />
          </Button>
        </Link>
      ))}
      </motion.div>
    </motion.div>
  )
}
