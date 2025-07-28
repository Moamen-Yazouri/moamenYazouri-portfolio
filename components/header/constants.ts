"use client"

import type { Variants } from "framer-motion"

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about-me" },
  { name: "Skills", href: "#tech-skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]

export const itemVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

export const mobileNavContainerVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.08, 
      delayChildren: 0.1,
    },
  },
}

export const mobileNavItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}
