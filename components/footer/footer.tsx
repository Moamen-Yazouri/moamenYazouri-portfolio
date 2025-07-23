"use client";
import { motion } from "framer-motion";
import { Mail, PhoneIcon as Whatsapp } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundEffects from "./components/backgroundEffects";
import { containerVariants, itemVariants } from "./variants.constants";
import { SOCIAL_ICONS } from "./constants";

export default function FooterSection() {
  
  return (
    <footer className="w-full py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--muted)/0.1)] to-[hsl(var(--accent)/0.05)]">
      
      <BackgroundEffects />

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
              moaamenalyazouri@gmail.com
            </a>

            <a
              href="https://wa.me/+970567709710"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-[hsl(var(--primary))] hover:underline flex items-center gap-2"
            >
              <Whatsapp className="h-5 w-5" />
              WhatsApp
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            {SOCIAL_ICONS.map(({ Icon, name, link }) => (
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
