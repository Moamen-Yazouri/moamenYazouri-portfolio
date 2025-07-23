import { motion } from 'framer-motion'
import React from 'react'

const BackgroundEffects = () => {
    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            <motion.div
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-[hsl(var(--primary)/0.08)] rounded-full mix-blend-multiply filter blur-xl animate-blob-slow"
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
            className="absolute -top-20 -right-20 w-56 h-56 bg-[hsl(var(--success)/0.08)] rounded-full mix-blend-multiply filter blur-xl animate-blob-slow"
            animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[hsl(var(--warning)/0.05)] rounded-full mix-blend-multiply filter blur-2xl animate-blob-slow"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
        </div>
    )
}

export default BackgroundEffects