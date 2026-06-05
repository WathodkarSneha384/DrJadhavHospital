"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials, siteConfig } from "@/lib/site";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { Carousel } from "@/components/ui/Carousel";

export function Testimonials() {
  return (
    <section className="bg-white py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn direction="up" className="mb-14 text-center">
          <p className="section-eyebrow mb-3">Patient Stories</p>
          <div className="gold-rule mb-5" />
          <h2
            id="testimonials-heading"
            className="font-display text-3xl font-bold text-brand-900 sm:text-4xl"
          >
            What Our Patients Say
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            {siteConfig.rating.value}/5 from {siteConfig.stats.googleReviews} verified Google reviews
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.15} className="mt-8">
          <Carousel autoplayDelay={6000} className="mx-auto max-w-4xl">
            {testimonials.map((t) => (
              <div key={t.name} className="px-2">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-xl bg-white p-8 md:p-12"
                  style={{
                    border: "1px solid rgba(13,31,74,0.08)",
                    boxShadow: "0 8px 40px -8px rgba(13,31,74,0.12)",
                  }}
                >
                  {/* Gold quote mark */}
                  <Quote
                    className="absolute right-8 top-8 h-14 w-14 rotate-180"
                    style={{ color: "#c9973e", opacity: 0.12 }}
                  />
                  {/* Stars */}
                  <div className="mb-5 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" style={{ color: "#e4b02a" }} />
                    ))}
                  </div>
                  <p className="relative text-lg leading-relaxed text-slate-700 md:text-xl">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <footer className="mt-8 flex items-center gap-4 border-t border-surface-100 pt-6">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg font-display text-base font-bold text-white"
                      style={{ background: "linear-gradient(135deg, #0a1745, #1e3897)" }}
                    >
                      {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <cite className="not-italic font-display text-base font-bold text-brand-900">
                        {t.name}
                      </cite>
                      <p className="text-xs text-slate-400 mt-0.5">{t.location}</p>
                    </div>
                    <span
                      className="ml-auto hidden rounded-sm border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider sm:block"
                      style={{ borderColor: "rgba(13,31,74,0.12)", color: "#0a1745", background: "#f0f2f8" }}
                    >
                      Google Review
                    </span>
                  </footer>
                </motion.div>
              </div>
            ))}
          </Carousel>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.25} className="mt-10 text-center">
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold transition hover:shadow-md"
            style={{ borderColor: "rgba(13,31,74,0.15)", color: "#0a1745" }}
          >
            View all {siteConfig.stats.googleReviews} reviews on Google →
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
