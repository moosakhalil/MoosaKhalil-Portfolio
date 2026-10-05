"use client";

import Section, { Reveal } from "@/components/Section";
import ImageSlider from "@/components/ImageSlider";
import { healthSyncImages } from "@/lib/data";
import { ArrowUpRight, Award, HeartPulse, Users } from "lucide-react";

const facts = [
  { icon: Award, value: "2 awards", label: "NUST COMPPEC · Bahria Open House" },
  { icon: HeartPulse, value: "Real-time", label: "Heart-rate tracking via Fitbit" },
  { icon: Users, value: "2 portals", label: "Patient and clinician" },
];

export default function HealthSyncSpotlight() {
  return (
    <Section id="health-sync" label="Final year project" title="Health Sync — telehealth & remote patient monitoring">
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-start">
        <Reveal>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg shadow-slate-200/60 dark:shadow-none">
            <ImageSlider
              images={healthSyncImages}
              alt="Health Sync"
              aspectRatio="aspect-[16/10]"
              rounded="rounded-none"
              objectFit="contain"
              autoPlay={false}
              zoomable
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Health Sync connects patients and clinicians with real-time heart-rate tracking from Fitbit wearables, built on
            Next.js with a PostgreSQL schema designed in Prisma on Supabase.
          </p>

          <ul className="mt-8 space-y-4">
            {facts.map(({ icon: Icon, value, label }) => (
              <li key={value} className="flex items-center gap-4">
                <span className="flex items-center justify-center w-12 h-12 shrink-0 rounded-lg bg-accent-50 dark:bg-accent/15 text-accent dark:text-accent-light">
                  <Icon className="w-6 h-6" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{value}</p>
                  <p className="text-base text-slate-500 dark:text-slate-400">{label}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Next.js", "Supabase", "Prisma ORM", "PostgreSQL"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-md bg-accent-50 dark:bg-accent/15 text-accent dark:text-accent-light text-sm font-medium">
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://www.health-sync.live/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-white text-base font-medium hover:bg-accent-dark hover:-translate-y-0.5 transition-all"
          >
            Visit health-sync.live <ArrowUpRight className="w-5 h-5" />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
