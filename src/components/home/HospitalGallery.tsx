"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Award } from "lucide-react";
import { galleryImages } from "@/lib/site";
import { AnimateIn } from "@/components/motion/AnimateIn";

const features = [
  "Modular Operation Theater",
  "Diode Laser Technology",
  "Video Proctoscopy",
  "Advanced ICU / Recovery",
  "Computerised Laboratory",
  "Deluxe Patient Rooms",
];

export function HospitalGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const images = [...galleryImages];

  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <section
      className="py-24"
      style={{ background: "linear-gradient(180deg, #f8f9fc 0%, #f0f2f8 100%)" }}
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4">

        {/* ── Header ── */}
        <AnimateIn direction="up" className="mb-12 text-center">
          <p className="section-eyebrow mb-3">Our Facility</p>
          <div className="gold-rule mb-5" />
          <h2
            id="gallery-heading"
            className="font-display font-bold text-brand-950"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            State-of-the-Art Laser Surgery Centre
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Modular operation theater &amp; advanced equipment at Mankar Chowk, Wakad
          </p>
          {/* Feature pills — centered row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {features.map((f) => (
              <span
                key={f}
                className="rounded-md px-3 py-1.5 text-[11px] font-semibold"
                style={{
                  background: "rgba(201,151,62,0.08)",
                  border: "1px solid rgba(201,151,62,0.28)",
                  color: "#9a6f0a",
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </AnimateIn>

        {/* ── Bento grid ──
            Desktop: [Large left, 2 rows tall] + [2×2 right grid]
            Mobile: stacked single column
        */}
        <AnimateIn direction="up" delay={0.1}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">

            {/* Featured — tall left cell, spans 2 rows */}
            <div
              className="group relative cursor-pointer overflow-hidden rounded-xl sm:row-span-1 lg:row-span-2"
              style={{
                minHeight: "300px",
                height: "100%",
                border: "1px solid rgba(13,31,74,0.08)",
              }}
              onClick={() => setLightbox(0)}
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div
                className="absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-80"
                style={{ background: "linear-gradient(to top, rgba(6,14,46,0.85) 0%, transparent 55%)" }}
              />
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span
                  className="mb-2 inline-block rounded-sm border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{ borderColor: "rgba(201,151,62,0.6)", color: "#e4b02a" }}
                >
                  Featured
                </span>
                <p className="text-sm font-semibold leading-snug text-white">{images[0].alt}</p>
              </div>
            </div>

            {/* Right 4 cells — fill 2 columns × 2 rows */}
            {images.slice(1, 5).map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative cursor-pointer overflow-hidden rounded-xl"
                style={{
                  minHeight: "200px",
                  border: "1px solid rgba(13,31,74,0.08)",
                }}
                onClick={() => setLightbox(i + 1)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-75"
                  style={{ background: "linear-gradient(to top, rgba(6,14,46,0.8) 0%, transparent 55%)" }}
                />
                <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md bg-black/40 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>
                <p className="absolute bottom-2 left-3 right-3 line-clamp-1 translate-y-2 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.alt}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimateIn>

        {/* ── NABH strip ── */}
        <AnimateIn direction="up" delay={0.2} className="mt-5">
          <div
            className="flex flex-wrap items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-brand-800"
            style={{ background: "rgba(201,151,62,0.06)", border: "1px solid rgba(201,151,62,0.2)" }}
          >
            <Award className="h-4 w-4 shrink-0" style={{ color: "#c9973e" }} />
            NABH Accredited Centre — highest standards for patient safety, hygiene &amp; quality care
          </div>
        </AnimateIn>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={images[lightbox].src}
                  alt={images[lightbox].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  unoptimized
                />
              </div>
              <div className="bg-black/70 px-5 py-3 text-sm text-white/80 backdrop-blur-sm">
                {images[lightbox].alt}
              </div>
              <button type="button" onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80">
                <X className="h-5 w-5" />
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-black/80">
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                {lightbox + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
