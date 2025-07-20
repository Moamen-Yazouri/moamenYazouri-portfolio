"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

export default function HeroContent() {
  return (
    <motion.div className="text-center lg:text-left">
      <Badge variant="secondary" className="mb-4 px-3 py-1">
        👋 Welcome to my portfolio
      </Badge>
      <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Hi, I am <span className="gradient-text">Moamen</span>
      </motion.h1>
      <motion.h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[hsl(var(--muted-foreground))] mb-6">
        React & Next.js Developer
      </motion.h2>
      <motion.p className="text-lg text-[hsl(var(--muted-foreground))] mb-8 max-w-2xl leading-relaxed">
        I craft exceptional digital experiences with modern web technologies.
      </motion.p>
      <motion.div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
        {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </motion.div>
      
      <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
        <Button size="lg" className="group transition-colors hover:bg-cyan-600 hover:text-white cursor-pointer">
          View My Work
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="group cursor-pointer bg-transparent transition-colors hover:bg-slate-800 hover:border-slate-500 hover:text-cyan-300"
        >
          <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
          Download CV
        </Button>
      </motion.div>

      <motion.div className="flex gap-4 justify-center lg:justify-start">
        {[
          { Icon: Github, name: "github" },
          { Icon: Linkedin, name: "linkedin" },
          { Icon: Mail, name: "mail" },
        ].map(({ Icon, name }) => (
          <Button
            key={name}
            variant="ghost"
            size="icon"
            className="transition-colors hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))] cursor-pointer"
          >
            <Icon className="h-5 w-5" />
          </Button>
        ))}
      </motion.div>
    </motion.div>
  )
}
