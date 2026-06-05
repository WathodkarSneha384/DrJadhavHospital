"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { recoveryProcess, siteConfig } from "@/lib/site";
import { AnimateIn } from "@/components/motion/AnimateIn";

export function ProcessSteps() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #060e2e 0%, #0a1745 40%, #162960 80%, #0e1f5e 100%)" }} />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <AnimateIn direction="up" className="text-center text-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#e4b02a" }}>
            Simple Process
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Your Journey to Recovery</h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-200/75">
            From first call to a quick, painless recovery
          </p>
        </AnimateIn>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {recoveryProcess.map((step, i) => (
              <AnimateIn key={step.step} direction="up" delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:p-6"
                >
                  {i < recoveryProcess.length - 1 && (
                    <div className="absolute -right-3 top-10 hidden h-0.5 w-6 lg:block" style={{ background: "rgba(201,151,62,0.5)" }} />
                  )}
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg font-display text-xl font-bold text-white shadow-lg" style={{ background: "linear-gradient(135deg, #c9973e, #b8860b)" }}>
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-100/80">{step.text}</p>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
        </div>


        <AnimateIn direction="up" delay={0.3} className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="btn-primary"
          >
            <Phone className="h-5 w-5" />
            Call {siteConfig.phoneDisplay}
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 rounded-md border-2 border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Book Appointment
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
