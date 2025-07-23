"use client"

import { motion } from "framer-motion"

export default function BackgroundAnimation() {
  return (
    <>
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
    </>
  )
}
