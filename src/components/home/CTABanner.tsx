"use client";

import Link from "next/link";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { AnimateIn } from "@/components/motion/AnimateIn";

export function CTABanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn direction="up">
          <div
            className="relative overflow-hidden rounded-xl px-8 py-16 text-center text-white shadow-2xl sm:px-14"
            style={{ background: "linear-gradient(135deg, #060e2e 0%, #0a1745 40%, #162960 80%, #0e1f5e 100%)" }}
          >
            {/* Decorative gold lines */}
            <div
              className="absolute left-0 right-0 top-0 h-0.5"
              style={{ background: "linear-gradient(90deg, transparent, #c9973e, #e4b02a, #c9973e, transparent)" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-0.5"
              style={{ background: "linear-gradient(90deg, transparent, #c9973e, transparent)" }}
            />

            {/* Background glow orbs */}
            <motion.div
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(201,151,62,0.2) 0%, transparent 70%)" }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(30,56,151,0.4) 0%, transparent 70%)" }}
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="relative">
              <p
                className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "#e4b02a" }}
              >
                Begin Your Recovery Today
              </p>
              <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                Ready to Live Without{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #e4b02a, #f2da8e)" }}
                >
                  Piles Pain?
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100/85">
                Join {siteConfig.stats.patients} patients who chose expert laser care. No stitches · 15-min procedure · Cashless insurance.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact#appointment"
                  className="inline-flex items-center gap-2 rounded-md px-8 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
                  style={{ background: "linear-gradient(135deg, #c9973e 0%, #b8860b 100%)" }}
                >
                  <Calendar className="h-4.5 w-4.5" />
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 rounded-md border-2 px-8 py-3.5 text-sm font-bold backdrop-blur transition hover:scale-[1.02]"
                  style={{ borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.06)" }}
                >
                  <Phone className="h-4.5 w-4.5" />
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
