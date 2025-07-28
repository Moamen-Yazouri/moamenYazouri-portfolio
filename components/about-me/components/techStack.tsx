import { motion } from 'framer-motion'
import React from 'react'
import { floatingAnimation, techStack } from '../constants'
import CardWrapper from './CardWrapper'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const TechStack = () => {
    return (
        <motion.div
            className="md:col-span-5 lg:col-span-4 md:mt-8"
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            animate={{ ...floatingAnimation, transition: { delay: 1 } }}
        >
            <motion.div whileHover={{ scale: 1.05, rotateZ: 2, rotateY: -5 }}>
            <CardWrapper gradient="bg-gradient-to-br from-[hsl(var(--success)/0.1)] via-[hsl(var(--background)/0.3)] to-[hsl(var(--accent)/0.1)]">
                <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-success to-accent bg-clip-text text-transparent">
                    My Tech Stack
                </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                    <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                    <Badge
                        variant="secondary"
                        className="skill-badge hover:bg-primary hover:text-primary-foreground hover:shadow-lg cursor-pointer"
                    >
                        {tech}
                    </Badge>
                    </motion.div>
                ))}
                </CardContent>
            </CardWrapper>
            </motion.div>
        </motion.div>
    )
}

export default TechStack