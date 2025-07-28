"use client"
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function BackgroundOrbs() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const springConfig = { damping: 15, stiffness: 300, mass: 0.5 }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const orb1X = useSpring(useTransform(mouseX, [0, width], [-50, 50]), springConfig)
  const orb1Y = useSpring(useTransform(mouseY, [0, height], [-50, 50]), springConfig)
  const orb2X = useSpring(useTransform(mouseX, [0, width], [50, -50]), springConfig)
  const orb2Y = useSpring(useTransform(mouseY, [0, height], [50, -50]), springConfig)
  const orb3X = useSpring(useTransform(mouseX, [0, width], [-30, 30]), springConfig)
  const orb3Y = useSpring(useTransform(mouseY, [0, height], [-30, 30]), springConfig)

  return (
    <>
      <motion.div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[hsl(var(--primary)/0.1)] rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{ x: orb1X, y: orb1Y }} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--accent)/0.1)] rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{ x: orb2X, y: orb2Y }} />
      <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[hsl(var(--primary)/0.05)] rounded-full mix-blend-multiply filter blur-2xl animate-blob" style={{ x: orb3X, y: orb3Y }} />
    </>
  )
}
