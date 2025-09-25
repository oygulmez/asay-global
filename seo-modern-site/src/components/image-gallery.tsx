"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type GalleryImage = {
  src: string;
  alt?: string;
};

const defaultImages: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=1200&w=1200&auto=format&fit=crop", alt: "Application 1" },
  { src: "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&h=1200&w=1200&auto=format&fit=crop", alt: "Application 2" },
  { src: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&h=1200&w=1200&auto=format&fit=crop", alt: "Application 3" },
  { src: "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&h=1200&w=1200&auto=format&fit=crop", alt: "Application 4" },
  { src: "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&h=1200&w=1200&auto=format&fit=crop", alt: "Application 5" },
  { src: "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&h=1200&w=1200&auto=format&fit=crop", alt: "Application 6" },
];

export function ApplicationAreasGallery({ images = defaultImages }: { images?: GalleryImage[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setLightboxOpen(true);
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, next, prev]);

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3" style={{ color: "black" }}>Application Areas</h2>
          <p className="text-base" style={{ color: "#565656" }}>Explore various use-cases and environments our decorative products elevate.</p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ loop: true, startIndex: 0 }}
          className="relative"
        >
          <CarouselContent className="ml-0 mr-0">
            {images.map((img, i) => (
              <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/3 px-2">
                <button onClick={() => openAt(i)} className="group relative aspect-[3/4] w-full overflow-hidden border border-gray-200">
                  <img src={img.src} alt={img.alt ?? `gallery-${i}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <span className="sr-only">Open image {i + 1}</span>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" role="dialog" aria-modal="true" onClick={() => setLightboxOpen(false)}>
          <button aria-label="Close" className="absolute top-4 right-4 text-white/80 hover:text-white" onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}>✕</button>

          {/* Prev */}
          <button
            aria-label="Previous"
            className="absolute left-4 md:left-8 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white transition"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 md:h-6 md:w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image with smooth fade/scale */}
          <img
            key={index}
            src={images[index].src}
            alt={images[index].alt ?? `current-${index}`}
            className="max-h-[90vh] max-w-[90vw] object-contain animate-[fadeInScale_300ms_ease]"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            aria-label="Next"
            className="absolute right-4 md:right-8 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white transition"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 md:h-6 md:w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      <style>{`@keyframes fadeInScale{0%{opacity:.2;transform:scale(.98)}100%{opacity:1;transform:scale(1)}}`}</style>
    </section>
  );
}
