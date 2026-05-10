"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { roles } from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* ── Subtle Background ── */}
      <div className="absolute inset-0 dot-pattern opacity-[0.1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* ── Left Content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left space-y-8 order-2 lg:order-1"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Available for new projects</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1 
                variants={item}
                className="text-5xl sm:text-6xl lg:text-8xl font-display font-black text-slate-900 leading-[1.1] tracking-tight"
              >
                Muhammad<br />
                <span className="gradient-text">Moosa Khalil</span>
              </motion.h1>

              <motion.div variants={item} className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <div className="h-10 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={roles[roleIndex]}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-2xl lg:text-3xl font-semibold text-slate-900"
                    >
                      {roles[roleIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            <motion.p variants={item} className="text-slate-700 text-lg lg:text-xl max-w-xl leading-relaxed">
              Crafting high-performance <span className="text-slate-900 font-medium">full-stack solutions</span> with Next.js and React. Transforming complex problems into elegant digital experiences.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold shadow-xl shadow-slate-200 hover:bg-accent transition-all duration-300"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a
                href="/Moosa_CV.pdf"
                download
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-100 text-slate-700 font-bold hover:bg-slate-50 transition-all duration-300"
              >
                Get CV
                <Download className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right Image (Circular Headshot) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:flex-1 relative flex justify-center lg:justify-end mt-12 lg:mt-0 order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl bg-slate-50">
              {/* Subtle inner glow for depth */}
              <div className="absolute inset-0 rounded-full shadow-inner opacity-20 pointer-events-none" />
              
              <Image
                src="/images/headshot.jpg"
                alt="Muhammad Moosa Khalil"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 420px"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Scroll Down</span>
        <div className="w-[1px] h-12 bg-slate-100 relative overflow-hidden">
          <motion.div 
            animate={{ y: [-48, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
