"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { galleryImages, treatments } from "@/lib/site";
import { AnimateIn } from "@/components/motion/AnimateIn";

const tabs = treatments.slice(0, 4);

const tabContent: Record<string, { points: string[]; image: string }> = {
  piles: {
    points: [
      "Laser & stapler for all grades",
      "15-min daycare procedure",
      "Video proctoscopy diagnosis",
      "Grade I–IV treatment options",
    ],
    image: "/treatments/piles.jpg",
  },
  fissure: {
    points: [
      "Laser LIS for chronic fissure",
      "Fast healing, minimal pain",
      "No risk of incontinence",
      "Medical care for acute cases",
    ],
    image: "/treatments/fissure.jpg",
  },
  fistula: {
    points: [
      "DLAFT laser fistulotomy",
      "DLAFT for complex cases",
      "Very low recurrence rate",
      "Preserves sphincter function",
    ],
    image: "/treatments/fistula.jpg",
  },
  "laser-piles-surgery": {
    points: [
      "45-minute daycare procedure",
      "No stitches, minimal bleeding",
      "Back to work in 2–3 days",
      "Diode laser technology",
    ],
    image: galleryImages[0].src,
  },
};

export function TreatmentShowcase() {
  const [active, setActive] = useState(tabs[0].slug);
  const current = tabs.find((t) => t.slug === active) ?? tabs[0];
  const content = tabContent[active] ?? tabContent.piles;

  return (
    <section className="bg-surface-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn direction="up" className="mb-8 text-center">
          <p className="section-eyebrow mb-3">Conditions We Treat</p>
          <div className="gold-rule mb-5" />
          <h2 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            When It Comes to Your Care — We Treat It All
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Advanced laser treatments for anorectal conditions. Select a condition to explore.
          </p>
        </AnimateIn>

        {/* Tab bar */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.slug}
              type="button"
              onClick={() => setActive(tab.slug)}
              className={`relative rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === tab.slug
                  ? "text-white shadow-md"
                  : "border border-surface-300 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-800"
              }`}
              style={active === tab.slug ? { background: "linear-gradient(135deg, #0a1745, #1e3897)" } : {}}
            >
              {active === tab.slug && (
                <span
                  className="absolute -bottom-1 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full"
                  style={{ background: "linear-gradient(90deg, #c9973e, #e4b02a)" }}
                />
              )}
              {tab.shortTitle}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid items-center gap-10 overflow-hidden rounded-xl border border-surface-200 bg-white shadow-card lg:grid-cols-2">
          {/* Left panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="p-8 lg:p-10"
            >
              <span
                className="inline-block rounded-sm border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                style={{ borderColor: "rgba(201,151,62,0.4)", color: "#c9973e", background: "rgba(201,151,62,0.06)" }}
              >
                {current.badge}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-brand-900 sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{current.description}</p>
              <ul className="mt-6 space-y-3">
                {content.points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent-600" />
                    {point}
                  </motion.li>
                ))}
              </ul>
              <Link
                href={`/treatments/${current.slug}`}
                className="mt-8 inline-flex items-center gap-2 rounded-md border border-brand-200 px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:border-brand-400 hover:bg-surface-50"
              >
                Learn more about {current.shortTitle}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Right image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative aspect-[4/3] overflow-hidden lg:rounded-r-xl"
            >
              <Image
                src={content.image}
                alt={current.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(10,23,69,0.3) 0%, transparent 60%)" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
