"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  interval?: number;
  aspectRatio?: string;
  rounded?: string;
  objectFit?: "cover" | "contain" | "fill";
}

export default function ImageSlider({
  images,
  alt,
  autoPlay = true,
  interval = 3500,
  aspectRatio = "aspect-video",
  rounded = "rounded-2xl",
  objectFit = "cover",
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next, images.length]);

  if (images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className={`relative ${aspectRatio} ${rounded} overflow-hidden bg-white`}>
        <Image 
          src={images[0]} 
          alt={alt} 
          fill 
          className={`object-${objectFit} object-center w-full h-full`} 
          sizes="(max-width: 768px) 100vw, 50vw" 
        />
      </div>
    );
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="relative group">
      <div className={`relative ${aspectRatio} ${rounded} overflow-hidden bg-slate-100`}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" as const }}
            className="absolute inset-0"
          >
            <Image
              src={images[current]}
              alt={`${alt} ${current + 1}`}
              fill
              className={`object-${objectFit} object-center w-full h-full`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 text-slate-700" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 text-slate-700" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setDirection(idx > current ? 1 : -1); setCurrent(idx); }}
            className={`h-1.5 rounded-full transition-all ${
              idx === current ? "w-6 bg-accent" : "w-1.5 bg-white/70"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
