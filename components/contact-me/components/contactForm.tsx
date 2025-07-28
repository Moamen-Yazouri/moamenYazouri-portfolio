"use client";
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import React from 'react'
import { itemVariants } from '../varients.constants'
import { Form, FormikProvider } from 'formik'
import { useContactForm } from '../hooks/useContactForm'
import CustomTextField from '@/components/customs/motionTextField'
import CustomTextArea from '@/components/customs/MotionTextarea'
import { Loader } from '@/components/loader/small-loader'

const ContactForm = () => {
    const {formik} = useContactForm();
    return (
        <motion.div variants={itemVariants} className="lg:col-span-1">
              <Card className="bg-card/50 backdrop-blur-lg border border-border/50 shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <FormikProvider value={formik}>
                    <Form className="space-y-6">
                        <CustomTextField
                          name="name"
                          label='Name'
                          type="text"
                          placeholder="Your Name"
                          required
                          className="bg-input/30 border-border/50 focus-visible:ring-[hsl(var(--primary))]"
                          style={{
                            input: "bg-input/30 border-border/50 focus-visible:ring-[hsl(var(--primary))]",
                            label: "text-left text-muted-foreground"
                          }}
                          disabled= {formik.isSubmitting}
                        />
                
                        <CustomTextField
                          name="email"
                          label='Email'
                          type='email'
                          placeholder="your@example.com"
                          required
                          style={{
                            input: "bg-input/30 border-border/50 focus-visible:ring-[hsl(var(--primary))]",
                            label: "text-left text-muted-foreground"
                          }}
                          disabled= {formik.isSubmitting}
                        />
                        <CustomTextArea
                          name="message"
                          label='Message'
                          placeholder="Your message here..."
                          rows={5}
                          required
                          style={{
                            input: "bg-input/30 border-border/50 focus-visible:ring-[hsl(var(--primary))]",
                            label: "text-left text-muted-foreground" 
                          }}
                          disabled= {formik.isSubmitting}
                        />
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full group relative overflow-hidden transition-all duration-300 ease-in-out bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-indigo-500/20 text-cyan-300 hover:text-white hover:from-cyan-600/30 hover:via-blue-600/20 hover:to-indigo-600/30 border border-cyan-500/30 cursor-pointer"
                          disabled={formik.isSubmitting}
                        >
                          <motion.span
                            initial={{ x: 0 }}
                            animate={{ x: formik.isSubmitting ? -20 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-center"
                          >
                            {formik.isSubmitting ? <Loader /> : "Send"}
                          </motion.span>
                          <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: formik.isSubmitting ? 0 : "100%", opacity: formik.isSubmitting ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                          >
                            <Send className="h-5 w-5" />
                          </motion.div>
                        </Button>

                    </Form>
                  </FormikProvider>
                </CardContent>
              </Card>
            </motion.div>
  )
}

export default ContactForm