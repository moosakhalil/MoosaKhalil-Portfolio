"use client";

import { motion, type Variants } from "framer-motion";

// Shared frame so every section has the same width, spacing and heading style.
export default function Section({
  id,
  label,
  title,
  intro,
  children,
}: {
  id?: string;
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 md:py-28 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="mb-12 md:mb-16 max-w-3xl">
          <p className="flex items-center gap-3 text-sm md:text-base font-semibold uppercase tracking-wider text-accent dark:text-accent-light mb-4">
            <span className="h-px w-8 bg-accent dark:bg-accent-light" />
            {label}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-tight">
            {title}
          </h2>
          {intro && <p className="mt-5 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

// One subtle fade-up for a block of content.
export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease, delay }}
      className={`reveal ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Staggered reveal: wrap items in <RevealItem> inside a <RevealGroup>.
const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export function RevealGroup({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={group}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={item} className={`reveal ${className}`}>
      {children}
    </motion.div>
  );
}
