"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full overflow-hidden transition-colors duration-300 hover:bg-[hsl(var(--primary)/0.1)] cursor-pointer"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme} 
        initial={{ rotate: theme === "light" ? 90 : -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: theme === "light" ? -90 : 90, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-[hsl(var(--foreground))]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-[hsl(var(--foreground))]" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
