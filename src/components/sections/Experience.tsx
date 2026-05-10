"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ImageSlider from "@/components/ImageSlider";
import { experiences, experienceImages } from "@/lib/data";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Professional Journey" 
          subtitle="A timeline of my professional growth and industry experience."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-10 border-l-2 border-slate-200 group"
              >
                {/* Connector Dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-slate-200 group-hover:border-accent group-hover:scale-125 transition-all duration-300" />
                
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent-50 text-accent">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                        <p className="text-accent font-semibold text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium bg-slate-50 px-3 py-1.5 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {exp.date}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Image Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-accent-100 rounded-[2.5rem] -rotate-2 -z-10" />
            <div className="shadow-2xl rounded-2xl overflow-hidden bg-white border border-slate-100">
              <ImageSlider 
                images={experienceImages} 
                alt="Experience gallery" 
                aspectRatio="aspect-[4/5]"
                rounded="rounded-none"
                objectFit="contain"
              />
              <div className="p-6 bg-white border-t border-slate-100">
                <p className="text-slate-500 text-sm text-center font-medium">
                  Showcasing our workspace, team collaborations, and development environment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
