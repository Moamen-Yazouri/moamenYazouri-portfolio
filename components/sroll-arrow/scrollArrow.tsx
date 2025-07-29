"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (scrolled / maxHeight) * 100

      setScrollProgress(progress)
      setIsVisible(scrolled > 300) 
    }

    const throttledToggleVisibility = throttle(toggleVisibility, 100)
    window.addEventListener("scroll", throttledToggleVisibility)

    return () => window.removeEventListener("scroll", throttledToggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }


  function throttle(func: Function, limit: number) {
    let inThrottle: boolean
    return function (this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.6,
          }}
        >
          <motion.button
            onClick={scrollToTop}
            className="relative group overflow-hidden rounded-full p-4 shadow-2xl backdrop-blur-md border border-white/20 cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--primary)/0.9) 0%, hsl(var(--accent)/0.8) 50%, hsl(var(--chart-2)/0.9) 100%)",
            }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            aria-label="Scroll to top"
          >
            
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--chart-2)/0.9) 0%, hsl(var(--primary)/0.8) 50%, hsl(var(--accent)/0.9) 100%)",
              }}
              animate={{
                background: [
                  "linear-gradient(135deg, hsl(var(--chart-2)/0.9) 0%, hsl(var(--primary)/0.8) 50%, hsl(var(--accent)/0.9) 100%)",
                  "linear-gradient(225deg, hsl(var(--accent)/0.9) 0%, hsl(var(--chart-2)/0.8) 50%, hsl(var(--primary)/0.9) 100%)",
                  "linear-gradient(315deg, hsl(var(--primary)/0.9) 0%, hsl(var(--accent)/0.8) 50%, hsl(var(--chart-2)/0.9) 100%)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />


            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scrollProgress / 100 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  pathLength: scrollProgress / 100,
                  strokeDasharray: "283", // 2 * π * 45
                }}
              />
            </svg>

    
            <motion.div
              className="relative z-10 flex items-center justify-center"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ArrowUp className="w-6 h-6 text-white drop-shadow-lg" />
            </motion.div>

            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/60 rounded-full pointer-events-none"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + i * 8}%`,
                }}
                animate={{
                  y: [-10, -20, -10],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}

            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "radial-gradient(circle, hsl(var(--primary)/0.4) 0%, transparent 70%)",
                filter: "blur(8px)",
                transform: "scale(1.5)",
              }}
              animate={{
                scale: [1.5, 1.7, 1.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/30 pointer-events-none"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 2, 3], opacity: [0, 0.5, 0] }}
              transition={{ duration: 1, ease: "easeOut" }}
              key={scrollProgress} 
            />
          </motion.button>

        </motion.div>
      )}
    </AnimatePresence>
  )
}
