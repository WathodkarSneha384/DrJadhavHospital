"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Clock, MapPin, Award, Calendar } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">

      {/* ══ ROW 1: Brand bar ══ */}
      <div
        className={cn(
          "border-b bg-white transition-all duration-300",
          scrolled ? "border-surface-200/60 bg-white/95 backdrop-blur-xl" : "border-surface-100"
        )}
        style={{ boxShadow: scrolled ? "0 1px 0 rgba(13,31,74,0.06)" : "none" }}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 md:px-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setMobileOpen(false)}>
            <div
              className="flex h-11 w-11 items-center justify-center rounded-lg font-display text-sm font-extrabold text-white shrink-0"
              style={{
                background: "linear-gradient(135deg, #0a1745 0%, #1e3897 100%)",
                boxShadow: "0 0 0 2px rgba(201,151,62,0.5), 0 4px 12px rgba(10,23,69,0.3)",
              }}
            >
              DJ
            </div>
            <div className="leading-tight">
              <p className="font-display text-[15px] font-bold text-brand-900 whitespace-nowrap">
                Dr. Jadhav Laser Centre
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] whitespace-nowrap" style={{ color: "#c9973e" }}>
                Advanced Proctology · Wakad, Pune
              </p>
            </div>
          </Link>

          {/* Center — contact info (hidden on small) */}
          <div className="hidden items-center gap-6 lg:flex">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 group">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{ background: "rgba(201,151,62,0.1)", border: "1px solid rgba(201,151,62,0.25)" }}
              >
                <Phone className="h-4 w-4" style={{ color: "#c9973e" }} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Call Us</p>
                <p className="text-[13px] font-bold text-brand-900 group-hover:text-brand-700 transition">{siteConfig.phoneDisplay}</p>
              </div>
            </a>
            <div className="h-8 w-px bg-surface-300" />
            <div className="flex items-center gap-2">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{ background: "rgba(10,23,69,0.06)", border: "1px solid rgba(13,31,74,0.12)" }}
              >
                <Clock className="h-4 w-4 text-brand-700" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">OPD Hours</p>
                <p className="text-[12px] font-semibold text-brand-900">Mon–Sat 9AM–8PM</p>
              </div>
            </div>
          </div>

          {/* Right — CTA + mobile toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <LanguageSwitcher />
            <Link
              href="/contact#appointment"
              className="hidden items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-bold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg md:flex whitespace-nowrap"
              style={{ background: "linear-gradient(135deg, #c9973e 0%, #9a6f0a 100%)" }}
            >
              <Calendar className="h-4 w-4 shrink-0" />
              Book Appointment
            </Link>
            <button
              type="button"
              className="rounded-lg p-2.5 text-slate-600 transition hover:bg-surface-100 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ══ ROW 2: Navigation strip ══ */}
      <div
        className="hidden lg:block"
        style={{ background: "linear-gradient(90deg, #060e2e 0%, #0a1745 50%, #0e1f5e 100%)" }}
      >
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 md:px-6">

          {/* Nav links */}
          <nav className="flex items-center gap-1 h-full" aria-label="Main navigation">
            {navLinks.map((link) =>
              "children" in link ? (
                <div key={link.href} className="group relative h-full flex items-center">
                  <button
                    type="button"
                    className="flex h-full items-center gap-1 px-3.5 text-[13px] font-medium text-blue-100 transition hover:text-white whitespace-nowrap"
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  {/* Active underline */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100"
                    style={{ background: "linear-gradient(90deg, #c9973e, #e4b02a)" }}
                  />
                  {/* Dropdown */}
                  <div className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-2 rounded-lg border border-surface-200 bg-white py-1.5 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="border-b border-surface-100 px-4 py-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: "#c9973e" }}>
                      Our Treatments
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-slate-700 transition hover:bg-surface-50 hover:text-brand-800"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: "#c9973e" }} />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative flex h-full items-center px-3.5 text-[13px] font-medium text-blue-100 transition hover:text-white whitespace-nowrap"
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100"
                    style={{ background: "linear-gradient(90deg, #c9973e, #e4b02a)" }}
                  />
                </Link>
              )
            )}
          </nav>

          {/* NABH badge — right of nav strip */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-sm border px-3 py-1 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap"
              style={{ borderColor: "rgba(201,151,62,0.4)", color: "#e4b02a", background: "rgba(201,151,62,0.07)" }}
            >
              <Award className="h-3 w-3" />
              NABH Accredited
            </span>
            <a
              href="https://www.google.com/maps/place/Sunrise+Piles+Hospital+-+Dr.Jadhav(MD,FPC,CCKS)/@18.5909885,73.7734981,16z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9c3f00cfe91:0x6c80139da085d3b4!8m2!3d18.5909885!4d73.7734981!16s%2Fg%2F11vlwjc0tp!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] font-semibold text-blue-200/70 whitespace-nowrap transition hover:text-white"
            >
              <MapPin className="h-3 w-3 shrink-0" style={{ color: "#c9973e" }} />
              Mankar Chowk, Wakad, Pune – 411057
            </a>
          </div>
        </div>
      </div>

      {/* ══ Mobile drawer ══ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-surface-200 bg-white lg:hidden"
          >
            {/* Quick contact strip */}
            <div className="flex items-center gap-4 border-b border-surface-100 px-4 py-3">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 text-sm font-semibold text-brand-800">
                <Phone className="h-3.5 w-3.5" style={{ color: "#c9973e" }} />
                {siteConfig.phoneDisplay}
              </a>
              <span className="ml-auto text-xs text-slate-400">{siteConfig.hours.opdShort}</span>
            </div>

            <nav className="mx-auto max-w-7xl divide-y divide-surface-100 px-4 py-1" aria-label="Mobile navigation">
              {navLinks.map((link) =>
                "children" in link ? (
                  <div key={link.href}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3.5 text-sm font-medium text-slate-800"
                      onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                    >
                      {link.label}
                      <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", treatmentsOpen && "rotate-180")} />
                    </button>
                    {treatmentsOpen && (
                      <div className="mb-3 ml-3 space-y-0.5 border-l-2 pl-3" style={{ borderColor: "rgba(201,151,62,0.4)" }}>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-slate-600 hover:text-brand-800"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-3.5 text-sm font-medium text-slate-800 hover:text-brand-800"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="px-4 pb-4 pt-2">
              <Link
                href="/contact#appointment"
                className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #c9973e 0%, #9a6f0a 100%)" }}
                onClick={() => setMobileOpen(false)}
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
