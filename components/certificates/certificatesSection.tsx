"use client"

import { motion } from "framer-motion"; 
import CertificateCard from "./components/certificateCard";
import { containerVariants, itemVariants } from "./variants.constants";

interface Certificate {
  id: string
  title: string
  description: string
  imageUrl: string
  link?: string 
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
            {
                certificates.map((cert, index) => (
                <CertificateCard key={index} cert= {cert} itemVariants={itemVariants}/>
                ))
            }
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
