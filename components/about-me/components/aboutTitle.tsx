import { motion } from 'framer-motion'
import React from 'react'

const AboutTitle = () => {
    return (
        <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10, duration: 1 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">About Me</h2>
            <motion.p
              className="max-w-[900px] text-muted-foreground md:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Here's a glimpse into my journey, skills, and what drives me.
            </motion.p>
        </motion.div>
    )
}

export default AboutTitle