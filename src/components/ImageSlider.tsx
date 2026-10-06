"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Lightbox from "@/components/Lightbox";

interface ImageSliderProps {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  interval?: number;
  aspectRatio?: string;
  rounded?: string;
  objectFit?: "cover" | "contain" | "fill";
  // Click an image to open it full size
  zoomable?: boolean;
}

export default function ImageSlider({
  images,
  alt,
  autoPlay = true,
  interval = 3500,
  aspectRatio = "aspect-video",
  rounded = "rounded-2xl",
  objectFit = "cover",
  zoomable = false,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!autoPlay || paused || images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, paused, interval, next, images.length]);

  if (images.length === 0) return null;

  const fit = { cover: "object-cover", contain: "object-contain", fill: "object-fill" }[objectFit];
  const frame = `relative ${aspectRatio} ${rounded} overflow-hidden bg-stone-50 dark:bg-stone-900 ${zoomable ? "cursor-zoom-in" : ""}`;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "6%" : "-6%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-6%" : "6%", opacity: 0 }),
  };

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      className="relative group/slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={frame}
        onClick={zoomable ? (e) => { stop(e); setLightboxIndex(current); } : undefined}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" as const }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`${alt} ${current + 1}`}
              fill
              className={`${fit} object-center`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        {zoomable && (
          <span className="absolute top-3 left-3 p-1.5 rounded-lg bg-stone-900/60 text-white opacity-100 md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity">
            <Maximize2 className="w-3.5 h-3.5" />
          </span>
        )}
      </div>

      {images.length > 1 && (
        <>
          {/* Nav arrows: always visible on touch, on hover for desktop */}
          <button
            onClick={(e) => { stop(e); prev(); }}
            className="absolute left-3 top-1/2 -transtone-y-1/2 p-2 rounded-full bg-white/95 shadow-md opacity-100 lg:opacity-0 lg:group-hover/slider:opacity-100 focus-visible:opacity-100 transition-opacity hover:bg-accent hover:text-white text-stone-700"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { stop(e); next(); }}
            className="absolute right-3 top-1/2 -transtone-y-1/2 p-2 rounded-full bg-white/95 shadow-md opacity-100 lg:opacity-0 lg:group-hover/slider:opacity-100 focus-visible:opacity-100 transition-opacity hover:bg-accent hover:text-white text-stone-700"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -transtone-x-1/2 flex gap-1.5 px-2 py-1 rounded-full bg-stone-900/30 backdrop-blur-sm">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { stop(e); setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
                className={`h-1.5 rounded-full transition-all ${
                  idx === current ? "w-5 bg-accent" : "w-1.5 bg-white"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {zoomable && (
        <Lightbox
          images={images}
          alt={alt}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
