"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import ContactForm from "./components/contactForm"
import BackgroundElements from "./components/backgroundElements"
import SocialLinks from "./components/socialLinks"
import { containerVariants, itemVariants } from "./varients.constants"
import { useContext, useEffect, useRef } from "react"
import { InViewContext } from "@/providers/inViewSection/inViewSection"

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -50% 0px" });
  const {setInView} = useContext(InViewContext);

  useEffect(() => {
    let debounce = undefined;

    if(isInView) {
      debounce = setTimeout(() => {
        setInView("#contact");
      }, 500);
    }
    return () => {
      if(debounce) {
        clearTimeout(debounce);
      }
    }
  }, [isInView]);

  return (
    <section
      id="contact"
      ref= {ref}
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--muted)/0.2)] to-[hsl(var(--accent)/0.1)]"
    >
      <BackgroundElements />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Get in Touch</h2>
            <p className="max-w-[900px] text-[hsl(var(--muted-foreground))] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </motion.div>

          <div className="w-full max-w-3xl grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
