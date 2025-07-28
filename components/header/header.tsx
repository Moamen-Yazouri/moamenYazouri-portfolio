"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./components/theme-toggle" 
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet" 
import { itemVariants, navItems, mobileNavContainerVariants, mobileNavItemVariants } from "./constants"
import BackgroundAnimation from "./components/backgroundAnimation" 
import { useContext } from "react"
import { InViewContext } from "@/providers/inViewSection/inViewSection"
import clsx from "clsx"

export default function Header() {
  const {inView} = useContext(InViewContext);
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
          {navItems.map((item, index) => {
            const isViewed = inView === item.href
            return (
              <motion.div key={item.name} variants={itemVariants} transition={{ delay: 0.1 * index }}>
                <Link
                  href={item.href}
                  className={clsx(
                    "text-sm font-medium transition-all duration-200 hover:scale-105 relative group block px-4 py-2 rounded-lg",
                    isViewed
                      ? "text-[hsl(var(--primary))]"
                      : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]",
                  )}
                  prefetch={false}
                >
                  {item.name}
                  {/* Desktop: Animated pill background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.15)] via-[hsl(var(--accent)/0.1)] to-[hsl(var(--primary)/0.15)] rounded-lg -z-10"
                    animate={{
                      opacity: isViewed ? 1 : 0,
                      scale: isViewed ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  {/* Desktop: Top and bottom accent lines */}
                  <motion.div
                    className="absolute top-0 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent rounded-full"
                    animate={{
                      width: isViewed ? "100%" : "0%",
                      x: "-50%",
                      opacity: isViewed ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--accent))] to-transparent rounded-full"
                    animate={{
                      width: isViewed ? "100%" : "0%",
                      x: "-50%",
                      opacity: isViewed ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                  />
                  
                  <motion.div
                    className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-[hsl(var(--primary))] rounded-full"
                    animate={{
                      opacity: isViewed ? 1 : 0,
                      scale: isViewed ? 1 : 0,
                      x: isViewed ? "-6px" : "0px",
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    style={{ transform: "translateY(-50%)" }}
                  />
                  <motion.div
                    className="absolute right-0 top-1/2 w-1.5 h-1.5 bg-[hsl(var(--accent))] rounded-full"
                    animate={{
                      opacity: isViewed ? 1 : 0,
                      scale: isViewed ? 1 : 0,
                      x: isViewed ? "6px" : "0px",
                    }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    style={{ transform: "translateY(-50%)" }}
                  />
                  
                  <motion.div
                    className="absolute inset-0.5 bg-gradient-to-r from-[hsl(var(--primary)/0.05)] to-[hsl(var(--accent)/0.05)] rounded-md -z-10 blur-sm"
                    animate={{
                      opacity: isViewed ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  />
                </Link>
              </motion.div>
            )
          })}
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
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle> 
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={mobileNavContainerVariants}
                className="flex flex-col gap-4 py-6"
              >
              {navItems.map((item) => {
                  const isViewed = inView === item.href
                  return (
                    <motion.div key={item.href} variants={mobileNavItemVariants} className="relative">
                      <Link
                        href={item.href}
                        prefetch={false}
                        className={clsx(
                          "block text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 relative overflow-hidden",
                          isViewed
                            ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.1)]"
                            : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.1)]",
                        )}
                      >
                        {item.name}
                        {/* Mobile: Glowing border effect */}
                        <motion.div
                          className="absolute inset-0 border-2 border-[hsl(var(--primary)/0.4)] rounded-lg pointer-events-none"
                          animate={{
                            opacity: isViewed ? 1 : 0,
                            scale: isViewed ? 1 : 0.95,
                            boxShadow: isViewed
                              ? "0 0 20px hsl(var(--primary)/0.3), inset 0 0 20px hsl(var(--primary)/0.1)"
                              : "0 0 0px hsl(var(--primary)/0.0), inset 0 0 0px hsl(var(--primary)/0.0)",
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />

                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--primary))] rounded-r-full"
                          animate={{
                            scaleY: isViewed ? 1 : 0,
                            opacity: isViewed ? 1 : 0,
                            width: isViewed ? "4px" : "1px",
                          }}
                          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                          style={{ transformOrigin: "top" }}
                        />
                        
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary)/0.08)] via-[hsl(var(--accent)/0.05)] to-transparent rounded-lg pointer-events-none"
                          animate={{
                            x: isViewed ? "0%" : "-100%",
                            opacity: isViewed ? 1 : 0,
                          }}
                          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        />
                        
                        <motion.div
                          className="absolute right-3 top-1/2 w-2 h-2 bg-[hsl(var(--primary))] rounded-full"
                          animate={{
                            opacity: isViewed ? 1 : 0,
                            scale: isViewed ? [1, 1.2, 1] : 0,
                          }}
                          transition={{
                            opacity: { duration: 0.2 },
                            scale: {
                              duration: 1.5,
                              repeat: isViewed ? Number.POSITIVE_INFINITY : 0,
                              ease: "easeInOut",
                            },
                          }}
                          style={{ transform: "translateY(-50%)" }}
                        />
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
