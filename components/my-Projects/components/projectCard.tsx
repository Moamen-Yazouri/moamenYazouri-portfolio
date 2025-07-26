import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import React from 'react';
import Image from "next/image";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, LinkIcon } from 'lucide-react';
import { IProject, ProjectForPortfolio } from '@/@types';
import { itemVariants } from '../variants.constant';
interface IProps extends ProjectForPortfolio {}
const ProjectCard = ({
    _id,
    title,
    description,
    imageUrl,
    technologies,
    deployLink,
    githubLink,
}: IProps) => {
    return (
        <motion.div
            key={_id}
            variants={itemVariants}
            whileHover={{ scale: 1.03, rotateZ: 1 }}
            className="transition-all duration-300"
        >
            <Card className="h-full flex flex-col overflow-hidden group border border-border hover:border-[hsl(var(--primary))] hover:shadow-lg transition-all duration-300">
            <div className="relative w-full h-56 overflow-hidden bg-muted">
                <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <CardHeader>
                <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                    </Badge>
                    ))}
                </div>
                </div>

                <div className="flex gap-2 mt-auto">
                {deployLink && (
                    <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="transition-colors duration-300 ease-in-out hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))] cursor-pointer"
                    >
                    <a href={deployLink} target="_blank" rel="noopener noreferrer">
                        <LinkIcon className="h-4 w-4 mr-2" />
                        Live Demo
                    </a>
                    </Button>
                )}
                {githubLink && (
                    <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="transition-colors duration-300 ease-in-out hover:bg-[hsl(var(--primary)/0.1)] hover:text-[hsl(var(--primary))] cursor-pointer"
                    >
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                    </a>
                    </Button>
                )}
                </div>
            </CardContent>
            </Card>
        </motion.div>
    )
}

export default ProjectCard