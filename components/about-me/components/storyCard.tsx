import { easeInOut, motion } from 'framer-motion'
import React from 'react'
import CardWrapper from './CardWrapper'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { myStory } from '../constants'

const StoryCard = () => {
    const floatingAnimation = {
        y: [-10, 10, -10],
        transition: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: easeInOut },
    }
    return (
        <motion.div
            className="md:col-span-7 lg:col-span-8"
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            animate={floatingAnimation}
        >
            <motion.div whileHover={{ scale: 1.02, rotateY: 5 }}>
            <CardWrapper gradient="bg-gradient-to-br from-[hsl(var(--primary)/0.1)] via-[hsl(var(--background)/0.3)] to-[hsl(var(--accent)/0.1)]">
                <CardHeader>
                <CardTitle className="text-2xl gradient-text">My Story</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                    {myStory}
                </p>
                </CardContent>
            </CardWrapper>
            </motion.div>
        </motion.div>
    )
}

export default StoryCard