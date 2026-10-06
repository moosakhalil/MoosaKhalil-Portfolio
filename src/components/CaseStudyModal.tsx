"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ImageSlider from "@/components/ImageSlider";
import type { Project } from "@/lib/data";
import { ArrowUpRight, X } from "lucide-react";

interface CaseStudyModalProps {
  project: Project;
  onClose: () => void;
}

const linkClass =
  "inline-flex items-center gap-1.5 px-5 py-3 rounded-lg text-base font-medium transition-colors";

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      // Let an open lightbox handle Escape first
      if (e.key === "Escape" && !document.querySelector('[aria-label$="image viewer"]')) onClose();
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  const goToSpotlight = () => {
    onClose();
    setTimeout(() => document.querySelector(project.spotlight!)?.scrollIntoView({ behavior: "smooth" }), 200);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-start sm:items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true" aria-labelledby={`case-${project.slug}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-stone-950/60"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-4xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[90dvh] overflow-y-auto overscroll-contain rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-stone-900/95 border-b border-stone-200 dark:border-stone-800">
          <p className="text-sm text-stone-500 dark:text-stone-400">Case study</p>
          <button
            ref={closeRef}
            onClick={onClose}
            className="p-1.5 rounded-md text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="border-b border-stone-200 dark:border-stone-800">
          <ImageSlider
            images={project.images}
            alt={`${project.name} screenshot`}
            aspectRatio="aspect-video"
            rounded="rounded-none"
            objectFit="contain"
            autoPlay={false}
            zoomable
          />
        </div>

        <div className="p-6 md:p-10 space-y-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">{project.label}</p>
            <h3 id={`case-${project.slug}`} className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight text-stone-900 dark:text-white">
              {project.name}
            </h3>
            <p className="mt-1 text-base md:text-lg text-stone-500 dark:text-stone-400">{project.tagline}</p>
            <p className="mt-5 text-stone-700 dark:text-stone-300 text-lg md:text-xl leading-relaxed">{project.description}</p>
          </div>

          <div className="rounded-lg border-l-4 border-accent bg-accent-50 dark:bg-accent/10 p-4 md:p-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light mb-1.5">My role</h4>
            <p className="text-base md:text-lg text-stone-800 dark:text-stone-100">{project.role}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-4">What I built</h4>
            <ul className="space-y-3 list-disc pl-5 marker:text-accent text-base md:text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3">Tech stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-md bg-accent-50 dark:bg-accent/15 text-accent dark:text-accent-light text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-stone-200 dark:border-stone-800">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className={`${linkClass} bg-accent text-white hover:bg-accent-dark`}>
                Live site <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${linkClass} border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-100 hover:border-accent hover:text-accent`}>
                Source code <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.spotlight && (
              <button onClick={goToSpotlight} className={`${linkClass} border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-100 hover:border-accent hover:text-accent`}>
                Read the full write-up
              </button>
            )}
            {project.privateNote && (
              <p className="text-sm text-stone-500 dark:text-stone-400">{project.privateNote}</p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
