import { motion } from 'framer-motion'
import React from 'react'

const BackgroundOrbs = () => {
    return (
        <div className="absolute inset-0 overflow-hidden z-0">
        
            <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div
                className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-success/20 rounded-full blur-3xl"
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div
                className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-muted/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

        </div>
    )
}

export default BackgroundOrbs