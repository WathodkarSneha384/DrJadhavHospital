"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Star, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { AnimateIn } from "@/components/motion/AnimateIn";

export function DoctorPreview() {
  return (
    <section className="bg-surface-50 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn direction="up" className="mb-14 text-center">
          <p className="section-eyebrow mb-3">Expert Care</p>
          <div className="gold-rule mb-5" />
          <h2 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Meet Your Specialist
          </h2>
        </AnimateIn>

        <div
          className="mx-auto grid max-w-5xl items-stretch overflow-hidden rounded-xl lg:grid-cols-[300px_1fr]"
          style={{ border: "1px solid rgba(13,31,74,0.08)", boxShadow: "0 12px 48px -8px rgba(13,31,74,0.14)" }}
        >
          {/* Image column */}
          <AnimateIn direction="left" className="relative">
            <div className="relative min-h-[320px] overflow-hidden lg:h-full" style={{ background: "#f0f2f8" }}>
              <Image
                src={siteConfig.doctor.image}
                alt={`${siteConfig.doctor.name} — Piles specialist`}
                fill
                className="object-contain"
                sizes="300px"
              />
              {/* Navy overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(6,14,46,0.6) 0%, transparent 60%)" }}
              />
              {/* Available badge */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-md py-2.5 text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #c9973e, #b8860b)" }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Clock className="h-4 w-4" />
                Available Today
              </motion.div>
            </div>
          </AnimateIn>

          {/* Info column */}
          <AnimateIn direction="right" delay={0.15} className="bg-white p-8 lg:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-3xl font-bold text-brand-900">
                  {siteConfig.doctor.name}
                </h3>
                <p className="mt-1 text-base font-semibold" style={{ color: "#c9973e" }}>
                  {siteConfig.doctor.title}
                </p>
                <p className="text-sm text-slate-500">{siteConfig.doctor.role}</p>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-surface-200 bg-surface-50 px-4 py-2">
                <Star className="h-4 w-4 fill-current" style={{ color: "#e4b02a" }} />
                <span className="font-bold text-brand-900">{siteConfig.rating.value}</span>
                <span className="text-xs text-slate-400">({siteConfig.stats.googleReviews} reviews)</span>
              </div>
            </div>

            <p className="mt-5 leading-relaxed text-slate-600">{siteConfig.doctor.bio}</p>

            {/* Expertise pills */}
            <div className="mt-5 flex flex-wrap gap-2">
              {siteConfig.doctor.expertise.map((e) => (
                <span
                  key={e}
                  className="rounded-sm border px-3 py-1 text-xs font-medium"
                  style={{ borderColor: "rgba(13,31,74,0.12)", color: "#0a1745", background: "#f0f2f8" }}
                >
                  {e}
                </span>
              ))}
            </div>

            {/* Credentials bar */}
            <div
              className="mt-6 flex flex-wrap items-center gap-4 rounded-lg px-5 py-4"
              style={{ background: "linear-gradient(135deg, #f8f9fc, #f0f2f8)", border: "1px solid rgba(13,31,74,0.06)" }}
            >
              <Award className="h-5 w-5 shrink-0" style={{ color: "#c9973e" }} />
              <span className="text-sm font-semibold text-brand-900">
                10+ Years · NABH Accredited Centre · {siteConfig.stats.patients} Patients
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/doctors"
                className="rounded-md border-2 border-brand-200 px-6 py-2.5 text-sm font-semibold text-brand-800 transition hover:border-brand-400 hover:bg-surface-50"
              >
                Full Profile
              </Link>
              <Link
                href="/contact#appointment"
                className="rounded-md px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #c9973e, #b8860b)" }}
              >
                Consult Now
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
