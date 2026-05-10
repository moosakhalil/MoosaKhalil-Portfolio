"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/lib/data";
import { GraduationCap, Code2, Layers, Database, Terminal } from "lucide-react";

const categoryIcons: Record<string, any> = {
  Languages: Terminal,
  Frontend: Code2,
  Backend: Layers,
  Databases: Database,
  Tools: Terminal,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      school: "Bahria University Islamabad",
      degree: "BS Software Engineering | 2022 – 2026",
      logo: "/images/logos/bahria.png",
      courses: ["Data Structures", "Algorithms", "Web Engineering", "Database Systems", "Software Design"]
    },
    {
      school: "Cadet College Petaro",
      degree: "FSC Pre-Engineering | 2019 – 2021",
      logo: "/images/logos/college.png",
      desc: "Completed pre-engineering studies with strong foundation in mathematics and physics."
    }
  ];

  // Helper to render skill icons
  const renderSkill = (skill: string) => {
    let fileName = skill.toLowerCase().replace('.js', '').replace(' ', '-');
    if (skill === "MongoDB") fileName = "mongo";
    
    return (
      <motion.div
        key={skill}
        whileHover={{ y: -8 }}
        className="flex flex-col items-center gap-4 group cursor-pointer"
      >
        <div className="relative w-24 h-24 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Image 
            src={`/images/logos/${fileName}.png`}
            alt={skill}
            width={80}
            height={80}
            className="object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.querySelector('.fallback')!.classList.remove('hidden');
            }}
          />
          <div className="fallback hidden absolute inset-0 flex items-center justify-center text-slate-200">
            <span className="text-sm font-black">{skill.substring(0, 2).toUpperCase()}</span>
          </div>
        </div>
        <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors tracking-wide uppercase">
          {skill}
        </span>
      </motion.div>
    );
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="About Me" />

        <div ref={ref} className="space-y-32">
          
          {/* 1. Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-slate-600 text-2xl leading-relaxed mb-6">
              Results-driven <span className="text-slate-900 font-semibold italic">Software Engineer</span> with hands-on experience in
              full-stack web development, API integration, and scalable
              application architecture. Proficient in <span className="text-accent font-bold">React.js, Next.js, and Node.js</span>.
            </p>
            <div className="h-1 w-24 bg-accent/20 mx-auto rounded-full" />
          </motion.div>

          {/* 2. Education Section */}
          <div className="space-y-12">
            <h3 className="text-3xl font-display font-bold text-slate-900 flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-accent" />
              Academic Background
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {education.map((edu, idx) => (
                <motion.div 
                  key={edu.school}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
                >
                  <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                    <Image 
                      src={edu.logo} 
                      alt={edu.school} 
                      width={96} 
                      height={96} 
                      className="relative z-10 object-contain transition-transform duration-500 group-hover:scale-110" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.querySelector('.edu-fallback')!.classList.remove('hidden');
                      }}
                    />
                    <div className="edu-fallback hidden absolute inset-0 flex items-center justify-center text-slate-200">
                      <GraduationCap className="w-16 h-16" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-accent transition-colors leading-tight">
                      {edu.school}
                    </h3>
                    <p className="text-accent font-semibold text-lg mt-2 mb-4">
                      {edu.degree}
                    </p>
                    
                    {edu.courses ? (
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-6">
                        {edu.courses.map((course) => (
                          <span key={course} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white text-slate-400 border border-slate-100 shadow-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-slate-500 text-base leading-relaxed">{edu.desc}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3. Technical Expertise Section */}
          <div className="space-y-16">
            <h3 className="text-3xl font-display font-bold text-slate-900 flex items-center justify-center gap-3">
              <Code2 className="w-8 h-8 text-accent" />
              Technical Arsenal
            </h3>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 lg:gap-x-16">
                {Object.values(skills).flat().map((skill) => renderSkill(skill))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
