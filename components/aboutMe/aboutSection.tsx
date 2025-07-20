"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { easeInOut, motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "PostgreSQL",
  "Docker",
  "Git",
]

const achievements = [
  "Developed and deployed a full-stack e-commerce platform, increasing sales by 25% within 3 months.",
  "Led the front-end development of a real-time chat application, improving user engagement by 40%.",
  "Optimized web application performance, reducing load times by 30% through code splitting and image optimization.",
  "Contributed to open-source projects, enhancing features and fixing bugs in popular React libraries.",
  "Mentored junior developers on best practices in modern web development and agile methodologies.",
]

// Reusable wrapper for cards with enhanced gradient
function CardWrapper({
  children,
  gradient,
}: {
  children: React.ReactNode
  gradient: string
}) {
  return (
    <Card className={`h-full relative overflow-hidden border border-border shadow-xl backdrop-blur-md ${gradient}`}>
      <div className="absolute inset-0 pointer-events-none z-0" />
      <div className="relative z-10">{children}</div>
    </Card>
  )
}

export default function AboutMeSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: easeInOut },
  }

  return (
    <section
      id="about-me"
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10"
    >
      {/* Background Orbs and new creative blob */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Existing Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-success/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* New Large, Subtle Blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-muted/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Mouse Follower */}
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
          {/* Title */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10, duration: 1 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">About Me</h2>
            <motion.p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Heres a glimpse into my journey, skills, and what drives me.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            {/* Story Card */}
            <motion.div
              className="md:col-span-7 lg:col-span-8"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              animate={floatingAnimation}
            >
              <motion.div whileHover={{ scale: 1.02, rotateY: 5 }}>
                <CardWrapper gradient="bg-gradient-to-br from-[hsl(var(--primary)/0.1)] via-[hsl(var(--background)/0.3)] to-[hsl(var(--accent)/0.1)]">
                  <CardHeader>
                    <CardTitle className="text-2xl gradient-text">My Story</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Im a passionate React & Next.js Developer with a knack for building intuitive and
                      high-performance web applications. My journey in tech began with a fascination for how digital
                      experiences come to life, leading me to dive deep into modern web technologies. I thrive on
                      solving complex problems and transforming ideas into robust, user-friendly solutions. I believe in
                      clean code, continuous learning, and creating impactful digital products.
                    </p>
                  </CardContent>
                </CardWrapper>
              </motion.div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="md:col-span-5 lg:col-span-4 md:mt-8"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              animate={{ ...floatingAnimation, transition: { delay: 1 } }}
            >
              <motion.div whileHover={{ scale: 1.05, rotateZ: 2, rotateY: -5 }}>
                <CardWrapper gradient="bg-gradient-to-br from-[hsl(var(--success)/0.1)] via-[hsl(var(--background)/0.3)] to-[hsl(var(--accent)/0.1)]">
                  <CardHeader>
                    <CardTitle className="text-xl bg-gradient-to-r from-success to-accent bg-clip-text text-transparent">
                      My Tech Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Badge
                          variant="secondary"
                          className="skill-badge hover:bg-primary hover:text-primary-foreground hover:shadow-lg cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </CardContent>
                </CardWrapper>
              </motion.div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              className="md:col-span-12 md:-mt-4"
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              animate={{ ...floatingAnimation, transition: { delay: 2 } }}
            >
              <motion.div >
                <CardWrapper gradient="bg-gradient-to-br from-[hsl(var(--warning)/0.1)] via-[hsl(var(--background)/0.3)] to-[hsl(var(--accent)/0.1)]">
                  <CardHeader>
                    <CardTitle className="text-xl bg-gradient-to-r from-warning to-accent bg-clip-text text-transparent">
                      Key Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          className="flex items-start space-x-2 p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/20"
                        >
                          <motion.div
                            className="w-2 h-2 bg-gradient-to-r from-warning to-accent rounded-full mt-2 flex-shrink-0"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                          />
                          <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </CardWrapper>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
