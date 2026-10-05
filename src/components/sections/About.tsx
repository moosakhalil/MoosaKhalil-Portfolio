"use client";

import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiPrisma, SiSupabase, SiFirebase, SiJsonwebtokens, SiVercel,
  SiRender, SiGit, SiGithub, SiWebpack,
} from "react-icons/si";
import { Database, Webhook, UsersRound, LockKeyhole, Gauge, ScrollText, type LucideIcon } from "lucide-react";
import Section, { Reveal, RevealGroup, RevealItem } from "@/components/Section";
import { skillGroups } from "@/lib/data";

// One-color icons so the grid stays uniform; tinted with the theme color.
const skillIcons: Record<string, IconType | LucideIcon> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: Database,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": Webhook,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  "Prisma ORM": SiPrisma,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  JWT: SiJsonwebtokens,
  RBAC: UsersRound,
  "AES-256-GCM": LockKeyhole,
  "Rate Limiting": Gauge,
  "Audit Logging": ScrollText,
  Vercel: SiVercel,
  Render: SiRender,
  Git: SiGit,
  GitHub: SiGithub,
  Webpack: SiWebpack,
};

const education = [
  {
    school: "Bahria University, Islamabad",
    degree: "BS Software Engineering",
    dates: "2022 – 2026",
    logo: "/images/logos/bahria.png",
    detail: "Coursework: Data Structures, Algorithms, Database Systems, Web Engineering, Software Design Patterns",
  },
  {
    school: "Cadet College Petaro",
    degree: "Matric (Science) & FSc (Pre-Engineering)",
    dates: "2017 – 2021",
    logo: "/images/logos/college.png",
    detail: "",
  },
];

export default function About() {
  return (
    <Section id="about" label="About" title="Building production software, end to end.">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
        <Reveal className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            I&apos;m a <span className="text-slate-900 dark:text-white font-medium">Full-Stack Software Engineer</span> (BS
            Software Engineering, 2026) who ships production web applications with React.js, Next.js, Node.js, TypeScript,
            MongoDB and PostgreSQL.
          </p>
          <p>
            I&apos;m currently building production ERP / e-commerce and laundry services applications for a client, owning
            the work from database schema and secure REST APIs to the production UI. Before that I independently built and
            deployed a complete rental management system for a car rental agency.
          </p>
          <p>
            My final year project, Health Sync, won the Appreciation Award at NUST COMPPEC and 3rd place at the Bahria
            University FYP Open House.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-sm md:text-base font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">Education</h3>
          <ul className="space-y-5">
            {education.map((edu) => (
              <li
                key={edu.school}
                className="flex gap-5 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-accent/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative w-16 h-16 shrink-0 rounded-lg border border-slate-200 dark:border-slate-700 bg-white p-2">
                  <Image src={edu.logo} alt="" width={56} height={56} className="object-contain w-full h-full" />
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-slate-900 dark:text-white leading-snug">{edu.degree}</p>
                  <p className="text-base text-slate-600 dark:text-slate-300">{edu.school}</p>
                  <p className="text-sm font-medium text-accent dark:text-accent-light mt-1">{edu.dates}</p>
                  {edu.detail && <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{edu.detail}</p>}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-20 md:mt-24">
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-8">Technical skills</h3>
        </Reveal>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className="text-sm md:text-base font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                {group.title}
              </p>
              <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {group.skills.map(({ name }) => {
                  const Icon = skillIcons[name];
                  return (
                    <RevealItem key={name}>
                      <div className="group h-full flex items-center gap-3 sm:gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-accent/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                        <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-accent-50 dark:bg-accent/15 text-accent dark:text-accent-light group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                          {Icon && <Icon className="w-6 h-6" aria-hidden="true" />}
                        </span>
                        <span className="min-w-0 text-[15px] sm:text-base font-medium text-slate-800 dark:text-slate-100 leading-tight">
                          {name}
                        </span>
                      </div>
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
