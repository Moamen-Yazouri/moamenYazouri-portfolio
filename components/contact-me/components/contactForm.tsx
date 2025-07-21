import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import React, { useState } from 'react'
import { itemVariants } from '../varients.constants'

const ContactForm = () => {
    const [isSending, setisSending] = useState(false);
    const handleSubmit = () => {
        
    }
    return (
        <motion.div variants={itemVariants} className="lg:col-span-1">
              <Card className="bg-card/50 backdrop-blur-lg border border-border/50 shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="name" className="text-left text-muted-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className="bg-input/30 border-border/50 focus-visible:ring-[hsl(var(--primary))]"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="email" className="text-left text-muted-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@example.com"
                        required
                        className="bg-input/30 border-border/50 focus-visible:ring-[hsl(var(--primary))]"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                      <Label htmlFor="message" className="text-left text-muted-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        rows={5}
                        required
                        className="bg-input/30 border-border/50 focus-visible:ring-[hsl(var(--primary))]"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                      disabled={isSending}
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: isSending ? -20 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center"
                      >
                        {isSending ? "Sending..." : "Send Message"}
                      </motion.span>
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: isSending ? 0 : "100%", opacity: isSending ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        <Send className="h-5 w-5" />
                      </motion.div>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
  )
}

export default ContactForm