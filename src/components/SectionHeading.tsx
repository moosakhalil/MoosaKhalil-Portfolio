"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-12 md:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
      >
        {title}
      </motion.h2>
      {/* Animated underline */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "80px" } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="h-1 bg-gradient-to-r from-accent to-purple-500 rounded-full mt-4"
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-muted text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
