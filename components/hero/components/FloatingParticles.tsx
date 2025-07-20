"use client"
import { useEffect, useState, type JSX } from "react"

export function FloatingParticles() {
  const [particles, setParticles] = useState<JSX.Element[]>([])

  useEffect(() => {
    const items = [...Array(20)].map((_, i) => {
      const left = `${Math.random() * 100}%`
      const top = `${Math.random() * 100}%`
      const delay = `${Math.random() * 5}s`
      const duration = `${3 + Math.random() * 4}s`
      return (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
          style={{ left, top, animationDelay: delay, animationDuration: duration }}
        />
      )
    })
    setParticles(items)
  }, [])

  return <div className="absolute inset-0">{particles}</div>
}
