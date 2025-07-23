"use client"

import type React from "react"

import { motion, type Variants } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import ContactForm from "./components/contactForm"

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Form submitted!")
    setIsSending(false)
    // You would typically handle form data submission here (e.g., using a Server Action or API route)
    alert("Message sent successfully! (This is a demo)")
    e.currentTarget.reset() // Reset form after submission
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--muted)/0.2)] to-[hsl(var(--accent)/0.1)]"
    >
      {/* Background creative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-[hsl(var(--primary)/0.1)] rounded-full mix-blend-multiply filter blur-xl animate-blob"
          animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--accent)/0.1)] rounded-full mix-blend-multiply filter blur-xl animate-blob"
          animate={{ x: [50, -50, 50], y: [50, -50, 50] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[hsl(var(--primary)/0.05)] rounded-full mix-blend-multiply filter blur-2xl animate-blob"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Get in Touch</h2>
            <p className="max-w-[900px] text-[hsl(var(--muted-foreground))] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </motion.div>

          <div className="w-full max-w-3xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form Card */}
            <ContactForm />

            {/* Social Links Card */}
            <motion.div variants={itemVariants} className="lg:col-span-1 flex flex-col justify-center">
              <Card className="bg-card/50 backdrop-blur-lg border border-border/50 shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Connect with Me</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center h-full space-y-6">
                  <p className="text-muted-foreground text-center">You can also find me on these platforms:</p>
                  <div className="flex gap-6">
                    {[
                      { Icon: Github, name: "GitHub", link: "#" },
                      { Icon: Linkedin, name: "LinkedIn", link: "#" },
                      { Icon: Mail, name: "Email", link: "mailto:your.email@example.com" },
                    ].map(({ Icon, name, link }) => (
                      <motion.a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors duration-200 group"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 15 }}
                        >
                          <Icon className="h-8 w-8" />
                        </motion.div>
                        <span className="text-sm font-medium">{name}</span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
