import { SkillForPortfolio } from '@/@types';
import { motion } from 'framer-motion';
import React from 'react';
import { itemVariants } from '../variants.constants';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
interface IProps extends SkillForPortfolio {}
const SkillCard = (skill: IProps) => {
    return (
        <motion.div key={skill._id} variants={itemVariants} whileHover={{ scale: 1.05, rotateZ: 2 }}>
            <Card className="h-full flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg hover:border-[hsl(var(--primary))]">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                <Image
                    src={skill.iconUrl || "/placeholder.svg"}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="object-contain"
                />
                </div>
                <CardHeader className="p-0 mb-2">
                <CardTitle className="text-lg font-semibold">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                    <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{skill.description}</p>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default SkillCard