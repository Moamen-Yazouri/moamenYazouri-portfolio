"use client"
import { motion, useInView } from "framer-motion"; 
import CertificateCard from "../components/certificateCard";
import { containerVariants, itemVariants } from "../variants.constants";
import { CertificateForPortfolio } from "@/@types";
import { useContext, useEffect, useRef } from "react";
import { InViewContext } from "@/providers/inViewSection/inViewSection";

interface IProps {
  certificates: CertificateForPortfolio[]
}
export default function CertificatesSection({certificates}: IProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -50% 0px" });
  const {setInView} = useContext(InViewContext);
  
  useEffect(() => {
    let debounce = undefined;

    if(isInView) {
      debounce = setTimeout(() => {
        setInView("#certificates");
      }, 500);
    }
    return () => {
      if(debounce) {
        clearTimeout(debounce);
      }
    };
  }, [isInView]);
  return (
    <section id="certificates" ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-8 text-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Certificates</h2>
            <p className="max-w-[900px] text-[hsl(var(--muted-foreground))] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Showcasing my commitment to continuous learning and professional growth.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl"
          >
            {
                certificates.map((cert) => (
                <CertificateCard key={cert._id} cert= {cert} itemVariants={itemVariants}/>
                ))
            }
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
