"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";

// Static grid of photos; click any photo to view it full size.
export default function ImageGrid({
  images,
  alt,
  aspect = "aspect-[4/5]",
  fit = "cover",
  className = "grid grid-cols-2 gap-3",
}: {
  images: string[];
  alt: string;
  aspect?: string;
  fit?: "cover" | "contain";
  className?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className={className}>
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            className={`relative ${aspect} overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-zoom-in hover:border-accent/50 hover:shadow-md transition-all`}
            aria-label={`View ${alt} photo ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              className={`${fit === "cover" ? "object-cover" : "object-contain"} transition-transform duration-500 hover:scale-[1.02]`}
              sizes="(max-width: 768px) 50vw, 400px"
            />
          </button>
        ))}
      </div>
      <Lightbox images={images} alt={alt} index={index} onClose={() => setIndex(null)} />
    </>
  );
}
