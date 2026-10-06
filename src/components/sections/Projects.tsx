"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section, { Reveal } from "@/components/Section";
import ImageSlider from "@/components/ImageSlider";
import CaseStudyModal from "@/components/CaseStudyModal";
import { projects, projectSkills, type Project } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const filterOptions = ["React.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL"];

function ProjectRow({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const flip = index % 2 === 1;

  return (
    <article className="group grid lg:grid-cols-2 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-stone-200/60 dark:hover:shadow-none transition-all duration-500">
      <div
        className={`relative bg-stone-50 dark:bg-stone-900 border-b lg:border-b-0 border-stone-200 dark:border-stone-800 ${
          flip ? "lg:order-2 lg:border-l" : "lg:border-r"
        }`}
      >
        <div className="h-full flex items-center transition-transform duration-700 group-hover:scale-[1.02]">
          <div className="w-full">
            <ImageSlider
              images={project.images}
              alt={project.name}
              aspectRatio="aspect-[16/10]"
              rounded="rounded-none"
              objectFit="contain"
              autoPlay={false}
              zoomable
            />
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 flex flex-col min-w-0">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">{project.label}</p>
        <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 dark:text-white">{project.name}</h3>
        <p className="mt-1 text-base md:text-lg text-stone-500 dark:text-stone-400">{project.tagline}</p>

        <p className="mt-5 text-base md:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">{project.description}</p>
        <p className="mt-4 text-base text-stone-600 dark:text-stone-400">
          <span className="font-semibold text-stone-800 dark:text-stone-200">Role: </span>
          {project.role}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-md bg-accent-50 dark:bg-accent/15 text-accent dark:text-accent-light text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 lg:mt-auto lg:pt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={onOpen}
            className="group/btn inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-white text-base font-medium hover:bg-accent-dark transition-colors"
          >
            Case study
            <ArrowRight className="w-5 h-5 group-hover/btn:transtone-x-1 transition-transform" />
          </button>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg border border-stone-300 dark:border-stone-700 text-base font-medium text-stone-800 dark:text-stone-100 hover:border-accent hover:text-accent dark:hover:text-accent-light transition-colors"
            >
              Live site <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg border border-stone-300 dark:border-stone-700 text-base font-medium text-stone-800 dark:text-stone-100 hover:border-accent hover:text-accent dark:hover:text-accent-light transition-colors"
            >
              Source <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [skill, setSkill] = useState<string | null>(null);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openProject = projects.find((p) => p.slug === openSlug);
  const visible = projects.filter((p) => !skill || projectSkills(p).includes(skill));

  return (
    <Section
      id="projects"
      label="Projects"
      title="Selected work"
      intro="Production client work, an award-winning final year project and live personal builds."
    >
      <Reveal className="flex flex-wrap items-center gap-2 mb-10">
        {[null, ...filterOptions].map((opt) => {
          const active = skill === opt;
          return (
            <button
              key={opt ?? "all"}
              onClick={() => setSkill(opt)}
              aria-pressed={active}
              className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                active
                  ? "bg-accent text-white"
                  : "border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-accent hover:text-accent dark:hover:text-accent-light"
              }`}
            >
              {opt ?? "All"}
            </button>
          );
        })}
      </Reveal>

      <motion.div layout className="space-y-8 md:space-y-10">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="reveal"
            >
              <ProjectRow project={project} index={i} onOpen={() => setOpenSlug(project.slug)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {openProject && (
          <CaseStudyModal key={openProject.slug} project={openProject} onClose={() => setOpenSlug(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
}
