import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import React from "react";
import Image from "next/image";
import { CertificateForPortfolio } from "@/@types";

interface IProps {
  cert: CertificateForPortfolio;
  itemVariants: Variants;
}

const CertificateCard = ({ cert, itemVariants }: IProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-lg hover:border-[hsl(var(--primary))]">
        <div className="relative w-full h-48 overflow-hidden bg-muted">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={cert.imageUrl || "/placeholder.svg"}
              alt={cert.title}
              fill
              className="object-cover will-change-transform"
            />
          </motion.div>
        </div>

        <CardHeader className="flex-shrink-0">
          <CardTitle className="text-xl font-semibold">{cert.title}</CardTitle>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
            {cert.description}
          </p>
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-sm font-medium text-[hsl(var(--primary))] hover:underline"
            >
              View Certificate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CertificateCard;
