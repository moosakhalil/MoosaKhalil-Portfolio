"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  alt: string;
  index: number | null;
  onClose: () => void;
}

export default function Lightbox({ images, alt, index, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(index ?? 0);
  const [mounted, setMounted] = useState(false);
  const open = index !== null;

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (index !== null) setCurrent(index);
  }, [index]);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose, next, prev]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — image viewer`}
        >
          <button
            onClick={onClose}
            className="absolute z-20 top-4 right-4 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full max-w-6xl touch-pan-y"
            onClick={(e) => e.stopPropagation()}
            drag={images.length > 1 ? "x" : false}
            dragSnapToOrigin
            dragElastic={0.3}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60 || info.velocity.x < -500) next();
              else if (info.offset.x > 60 || info.velocity.x > 500) prev();
            }}
          >
            <Image
              src={images[current]}
              alt={`${alt} ${current + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </motion.div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute z-20 left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute z-20 right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <p className="absolute z-20 bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-white/80">
                {current + 1} / {images.length}
              </p>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
