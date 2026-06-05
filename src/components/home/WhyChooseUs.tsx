"use client";

import { CheckCircle2 } from "lucide-react";
import { facilities, whyChooseUs } from "@/lib/site";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/motion/AnimateIn";

export function WhyChooseUs() {
  return (
    <section className="bg-surface-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn direction="up" className="mb-8 text-center">
          <p className="section-eyebrow mb-3">Why Choose Us</p>
          <div className="gold-rule mb-5" />
          <h2 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Your Trusted Laser Proctology Centre
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A legacy of patient-first care, backed by NABH accreditation and India&apos;s most
            advanced laser proctology technology.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group card-medical h-full p-6 transition hover:-translate-y-1">
                <div
                  className="mb-5 h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ background: "linear-gradient(90deg, #c9973e, #e4b02a)" }}
                />
                <h3 className="font-display text-lg font-bold text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateIn direction="up" delay={0.1} className="mt-12">
          <div
            className="overflow-hidden rounded-xl bg-white shadow-card"
            style={{ border: "1px solid rgba(13,31,74,0.08)" }}
          >
            <div
              className="flex flex-wrap items-center gap-3 border-b border-surface-200 px-4 py-4 sm:px-8 sm:py-5"
              style={{ background: "linear-gradient(90deg, #0a1745, #162960)" }}
            >
              <h3 className="font-display text-lg font-bold text-white">Hospital Facilities</h3>
              <span
                className="rounded-sm border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  borderColor: "rgba(201,151,62,0.4)",
                  color: "#e4b02a",
                  background: "rgba(201,151,62,0.1)",
                }}
              >
                NABH Standard
              </span>
            </div>
            <div className="p-4 sm:p-8">
              <ul className="grid gap-4 sm:grid-cols-2">
                {facilities.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
