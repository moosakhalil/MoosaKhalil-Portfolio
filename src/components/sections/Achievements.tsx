"use client";

import { useState } from "react";
import Image from "next/image";
import Section, { RevealGroup, RevealItem, Reveal } from "@/components/Section";
import ImageSlider from "@/components/ImageSlider";
import Lightbox from "@/components/Lightbox";
import { certifications, nustAwardImages, openHouseImages } from "@/lib/data";
import { ArrowUpRight, Award, BadgeCheck, Maximize2 } from "lucide-react";

const awards = [
  {
    event: "NUST COMPPEC 2026",
    title: "Appreciation Award",
    body: "Recognized for innovation and technical excellence in the IoT & Digital Solutions category at a national-level competition, presented to the NUST evaluation panel. Health Sync stood out for its integration of Fitbit data with provider workflows.",
    images: nustAwardImages,
    alt: "NUST COMPPEC Award ceremony",
  },
  {
    event: "Bahria University Open House 2026",
    title: "3rd Position, Final Year Project",
    body: "Placed third among final year projects at the Bahria University Open House, H-11 Campus, Islamabad, presenting Health Sync to faculty, industry guests and visitors.",
    images: openHouseImages,
    alt: "Bahria University Open House award",
  },
];

export default function Achievements() {
  const [certIndex, setCertIndex] = useState<number | null>(null);

  return (
    <Section id="achievements" label="Recognition" title="Awards & certifications">
      <RevealGroup className="grid md:grid-cols-2 gap-6 md:gap-8">
        {awards.map((award) => (
          <RevealItem key={award.event}>
            <article className="h-full rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden bg-white dark:bg-stone-900/40 hover:border-accent/40 hover:shadow-xl hover:shadow-stone-200/60 dark:hover:shadow-none hover:-transtone-y-1 transition-all duration-500">
              <div className="border-b border-stone-200 dark:border-stone-800">
                <ImageSlider
                  images={award.images}
                  alt={award.alt}
                  aspectRatio="aspect-[4/3]"
                  rounded="rounded-none"
                  objectFit="contain"
                  autoPlay={false}
                  zoomable
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent dark:text-accent-light">
                  <Award className="w-5 h-5" />
                  {award.event}
                </p>
                <h3 className="mt-3 text-xl md:text-2xl font-semibold text-stone-900 dark:text-white">{award.title}</h3>
                <p className="mt-3 text-base md:text-lg text-stone-600 dark:text-stone-300 leading-relaxed">{award.body}</p>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-20">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 dark:text-white mb-8">Certifications</h3>
      </Reveal>
      <RevealGroup className="grid sm:grid-cols-2 gap-5">
        {certifications.map((cert, idx) => (
          <RevealItem key={cert.name}>
            <div className="group h-full flex flex-col rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40 overflow-hidden hover:border-accent/40 hover:shadow-lg hover:-transtone-y-1 transition-all duration-300">
              <button
                onClick={() => setCertIndex(idx)}
                className="relative aspect-[16/10] bg-white border-b border-stone-200 dark:border-stone-800 cursor-zoom-in overflow-hidden"
                aria-label={`View ${cert.name} certificate`}
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="absolute top-3 right-3 p-2 rounded-md bg-stone-900/70 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </button>
              <div className="p-5 flex items-start gap-3">
                <BadgeCheck className="w-6 h-6 shrink-0 text-accent dark:text-accent-light mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">{cert.issuer}</p>
                  <p className="mt-1 text-lg font-medium text-stone-900 dark:text-white leading-snug">{cert.name}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-base font-medium text-accent dark:text-accent-light hover:underline"
                    >
                      Verify credential <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Lightbox
        images={certifications.map((c) => c.image)}
        alt="Certificate"
        index={certIndex}
        onClose={() => setCertIndex(null)}
      />
    </Section>
  );
}
