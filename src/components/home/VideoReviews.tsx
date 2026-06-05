"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Star, ExternalLink, Quote } from "lucide-react";
import { videoReviews, siteConfig, testimonials } from "@/lib/site";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { Carousel } from "@/components/ui/Carousel";

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 272 92" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
      <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
      <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
      <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
      <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
    </svg>
  );
}

const cardStyle = {
  border: "1px solid rgba(13,31,74,0.08)",
  boxShadow: "0 2px 12px -2px rgba(13,31,74,0.08)",
};

export function VideoReviews() {
  const video = videoReviews[0];

  return (
    <section className="overflow-hidden bg-surface-50 py-10 sm:py-16" aria-labelledby="video-reviews-heading">
      <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6">

        <AnimateIn direction="up" className="mb-6 text-center sm:mb-10">
          <p className="section-eyebrow mb-3">Patient Stories</p>
          <div className="gold-rule mb-4" />
          <h2
            id="video-reviews-heading"
            className="font-display text-2xl font-bold text-brand-900 sm:text-3xl lg:text-4xl"
          >
            Hear From Our Patients
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 sm:text-base">
            Real reviews from verified Google patients — {siteConfig.rating.value}★ rated clinic in Wakad, Pune
          </p>
        </AnimateIn>

        <div className="grid min-w-0 gap-5 lg:grid-cols-2 lg:items-start lg:gap-8">

          {/* Video */}
          <AnimateIn direction="up">
            <a
              href={video.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full min-w-0 overflow-hidden rounded-xl"
              style={cardStyle}
            >
              <div className="relative aspect-video w-full overflow-hidden bg-brand-950">
                <Image
                  src={video.posterUrl}
                  alt="Patient video review — Dr. Jadhav Laser Centre"
                  fill
                  className="object-contain object-center transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(6,14,46,0.9) 0%, rgba(6,14,46,0.15) 45%, transparent 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl ring-4 ring-white/20 sm:h-16 sm:w-16"
                    style={{ background: "linear-gradient(135deg, #c9973e 0%, #b8860b 100%)" }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="ml-0.5 h-6 w-6 fill-current sm:h-7 sm:w-7" />
                  </motion.div>
                </div>
                <div className="absolute right-2 top-2 flex items-center gap-1 rounded-md bg-black/55 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm sm:text-[11px]">
                  <ExternalLink className="h-2.5 w-2.5 shrink-0" />
                  <span>Watch on Google</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                  <div className="mb-1.5 flex flex-wrap items-center gap-2">
                    <span className="rounded-sm border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {video.source}
                    </span>
                    <span className="flex items-center gap-1" style={{ color: "#e4b02a" }}>
                      <Star className="h-3 w-3 fill-current" />
                      <span className="text-[10px] font-semibold text-white">Verified</span>
                    </span>
                  </div>
                  <p className="font-display text-sm font-bold text-white sm:text-lg">{video.title}</p>
                </div>
              </div>
            </a>
          </AnimateIn>

          {/* Reviews column */}
          <div className="flex min-w-0 flex-col gap-4">
            <AnimateIn direction="up" delay={0.08}>
              {/* Google rating — stacks on mobile */}
              <div
                className="grid w-full min-w-0 grid-cols-2 gap-3 rounded-xl bg-white p-4 sm:flex sm:items-center sm:gap-5 sm:p-5"
                style={cardStyle}
              >
                <div className="col-span-1 min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.12em] text-brand-900 sm:tracking-[0.15em]">
                    Excellent
                  </p>
                  <div className="mt-1 flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-current sm:h-5 sm:w-5" style={{ color: "#FBBC05" }} />
                    ))}
                  </div>
                  <p className="mt-1 text-[10px] text-slate-500">Based on {siteConfig.rating.count} reviews</p>
                </div>
                <div className="col-span-1 flex min-w-0 flex-col justify-center border-l border-surface-200 pl-3 sm:border-l sm:pl-5">
                  <GoogleLogo className="h-5 w-auto max-w-[72px] sm:h-6" />
                  <p className="mt-0.5 text-[10px] text-slate-400">Verified reviews</p>
                </div>
                <div className="col-span-2 flex items-center justify-between border-t border-surface-100 pt-3 sm:col-span-1 sm:ml-auto sm:block sm:border-0 sm:pt-0 sm:text-right">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 sm:hidden">Rating</span>
                  <div>
                    <p className="font-display text-2xl font-bold leading-none text-brand-900 sm:text-3xl">
                      {siteConfig.rating.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">/ 5.0</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.12}>
              <Carousel autoplayDelay={5500} showArrows={false} loop={false} className="w-full min-w-0">
                {testimonials.map((t) => (
                  <article
                    key={t.name}
                    className="w-full min-w-0 rounded-xl bg-white p-4 sm:p-5"
                    style={cardStyle}
                  >
                    <div className="mb-2 flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: "#FBBC05" }} />
                      ))}
                    </div>
                    <Quote className="mb-2 h-5 w-5" style={{ color: "#c9973e", opacity: 0.35 }} aria-hidden />
                    <p className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <footer className="mt-4 flex items-center gap-2.5 border-t border-surface-100 pt-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md font-display text-xs font-bold text-white"
                        style={{ background: "linear-gradient(135deg, #0a1745, #1e3897)" }}
                      >
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <cite className="not-italic block font-display text-[13px] font-bold text-brand-900">
                          {t.name}
                        </cite>
                        <p className="text-[11px] text-slate-400">{t.location}</p>
                      </div>
                      <span
                        className="shrink-0 rounded-sm border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide"
                        style={{ borderColor: "rgba(13,31,74,0.1)", color: "#4285F4", background: "#f0f2f8" }}
                      >
                        Google
                      </span>
                    </footer>
                  </article>
                ))}
              </Carousel>
            </AnimateIn>

            <a
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md border px-4 py-3 text-center text-sm font-semibold transition hover:bg-white"
              style={{ borderColor: "rgba(13,31,74,0.12)", color: "#0a1745" }}
            >
              View all {siteConfig.stats.googleReviews} reviews on Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
