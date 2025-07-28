"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionLoaderProps {
  className?: string
  variant?: "default" | "cards" | "list" | "hero"
  itemCount?: number
}

export function SectionLoader({ className, variant = "default", itemCount = 3 }: SectionLoaderProps) {
  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: { x: "100%" },
  }

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }


  const Shimmer = ({ className: shimmerClassName }: { className?: string }) => (
    <div className={cn("relative overflow-hidden bg-[hsl(var(--muted)/0.3)] rounded", shimmerClassName)}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--primary)/0.1)] to-transparent"
        variants={shimmerVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )


  const DefaultSkeleton = () => (
    <motion.div variants={containerVariants} initial="initial" animate="animate" className="space-y-8">
    
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <Shimmer className="h-12 w-64 mx-auto" />
        <Shimmer className="h-6 w-96 mx-auto" />
      </motion.div>


      <motion.div variants={itemVariants} className="space-y-4">
        {Array.from({ length: itemCount }).map((_, i) => (
          <Shimmer key={i} className="h-4 w-full" />
        ))}
      </motion.div>
    </motion.div>
  )

  
  const CardsSkeleton = () => (
    <motion.div variants={containerVariants} initial="initial" animate="animate" className="space-y-8">

      <motion.div variants={itemVariants} className="text-center space-y-4">
        <Shimmer className="h-12 w-64 mx-auto" />
        <Shimmer className="h-6 w-96 mx-auto" />
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {Array.from({ length: itemCount }).map((_, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="space-y-4 p-6 border border-[hsl(var(--border))] rounded-lg bg-[hsl(var(--card)/0.5)] backdrop-blur-sm"
          >
            <Shimmer className="h-48 w-full" />
            <Shimmer className="h-6 w-3/4" />
            <div className="space-y-2">
              <Shimmer className="h-4 w-full" />
              <Shimmer className="h-4 w-5/6" />
              <Shimmer className="h-4 w-4/6" />
            </div>
            <div className="flex gap-2">
              <Shimmer className="h-8 w-16" />
              <Shimmer className="h-8 w-20" />
              <Shimmer className="h-8 w-14" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )

  
  const ListSkeleton = () => (
    <motion.div variants={containerVariants} initial="initial" animate="animate" className="space-y-8">
      
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <Shimmer className="h-12 w-64 mx-auto" />
        <Shimmer className="h-6 w-96 mx-auto" />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {Array.from({ length: itemCount }).map((_, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="flex flex-col items-center text-center p-6 border border-[hsl(var(--border))] rounded-lg bg-[hsl(var(--card)/0.5)] backdrop-blur-sm space-y-4"
          >
            <Shimmer className="w-16 h-16 rounded-full" />
            <Shimmer className="h-6 w-20" />
            <div className="space-y-2 w-full">
              <Shimmer className="h-4 w-full" />
              <Shimmer className="h-4 w-5/6 mx-auto" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )

  // Hero skeleton
  const HeroSkeleton = () => (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      {/* Profile image skeleton */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <Shimmer className="w-80 h-80 lg:w-96 lg:h-96 rounded-full" />
      </motion.div>

      {/* Content skeleton */}
      <motion.div variants={itemVariants} className="space-y-6">
        <Shimmer className="h-8 w-48" />
        <Shimmer className="h-16 w-full" />
        <Shimmer className="h-12 w-3/4" />
        <div className="space-y-3">
          <Shimmer className="h-6 w-full" />
          <Shimmer className="h-6 w-5/6" />
          <Shimmer className="h-6 w-4/6" />
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Shimmer key={i} className="h-8 w-16" />
          ))}
        </div>
        <div className="flex gap-4">
          <Shimmer className="h-12 w-32" />
          <Shimmer className="h-12 w-36" />
        </div>
      </motion.div>
    </motion.div>
  )

  const renderSkeleton = () => {
    switch (variant) {
      case "cards":
        return <CardsSkeleton />
      case "list":
        return <ListSkeleton />
      case "hero":
        return <HeroSkeleton />
      default:
        return <DefaultSkeleton />
    }
  }

  return (
    <div className={cn("w-full py-12 md:py-24 lg:py-32", className)}>
      <div className="container mx-auto px-4 md:px-6">{renderSkeleton()}</div>
    </div>
  )
}
