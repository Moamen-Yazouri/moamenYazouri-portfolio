import { motion } from 'framer-motion';
import React from 'react';
import { itemVariants } from '../varients.constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SOCIAL_LINKS } from '../constants';

const SocialLinks = () => {
    return (
        <motion.div variants={itemVariants} className="lg:col-span-1 flex flex-col justify-center">
            <Card className="bg-card/50 backdrop-blur-lg border border-border/50 shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Connect with Me</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center h-full space-y-6">
                  <p className="text-muted-foreground text-center">You can also find me on these platforms:</p>
                  <div className="flex gap-6">
                    {SOCIAL_LINKS.map(({ Icon, name, link }) => (
                      <motion.a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors duration-200 group"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 15 }}
                        >
                          <Icon className="h-8 w-8" />
                        </motion.div>
                        <span className="text-sm font-medium">{name}</span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
        </motion.div>
    )
}

export default SocialLinks