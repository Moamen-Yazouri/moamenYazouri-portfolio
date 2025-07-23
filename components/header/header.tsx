"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./components/theme-toggle" 
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet" 
import { itemVariants, navItems, mobileNavContainerVariants, mobileNavItemVariants } from "./constants"
import BackgroundAnimation from "./components/backgroundAnimation" 

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.5 }}
      className="sticky top-2 z-50 w-[99%] max-w-[1600px] mx-auto rounded-xl p-2 border border-[hsl(var(--primary)/0.2)] shadow-xl backdrop-blur-lg overflow-hidden"
    >
      <BackgroundAnimation />
      <div className="relative w-full px-6 flex h-16 items-center justify-between">
    
        <Link href="#" className="flex items-center gap-3">
          <motion.span
            className="text-2xl font-extrabold bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--primary))] bg-clip-text text-transparent tracking-tight"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Moamen-Yazouri
          </motion.span>
        </Link>
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
        <div className="flex items-center gap-4">
          <ThemeToggle /> 
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
              className="bg-gradient-to-br from-[hsl(var(--background)/0.9)] via-[hsl(var(--background)/0.8)] to-[hsl(var(--muted)/0.8)] backdrop-blur-xl border-[hsl(var(--border))] w-48"
            >
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle> {/* Added for accessibility */}
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={mobileNavContainerVariants}
                className="flex flex-col gap-4 py-6"
              >
                {navItems.map((item) => (
                  <motion.div key={item.href} variants={mobileNavItemVariants}>
                    <Link
                      href={item.href}
                      className="block text-lg font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] py-2.5 hover:bg-[hsl(var(--primary)/0.1)] rounded-md px-3 transition-all duration-200"
                      prefetch={false}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
