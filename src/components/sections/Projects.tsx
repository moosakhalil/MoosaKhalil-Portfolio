"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import ImageSlider from "@/components/ImageSlider";
import { projects } from "@/lib/data";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Innovative solutions built with a focus on scalability and user experience."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={item}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col"
            >
              {/* Image Slider Header */}
              <div className="relative">
                <ImageSlider 
                  images={project.images} 
                  alt={project.name} 
                  aspectRatio="aspect-[4/3]"
                  rounded="rounded-none"
                  objectFit="contain"
                  autoPlay={true}
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-white/90 backdrop-blur-sm text-accent shadow-sm border border-slate-200/50 hover:bg-accent hover:text-white transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <div className="p-1 rounded-full bg-slate-50 text-slate-400 group-hover:text-accent transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 border border-slate-100"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-slate-50 text-slate-400">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-white text-sm font-bold shadow-md shadow-accent/20 hover:bg-accent-dark transition-all"
                    >
                      Live Preview
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-all flex items-center justify-center hover:scale-110"
                    >
                      <Image 
                        src="/images/logos/github.png" 
                        alt="GitHub" 
                        width={32} 
                        height={32} 
                        className="transition-all"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
