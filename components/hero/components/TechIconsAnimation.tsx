"use client"
import { JSX, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { techIcons } from "../constants";


export function TechIconsAnimation() {
  const [icons, setIcons] = useState<JSX.Element[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => setDimensions({ width: window.innerWidth, height: window.innerHeight })
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return

    const generated = Array.from({ length: 30 }).map((_, i) => {
      const tech = techIcons[Math.floor(Math.random() * techIcons.length)]
      const x = Math.random() * dimensions.width
      const y = Math.random() * dimensions.height
      const duration = 10 + Math.random() * 10
      const delay = Math.random() * 10
      const size = 30 + Math.random() * 24
      const opacity = 0.3 + Math.random() * 0.7
      
  
      return (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x, y, opacity: 0, rotate: 0, scale: 0.8 }}
          animate={{
            x: [x, x + (Math.random() - 0.5) * 100, x],
            y: [y, y + (Math.random() - 0.5) * 100, y],
            opacity: [0, opacity, opacity, 0],
            rotate: [0, Math.random() * 360, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ duration, delay, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          style={{ width: size, height: size, pointerEvents: "none", zIndex: 0 }}
        >
          <Image src={tech.src} alt={tech.alt} width={size} height={size} style={{ padding: 2}}/>
        </motion.div>
      )
    })

    setIcons(generated)
  }, [dimensions])

  return <div className="absolute inset-0 overflow-hidden">{icons}</div>
}
