"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, CheckCircle2, Star, Shield, Clock, MapPin } from "lucide-react";
import { siteConfig, galleryImages } from "@/lib/site";
import { BookAppointmentButton } from "@/components/ui/BookAppointmentButton";
import { EASE_OUT } from "@/components/motion/presets";

const highlights = [
  "Painless laser treatment — zero stitches",
  "Back to work in 2–3 days",
  "Cashless Insurance & Reimbursement accepted",
  "15-minute daycare procedure",
];

const stats = [
  { value: siteConfig.stats.patients, label: "Patients Treated" },
  { value: siteConfig.rating.value + "★", label: "Google Rating" },
  { value: siteConfig.stats.successRate, label: "Success Rate" },
  { value: siteConfig.stats.experience + " Yrs", label: "Experience" },
];

const textStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

const textItemReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export function Hero() {
  const reduced = useReducedMotion() ?? false;
  const item = reduced ? textItemReduced : textItem;

  return (
    <section
      className="relative flex min-h-[92vh] w-full flex-col overflow-hidden bg-white"
      style={{ borderBottom: "1px solid rgba(13,31,74,0.1)" }}
    >
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* LEFT */}
        <div className="relative z-10 flex flex-1 flex-col justify-center px-4 py-10 sm:px-8 sm:py-14 lg:max-w-[58%] lg:py-20 lg:pl-12 xl:pl-20">
          <div
            className="absolute left-0 top-0 hidden h-full w-1 lg:block"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, #c9973e 20%, #e4b02a 50%, #c9973e 80%, transparent 100%)",
            }}
          />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={textStagger}
            className="will-change-auto"
          >
            <motion.div variants={item} className="mb-4 flex items-center gap-2 sm:gap-3">
              <div
                className="h-px w-10 shrink-0"
                style={{ background: "linear-gradient(90deg, #c9973e, #e4b02a)" }}
              />
              <span
                className="text-[9px] font-bold uppercase tracking-[0.12em] sm:text-[11px] sm:tracking-[0.2em]"
                style={{ color: "#c9973e" }}
              >
                NABH Accredited · Laser Proctology · Wakad, Pune
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display font-bold leading-[1.08] tracking-tight text-brand-950"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.75rem)" }}
            >
              Expert Care for
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #0a1745 30%, #1e3897 100%)" }}
              >
                Piles, Fissure
              </span>
              <br />
              <span className="relative inline-block">
                &amp; Fistula
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M0 6 Q50 1 100 5 Q150 9 200 4"
                    stroke="#c9973e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-[15px] leading-relaxed text-slate-500"
            >
              <span className="font-semibold text-brand-900">{siteConfig.doctor.name}</span> (MD,
              FPC, CCKS) — India&apos;s advanced diode laser proctology at Mankar Chowk, Wakad.
            </motion.p>

            <motion.ul variants={item} className="mt-6 space-y-2.5">
              {highlights.map((itemText) => (
                <li key={itemText} className="flex items-center gap-2.5 text-[14px] text-slate-700">
                  <CheckCircle2
                    className="h-4.5 w-4.5 shrink-0"
                    style={{ color: "#c9973e" }}
                  />
                  {itemText}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <BookAppointmentButton className="px-7 py-3.5 text-[14px] shadow-lg" />
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-200 px-7 py-3.5 text-[14px] font-bold text-brand-800 transition hover:border-brand-400 hover:bg-surface-50"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {siteConfig.phoneDisplay}
              </a>
            </motion.div>

            <motion.a
              variants={item}
              href="https://www.google.com/maps/place/Sunrise+Piles+Hospital+-+Dr.Jadhav(MD,FPC,CCKS)/@18.5909885,73.7734981,16z"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-1.5 text-[13px] text-slate-400 transition hover:text-slate-600 hover:underline"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: "#c9973e" }} />
              {siteConfig.address.short}
            </motion.a>

            <motion.div
              variants={item}
              className="mt-10 grid grid-cols-2 divide-x divide-y divide-surface-200 overflow-hidden rounded-xl border border-surface-200 bg-surface-50 sm:grid-cols-4 sm:divide-y-0"
            >
              {stats.map((s) => (
                <div key={s.label} className="py-4 text-center">
                  <p className="font-display text-xl font-bold text-brand-900 sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT — image panel */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
          className="relative hidden lg:flex lg:flex-1 lg:flex-col"
          style={{ minHeight: "100%" }}
        >
          <div className="absolute inset-0">
            <Image
              src={galleryImages[0].src}
              alt="State-of-the-art laser surgery facility at Dr. Jadhav Laser Centre, Wakad"
              fill
              className="object-cover"
              sizes="42vw"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, white 0%, rgba(255,255,255,0.08) 18%, transparent 40%), linear-gradient(180deg, rgba(6,14,46,0.15) 0%, rgba(6,14,46,0.55) 100%)",
              }}
            />
          </div>

          <motion.div
            className="absolute right-6 top-8 rounded-xl bg-white/95 p-4 shadow-xl backdrop-blur-sm"
            style={{ border: "1px solid rgba(201,151,62,0.25)" }}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.45, ease: EASE_OUT }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-display text-sm font-extrabold text-white"
                style={{ background: "linear-gradient(135deg, #0a1745, #1e3897)" }}
              >
                DJ
              </div>
              <div>
                <p className="text-[13px] font-bold text-brand-900">{siteConfig.doctor.name}</p>
                <p className="text-[11px] text-slate-500">{siteConfig.doctor.title}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 border-t border-surface-100 pt-2.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: "#e4b02a" }} />
              ))}
              <span className="ml-1 text-[11px] font-semibold text-slate-600">
                {siteConfig.rating.value} · {siteConfig.stats.googleReviews} reviews
              </span>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-6 flex flex-col gap-2"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.45, ease: EASE_OUT }}
          >
            {[
              { icon: Shield, text: "NABH Accredited" },
              { icon: Clock, text: "15-Min Procedure" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-[12px] font-semibold text-white backdrop-blur-md"
                style={{
                  background: "rgba(6,14,46,0.65)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: "#e4b02a" }} />
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
