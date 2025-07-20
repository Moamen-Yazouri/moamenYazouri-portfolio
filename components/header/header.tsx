"use client"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./components/theme-toggle" // Ensure this import is correct
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about-me" },
    { name: "Skills", href: "#tech-skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ]

  const itemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.5 }}
      className="sticky top-2 z-50 w-[99%] max-w-[1600px] mx-auto rounded-xl p-2 border border-[hsl(var(--primary)/0.2)] shadow-xl backdrop-blur-lg overflow-hidden"
    >
      {/* Background gradient and animated blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background)/0.6)] via-[hsl(var(--background)/0.5)] to-[hsl(var(--muted)/0.6)]" />
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--primary)/0.3)] to-[hsl(var(--accent)/0.3)] rounded-full blur-xl -translate-x-16 -translate-y-16"
        animate={{ x: [-64, -40, -64], y: [-64, -40, -64] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[hsl(var(--accent)/0.3)] to-[hsl(var(--primary)/0.3)] rounded-full blur-xl translate-x-20 -translate-y-20"
        animate={{ x: [80, 100, 80], y: [-80, -100, -80] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 w-24 h-24 bg-gradient-to-t from-[hsl(var(--accent)/0.25)] to-[hsl(var(--primary)/0.25)] rounded-full blur-lg transform -translate-x-12 translate-y-12"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="relative w-full px-6 flex h-16 items-center justify-between">
        {/* Logo/Name */}
        <Link href="#" className="flex items-center gap-3">
          <motion.span
            className="text-2xl font-extrabold bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--primary))] bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Moamen
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <motion.div key={item.name} variants={itemVariants} transition={{ delay: 0.1 * index }}>
              <Link
                href={item.href}
                className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-all duration-200 hover:scale-105 relative group"
                prefetch={false}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right side: Theme Toggle & Login/Mobile Menu */}
        <div className="flex items-center gap-4">
          <ThemeToggle /> {/* Integrated Theme Toggle */}
          {/* Simplified Login Button (replace with your auth logic) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--border))]"
              >
                <Menu className="h-6 w-6 text-[hsl(var(--primary))]" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[hsl(var(--background)/0.95)] backdrop-blur-sm border-[hsl(var(--border))] w-48"
            >
              <nav className="flex flex-col gap-4 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] py-2.5 hover:bg-[hsl(var(--primary)/0.1)] rounded-md px-3 transition-all duration-200"
                    prefetch={false}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile Login/Signup */}
                
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
