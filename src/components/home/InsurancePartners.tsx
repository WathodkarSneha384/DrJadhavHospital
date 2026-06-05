"use client";

import { siteConfig } from "@/lib/site";
import { AnimateIn } from "@/components/motion/AnimateIn";
import { Marquee } from "@/components/ui/Marquee";
import { ShieldCheck } from "lucide-react";

export function InsurancePartners() {
  return (
    <section className="overflow-hidden border-y py-16" style={{ borderColor: "rgba(13,31,74,0.08)", background: "linear-gradient(180deg, #f8f9fc, #ffffff)" }}>
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn direction="up" className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <ShieldCheck className="h-5 w-5" style={{ color: "#c9973e" }} />
            <p className="section-eyebrow">Insurance</p>
          </div>
          <h2 className="font-display text-2xl font-bold text-brand-900 sm:text-3xl">
            Cashless &amp; Reimbursement Partners
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            We accept {siteConfig.insurancePartners.length}+ major health insurance providers
          </p>
        </AnimateIn>
      </div>

      <Marquee speed={35}>
        {siteConfig.insurancePartners.map((partner) => (
          <span
            key={partner}
            className="shrink-0 rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-800 shadow-sm"
            style={{ border: "1px solid rgba(13,31,74,0.1)" }}
          >
            {partner}
          </span>
        ))}
      </Marquee>

      <Marquee speed={40} className="mt-4">
        {[...siteConfig.insurancePartners].reverse().map((partner) => (
          <span
            key={`rev-${partner}`}
            className="shrink-0 rounded-md px-6 py-3 text-sm font-medium text-brand-700"
            style={{ border: "1px solid rgba(201,151,62,0.2)", background: "rgba(201,151,62,0.04)" }}
          >
            {partner}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
