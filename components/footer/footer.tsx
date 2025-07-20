"use client"

import { motion, type Variants } from "framer-motion"
import { Github, Linkedin, Mail, PhoneIcon as Whatsapp } from "lucide-react" // Import Whatsapp icon
import { Button } from "@/components/ui/button"

export default function FooterSection() {
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
    <footer className="w-full py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--muted)/0.1)] to-[hsl(var(--accent)/0.05)]">
      {/* Background creative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-[hsl(var(--primary)/0.08)] rounded-full mix-blend-multiply filter blur-xl animate-blob-slow"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-56 h-56 bg-[hsl(var(--success)/0.08)] rounded-full mix-blend-multiply filter blur-xl animate-blob-slow"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[hsl(var(--warning)/0.05)] rounded-full mix-blend-multiply filter blur-2xl animate-blob-slow"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl gradient-text">Lets Connect!</h3>
            <p className="max-w-[700px] text-[hsl(var(--muted-foreground))] md:text-lg/relaxed">
              Feel free to reach out for collaborations, projects, or just a friendly chat.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="mailto:your.email@example.com"
              className="text-lg font-medium text-[hsl(var(--primary))] hover:underline flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              your.email@example.com
            </a>
            {/* New WhatsApp Link */}
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER" // Replace YOUR_PHONE_NUMBER with your actual WhatsApp number (e.g., 1234567890)
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-[hsl(var(--primary))] hover:underline flex items-center gap-2"
            >
              <Whatsapp className="h-5 w-5" />
              WhatsApp
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            {[
              { Icon: Github, name: "GitHub", link: "#" },
              { Icon: Linkedin, name: "LinkedIn", link: "#" },
            ].map(({ Icon, name, link }) => (
              <Button
                key={name}
                asChild
                variant="ghost"
                size="icon"
                className="hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))] transition-colors duration-200"
              >
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label={name}>
                  <Icon className="h-6 w-6" />
                </a>
              </Button>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8 border-t border-border/50 w-full max-w-md">
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              &copy; {new Date().getFullYear()} Moamen. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
