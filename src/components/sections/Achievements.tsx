"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ImageSlider from "@/components/ImageSlider";
import { certifications, nustAwardImages } from "@/lib/data";
import { Trophy, CheckCircle2 } from "lucide-react";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Honors & Achievements" 
          subtitle="Recognition for technical excellence and continuous learning."
        />

        <div ref={ref} className="space-y-24">
          {/* NUST Award Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-500 border border-amber-100">
                  <Trophy className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  NUST COMPPEC 2024
                </h3>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-accent">Appreciation Award</h4>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Recognized for <span className="text-slate-900 font-semibold">Innovation and Technical Excellence</span> in IoT & Digital Solutions. 
                  Competing among the brightest engineers in Pakistan, Health Sync stood out for its seamless integration of Fitbit data and provider workflows.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "National Level Competition",
                    "IoT & Digital Solutions Category",
                    "Presented to NUST Evaluation Panel",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-slate-50 rounded-[2rem] rotate-2 -z-10" />
              <div className="shadow-2xl rounded-2xl overflow-hidden bg-white border border-slate-100">
                <ImageSlider 
                  images={nustAwardImages} 
                  alt="NUST COMPPEC Award ceremony" 
                  aspectRatio="aspect-square"
                  rounded="rounded-none"
                  objectFit="contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Certifications Grid */}
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              Professional Certifications
              <div className="h-px bg-slate-100 flex-1" />
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="group relative flex flex-col md:flex-row gap-8 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/30 hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative w-full md:w-64 h-44 rounded-xl overflow-hidden shrink-0 shadow-sm border border-slate-200/50 bg-white">
                    <Image src={cert.image} alt={cert.name} fill className="object-contain group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center py-1">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: cert.color }} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{cert.issuer}</span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-accent transition-colors leading-tight">
                        {cert.name}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
