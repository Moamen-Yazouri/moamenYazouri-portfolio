import { motion } from 'framer-motion'
import React from 'react'
import { achievements, floatingAnimation } from '../constants'
import CardWrapper from './CardWrapper'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Achivements = () => {
    return (
        <motion.div
            className="md:col-span-12 md:-mt-4"
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            animate={{ ...floatingAnimation, transition: { delay: 2 } }}
        >
            <motion.div >
            <CardWrapper gradient="bg-gradient-to-br from-[hsl(var(--warning)/0.1)] via-[hsl(var(--background)/0.3)] to-[hsl(var(--accent)/0.1)]">
                <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-warning to-accent bg-clip-text text-transparent">
                    Key Achievements
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="flex items-start space-x-2 p-3 rounded-lg bg-card/50 backdrop-blur-sm border border-border/20"
                    >
                        <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-warning to-accent rounded-full mt-2 flex-shrink-0"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                        />
                        <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                    </motion.div>
                    ))}
                </div>
                </CardContent>
            </CardWrapper>
            </motion.div>
        </motion.div>
    )
}

export default Achivements