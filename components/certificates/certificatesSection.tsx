"use client"
import { motion } from "framer-motion"; 
import CertificateCard from "./components/certificateCard";
import { containerVariants, itemVariants } from "./variants.constants";
import { CertificateForPortfolio } from "@/@types";

interface IProps {
  certificates: CertificateForPortfolio[]
}
export default function CertificatesSection({certificates}: IProps) {
  
  return (
    <section id="certificates" className="w-full py-12 md:py-24 lg:py-32 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
