"use client";

import Link from "next/link";
import { ArrowUpRight, Activity, HeartPulse, ShieldCheck, Zap, Syringe, Target } from "lucide-react";
import { motion } from "framer-motion";
import { treatments } from "@/lib/site";
import { AnimateIn } from "@/components/motion/AnimateIn";

const icons = {
  activity: Activity,
  "heart-pulse": HeartPulse,
  "shield-check": ShieldCheck,
  zap: Zap,
  syringe: Syringe,
  target: Target,
} as const;

const cardAccents = [
  { from: "#0a1745", to: "#1e3897" },   // navy
  { from: "#162960", to: "#0a1745" },   // deep navy
  { from: "#0e1f5e", to: "#162960" },   // mid navy
  { from: "#0a1745", to: "#1e3897" },   // navy
  { from: "#060e2e", to: "#0e1f5e" },   // darkest
];

export function TreatmentsGrid() {
  return (
    <section
      className="relative overflow-hidden py-12"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f9fc 100%)" }}
      aria-labelledby="treatments-heading"
    >
      {/* Faint decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(10,23,69,1) 1px, transparent 1px), linear-gradient(90deg, rgba(10,23,69,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">

        {/* Header */}
        <AnimateIn direction="up" className="mb-8 text-center">
          <div>
            <p className="section-eyebrow mb-3">Our Specialities</p>
            <div className="gold-rule mb-5 lg:mx-0" />
            <h2
              id="treatments-heading"
              className="font-display font-bold text-brand-950 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Advanced Anorectal Care
            </h2>
            <p className="mt-3 max-w-xl text-slate-500">
              Expert laser proctology — trusted care at par with India&apos;s leading specialty hospitals.
            </p>
          </div>
          <Link
            href="/treatments"
            className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-brand-200 px-6 py-2.5 text-sm font-bold text-brand-800 transition hover:border-brand-400 hover:bg-white"
          >
            All Treatments
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </AnimateIn>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, i) => {
            const Icon = icons[treatment.icon as keyof typeof icons] ?? Activity;
            const accent = cardAccents[i] ?? cardAccents[0];
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.article
                key={treatment.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-white"
                style={{
                  border: "1px solid rgba(13,31,74,0.08)",
                  boxShadow: "0 4px 24px -4px rgba(13,31,74,0.08)",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px -8px rgba(13,31,74,0.18)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,151,62,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px -4px rgba(13,31,74,0.08)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(13,31,74,0.08)";
                }}
              >
                {/* Top navy header band */}
                <div
                  className="relative flex items-center justify-between px-6 py-5 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)` }}
                >
                  {/* Big decorative number */}
                  <span
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-display font-extrabold leading-none select-none"
                    style={{ fontSize: "5rem", color: "rgba(255,255,255,0.06)", letterSpacing: "-0.05em" }}
                  >
                    {num}
                  </span>

                  {/* Icon */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg text-white"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Badge */}
                  <span
                    className="rounded-sm border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ borderColor: "rgba(201,151,62,0.5)", color: "#e4b02a", background: "rgba(201,151,62,0.1)" }}
                  >
                    {treatment.badge}
                  </span>
                </div>

                {/* Gold progress line */}
                <div className="h-0.5 w-full">
                  <div
                    className="h-full transition-all duration-500 group-hover:w-full"
                    style={{ width: "30%", background: "linear-gradient(90deg, #c9973e, #e4b02a)" }}
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-brand-950">
                    {treatment.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">
                    {treatment.description}
                  </p>
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="mt-5 flex items-center gap-1.5 text-[13px] font-bold transition-all duration-300 group-hover:gap-3"
                    style={{ color: "#c9973e" }}
                  >
                    Explore Treatment
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
