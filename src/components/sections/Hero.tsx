"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { heroStats, contactInfo } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { ArrowRight, Download, Mail } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Hero() {
  const socials = [
    { label: "GitHub", href: contactInfo.github, icon: <GithubIcon className="w-5 h-5" /> },
    { label: "LinkedIn", href: contactInfo.linkedin, icon: <LinkedinIcon className="w-5 h-5" /> },
    { label: "Email", href: `mailto:${contactInfo.email}`, icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <section className="relative pt-28 pb-20 md:pt-36 lg:pt-40 md:pb-28 overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1 min-w-0">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-accent/20 bg-white dark:bg-stone-900 text-sm md:text-base font-medium text-accent dark:text-accent-light"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
            </span>
            Open to full-time Software Engineer roles
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-7xl font-semibold tracking-tight text-stone-900 dark:text-white"
          >
            Muhammad Moosa Khalil
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-xl sm:text-2xl font-medium text-accent dark:text-accent-light">
            Full-Stack Software Engineer
          </motion.p>

          <motion.p variants={item} className="mt-6 text-lg sm:text-xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
            I build production web applications end to end with React.js, Next.js, Node.js, TypeScript, MongoDB and
            PostgreSQL, from database schema and secure REST APIs to the production UI.
          </motion.p>

          <motion.dl variants={item} className="mt-10 grid grid-cols-3 max-w-xl border-y border-stone-200 dark:border-stone-800 divide-x divide-stone-200 dark:divide-stone-800">
            {heroStats.map((stat) => (
              <div key={stat.label} className="py-5 px-3 sm:px-6 first:pl-0 flex flex-col-reverse justify-end">
                <dt className="mt-1 text-sm sm:text-base text-stone-500 dark:text-stone-400 leading-snug">{stat.label}</dt>
                <dd className="text-3xl sm:text-4xl font-semibold text-accent dark:text-accent-light">{stat.value}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-white text-base font-medium shadow-sm shadow-accent/30 hover:bg-accent-dark hover:-transtone-y-0.5 transition-all"
            >
              View projects
              <ArrowRight className="w-5 h-5 group-hover:transtone-x-1 transition-transform" />
            </button>
            <a
              href="/Moosa_CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-100 text-base font-medium hover:border-accent hover:text-accent dark:hover:text-accent-light hover:-transtone-y-0.5 transition-all"
            >
              Download resume
              <Download className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 text-[15px] text-stone-700 dark:text-stone-300 hover:border-accent hover:text-accent dark:hover:text-accent-light transition-colors"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:block"
        >
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-[400px] lg:h-[440px] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-lg shadow-stone-200/60 dark:shadow-none bg-white">
            <Image
              src="/images/headshot1.jpeg"
              alt="Muhammad Moosa Khalil"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 640px) 144px, (max-width: 1024px) 192px, 400px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
