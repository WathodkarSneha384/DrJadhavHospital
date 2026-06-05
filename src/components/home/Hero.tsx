"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar, CheckCircle2, Star, Shield, Clock, MapPin } from "lucide-react";
import { siteConfig, galleryImages } from "@/lib/site";

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

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[92vh] flex flex-col" style={{ borderBottom: "1px solid rgba(13,31,74,0.1)" }}>
      <div className="flex flex-1 flex-col lg:flex-row">

        {/* ── LEFT: Editorial light panel ── */}
        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-16 sm:px-10 lg:max-w-[58%] lg:py-20 lg:pl-12 xl:pl-20">

          {/* Vertical gold accent bar */}
          <div
            className="absolute left-0 top-0 h-full w-1 hidden lg:block"
            style={{ background: "linear-gradient(180deg, transparent 0%, #c9973e 20%, #e4b02a 50%, #c9973e 80%, transparent 100%)" }}
          />

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3"
          >
            <div className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #c9973e, #e4b02a)" }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#c9973e" }}>
              NABH Accredited · Laser Proctology · Wakad, Pune
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
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
              {/* Gold underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M0 6 Q50 1 100 5 Q150 9 200 4" stroke="#c9973e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-slate-500"
          >
            <span className="font-semibold text-brand-900">{siteConfig.doctor.name}</span> (MD, FPC, CCKS) — India&apos;s advanced diode laser proctology at Mankar Chowk, Wakad.
          </motion.p>

          {/* Highlights list */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 space-y-2.5"
          >
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32 + i * 0.07 }}
                className="flex items-center gap-2.5 text-[14px] text-slate-700"
              >
                <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-accent-600" style={{ color: "#c9973e" }} />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/contact#appointment"
              className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-[14px] font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #c9973e 0%, #9a6f0a 100%)" }}
            >
              <Calendar className="h-4 w-4 shrink-0" />
              Book Appointment
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-200 px-7 py-3.5 text-[14px] font-bold text-brand-800 transition hover:border-brand-400 hover:bg-surface-50"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {siteConfig.phoneDisplay}
            </a>
          </motion.div>

          {/* Location line */}
          <motion.a
            href="https://www.google.com/maps/place/Sunrise+Piles+Hospital+-+Dr.Jadhav(MD,FPC,CCKS)/@18.5909885,73.7734981,16z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9c3f00cfe91:0x6c80139da085d3b4!8m2!3d18.5909885!4d73.7734981!16s%2Fg%2F11vlwjc0tp!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-5 flex items-center gap-1.5 text-[13px] text-slate-400 transition hover:text-slate-600 underline-offset-2 hover:underline"
          >
            <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: "#c9973e" }} />
            {siteConfig.address.short}
          </motion.a>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 grid grid-cols-2 divide-x divide-y divide-surface-200 rounded-xl border border-surface-200 bg-surface-50 overflow-hidden sm:grid-cols-4 sm:divide-y-0"
          >
            {stats.map((s) => (
              <div key={s.label} className="py-4 text-center">
                <p className="font-display text-xl font-bold text-brand-900 sm:text-2xl">{s.value}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Full-height dark image panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex lg:flex-1 lg:flex-col"
          style={{ minHeight: "100%" }}
        >
          {/* Main facility image */}
          <div className="absolute inset-0">
            <Image
              src={galleryImages[0].src}
              alt="State-of-the-art laser surgery facility at Dr. Jadhav Laser Centre, Wakad"
              fill
              className="object-cover"
              sizes="42vw"
              priority
            />
            {/* Navy gradient overlay — fades into the white panel on the left */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, white 0%, rgba(255,255,255,0.08) 18%, transparent 40%), linear-gradient(180deg, rgba(6,14,46,0.15) 0%, rgba(6,14,46,0.55) 100%)",
              }}
            />
          </div>

          {/* Floating credential card — top right */}
          <motion.div
            className="absolute right-6 top-8 rounded-xl bg-white/95 p-4 shadow-xl backdrop-blur-sm"
            style={{ border: "1px solid rgba(201,151,62,0.25)" }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg font-display text-sm font-extrabold text-white shrink-0"
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
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: "#e4b02a" }} />
              ))}
              <span className="ml-1 text-[11px] font-semibold text-slate-600">{siteConfig.rating.value} · {siteConfig.stats.googleReviews} reviews</span>
            </div>
          </motion.div>

          {/* Floating trust pill — bottom left */}
          <motion.div
            className="absolute bottom-10 left-6 flex flex-col gap-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {[
              { icon: Shield, text: "NABH Accredited" },
              { icon: Clock,  text: "15-Min Procedure" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-[12px] font-semibold text-white backdrop-blur-md"
                style={{ background: "rgba(6,14,46,0.65)", border: "1px solid rgba(255,255,255,0.12)" }}
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
