import { motion } from 'framer-motion';
import React from 'react';

const BackgroundElements = () => {
    return (
        <div className="absolute inset-0 overflow-hidden z-0">
            <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-[hsl(var(--primary)/0.1)] rounded-full mix-blend-multiply filter blur-xl animate-blob"
            animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--accent)/0.1)] rounded-full mix-blend-multiply filter blur-xl animate-blob"
            animate={{ x: [50, -50, 50], y: [50, -50, 50] }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[hsl(var(--primary)/0.05)] rounded-full mix-blend-multiply filter blur-2xl animate-blob"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 360, 0] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
        </div>
    )
}

export default BackgroundElements