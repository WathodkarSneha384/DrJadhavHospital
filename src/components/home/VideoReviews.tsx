"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Star, ExternalLink, Quote } from "lucide-react";
import { videoReviews, siteConfig, testimonials } from "@/lib/site";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { Carousel } from "@/components/ui/Carousel";

/* Google coloured logo as inline SVG */
function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 272 92" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
      <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
      <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
      <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
      <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
    </svg>
  );
}

export function VideoReviews() {
  const video = videoReviews[0];

  return (
    <section className="bg-surface-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn direction="up" className="mb-14 text-center">
          <p className="section-eyebrow mb-3">Patient Stories</p>
          <div className="gold-rule mb-5" />
          <h2 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Hear From Our Patients
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Real reviews from verified Google patients — {siteConfig.rating.value}★ rated clinic in Wakad, Pune
          </p>
        </AnimateIn>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">

          {/* LEFT — Video thumbnail */}
          <AnimateIn direction="left">
            <a
              href={video.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-xl shadow-card-hover h-full"
              style={{ border: "1px solid rgba(13,31,74,0.08)" }}
            >
              <div className="relative w-full h-full" style={{ minHeight: "360px" }}>
                <Image
                  src={video.posterUrl}
                  alt="Patient video review — Dr. Jadhav Laser Centre"
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                  style={{ background: "linear-gradient(to top, rgba(6,14,46,0.85) 0%, rgba(6,14,46,0.1) 50%, transparent 100%)" }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full text-white shadow-xl ring-4 ring-white/20"
                    style={{ background: "linear-gradient(135deg, #c9973e 0%, #b8860b 100%)" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="ml-1 h-9 w-9 fill-current" />
                  </motion.div>
                </div>

                {/* Opens on Google Maps pill */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-md bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  <ExternalLink className="h-3 w-3" />
                  Opens on Google Maps
                </div>

                {/* Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-sm border border-white/20 bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                      {video.source}
                    </span>
                    <span className="flex items-center gap-1" style={{ color: "#e4b02a" }}>
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <span className="text-xs font-semibold text-white">Verified Review</span>
                    </span>
                  </div>
                  <p className="font-display text-xl font-bold text-white">{video.title}</p>
                  <p className="mt-1 text-sm text-white/70">{video.subtitle}</p>
                </div>
              </div>
            </a>
          </AnimateIn>

          {/* RIGHT — Google badge + testimonials carousel */}
          <AnimateIn direction="right" delay={0.1} className="flex flex-col gap-5">

            {/* Google "Excellent" badge */}
            <div
              className="flex items-center gap-5 rounded-xl bg-white px-6 py-5"
              style={{ border: "1px solid rgba(13,31,74,0.08)", boxShadow: "0 2px 12px -2px rgba(13,31,74,0.08)" }}
            >
              <div className="text-center">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-900">Excellent</p>
                <div className="mt-1 flex gap-0.5">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="h-6 w-6 fill-current" style={{ color: "#FBBC05" }} />
                  ))}
                </div>
                <p className="mt-1.5 text-[11px] text-slate-500">
                  Based on {siteConfig.rating.count} reviews
                </p>
              </div>
              <div className="h-12 w-px bg-surface-200" />
              <div className="flex flex-col items-start gap-1">
                <GoogleLogo className="h-7 w-auto" />
                <p className="text-xs text-slate-400">Verified reviews</p>
              </div>
              <div className="ml-auto text-right">
                <p className="font-display text-3xl font-bold text-brand-900">{siteConfig.rating.value}</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">/ 5.0</p>
              </div>
            </div>

            {/* Testimonials carousel */}
            <div className="flex-1">
              <Carousel autoplayDelay={5500}>
                {testimonials.map((t) => (
                  <div key={t.name} className="px-1 h-full">
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-full flex-col rounded-xl bg-white p-6"
                      style={{
                        border: "1px solid rgba(13,31,74,0.08)",
                        boxShadow: "0 4px 24px -4px rgba(13,31,74,0.08)",
                      }}
                    >
                      {/* Stars */}
                      <div className="mb-4 flex gap-1">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#FBBC05" }} />
                        ))}
                      </div>

                      {/* Quote icon */}
                      <Quote
                        className="mb-3 h-8 w-8"
                        style={{ color: "#c9973e", opacity: 0.25 }}
                      />

                      <p className="flex-1 text-[15px] leading-relaxed text-slate-700">
                        &ldquo;{t.text}&rdquo;
                      </p>

                      <footer className="mt-5 flex items-center gap-3 border-t border-surface-100 pt-4">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-display text-sm font-bold text-white"
                          style={{ background: "linear-gradient(135deg, #0a1745, #1e3897)" }}
                        >
                          {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </div>
                        <div className="min-w-0">
                          <cite className="not-italic block font-display text-[14px] font-bold text-brand-900 truncate">
                            {t.name}
                          </cite>
                          <p className="text-xs text-slate-400">{t.location}</p>
                        </div>
                        <span
                          className="ml-auto shrink-0 rounded-sm border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                          style={{ borderColor: "rgba(13,31,74,0.1)", color: "#4285F4", background: "#f0f2f8" }}
                        >
                          Google
                        </span>
                      </footer>
                    </motion.div>
                  </div>
                ))}
              </Carousel>
            </div>

            {/* View all reviews link */}
            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold transition hover:shadow-md"
              style={{ borderColor: "rgba(13,31,74,0.12)", color: "#0a1745" }}
            >
              View all {siteConfig.stats.googleReviews} reviews on Google →
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
