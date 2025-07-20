"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion" // Import Variants
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Certificate {
  id: string
  title: string
  description: string
  imageUrl: string
  link?: string // Optional link to verify certificate
}

export default function CertificatesSection() {
  // Dummy data for demonstration. You can replace this with data fetched from an API or a local array.
  const certificates: Certificate[] = [
    {
      id: "cert1",
      title: "Full-Stack Web Development",
      description: "Completed a comprehensive bootcamp covering MERN stack, data structures, and algorithms.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "cert2",
      title: "AWS Certified Cloud Practitioner",
      description: "Validated foundational cloud knowledge across AWS services, security, and economics.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "cert3",
      title: "React Advanced Concepts",
      description: "Mastered advanced React patterns, hooks, context API, and performance optimization.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "cert4",
      title: "TypeScript Deep Dive",
      description: "Gained expertise in TypeScript for scalable and maintainable JavaScript applications.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "cert5",
      title: "Data Structures & Algorithms",
      description: "Completed a rigorous course on fundamental data structures and algorithmic problem-solving.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      id: "cert6",
      title: "Next.js App Router",
      description: "Explored the latest features of Next.js App Router, Server Components, and Server Actions.",
      imageUrl: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  // Explicitly type variants using Variants from framer-motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger the animation of each card
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring", // "spring" is a valid literal string for framer-motion's Transition type
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section id="certificates" className="w-full py-12 md:py-24 lg:py-32 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Certificates</h2>
            <p className="max-w-[900px] text-[hsl(var(--muted-foreground))] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Showcasing my commitment to continuous learning and professional growth.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl"
          >
            {certificates.map((cert) => (
              <motion.div key={cert.id} variants={itemVariants} whileHover={{ scale: 1.03, rotateZ: 1 }}>
                <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-lg hover:border-[hsl(var(--primary))]">
                  <div className="relative w-full h-48 overflow-hidden bg-muted">
                    <Image
                      src={cert.imageUrl || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="text-xl font-semibold">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{cert.description}</p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-sm font-medium text-[hsl(var(--primary))] hover:underline"
                      >
                        View Certificate
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
