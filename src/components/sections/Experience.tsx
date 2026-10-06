"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Section, { Reveal } from "@/components/Section";
import ImageGrid from "@/components/ImageGrid";
import { experiences, experienceImages } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const listRef = useRef(null);
  // Timeline line fills in the theme color as you scroll through the section
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <Section
      id="experience"
      label="Experience"
      title="Where I've worked"
      intro="Production client work and industry experience, most recent first."
    >
      <div ref={listRef} className="relative">
        {/* Timeline rail */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-stone-200 dark:bg-stone-800" />
        <motion.div style={{ scaleY: fill }} className="absolute left-[11px] top-2 bottom-2 w-0.5 origin-top bg-accent" />

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp) => (
            <Reveal key={exp.title}>
              <article className="relative pl-9 sm:pl-12 md:pl-16">
                <span className="absolute left-0 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-white dark:bg-stone-950 border-2 border-accent">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </span>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base">
                  <span className="font-semibold text-accent dark:text-accent-light">{exp.date}</span>
                  <span className="text-stone-500 dark:text-stone-400">{exp.location}</span>
                  {exp.current && (
                    <span className="px-2.5 py-0.5 rounded-full bg-accent text-white text-xs font-medium">Current</span>
                  )}
                  {exp.nda && (
                    <span
                      className="px-2.5 py-0.5 rounded-full border border-accent/40 text-accent dark:text-accent-light text-xs font-medium"
                      title="Client identity and further details withheld under NDA"
                    >
                      Under NDA
                    </span>
                  )}
                </div>

                <div className="mt-4 p-5 sm:p-6 md:p-8 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="hidden sm:flex items-center justify-center w-12 h-12 shrink-0 rounded-lg bg-accent-50 dark:bg-accent/15 text-accent dark:text-accent-light">
                      <Briefcase className="w-6 h-6" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-xl md:text-2xl font-semibold text-stone-900 dark:text-white">{exp.title}</h3>
                      <p className="mt-1 text-base md:text-lg text-stone-600 dark:text-stone-300">
                        {exp.company}
                        {exp.subtitle && <span className="text-stone-500 dark:text-stone-400">, {exp.subtitle}</span>}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 list-disc pl-4 sm:pl-5 marker:text-accent text-base md:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  {exp.architecture.length > 0 && (
                    <div className="mt-6 rounded-lg bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-4 md:p-5">
                      <p className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">System overview</p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {exp.architecture.map((node, i) => (
                          <span key={node} className="flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-md bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-sm md:text-base font-medium text-stone-800 dark:text-stone-100">
                              {node}
                            </span>
                            {i < exp.architecture.length - 1 && <span className="text-accent font-semibold">→</span>}
                          </span>
                        ))}
                      </div>
                      {exp.modules.length > 0 && (
                        <p className="mt-3 text-sm md:text-base text-stone-600 dark:text-stone-400">
                          ERP modules: {exp.modules.join(", ")}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[...exp.domains, ...exp.stack].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-accent-50 dark:bg-accent/15 text-accent dark:text-accent-light text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {exp.company === "Jazba Innovations" && (
                    <div className="mt-8">
                      <ImageGrid
                        images={experienceImages}
                        alt="Jazba Innovations internship certificate"
                        fit="contain"
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl"
                      />
                      <p className="mt-3 text-sm md:text-base text-stone-500 dark:text-stone-400">
                        Internship certificate and recognition from Jazba Innovations. Click to enlarge.
                      </p>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
