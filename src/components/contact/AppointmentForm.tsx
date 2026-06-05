"use client";

import { Phone, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { BookAppointmentButton } from "@/components/ui/BookAppointmentButton";

export function AppointmentForm() {
  return (
    <div id="appointment" className="flex flex-col gap-4">
      <BookAppointmentButton className="w-full justify-center px-7 py-3.5 text-[14px] shadow-lg" />

      <a
        href={`tel:${siteConfig.phoneAlt}`}
        className="flex items-center gap-4 rounded-xl border p-5 transition hover:shadow-md sm:p-6"
        style={{ borderColor: "rgba(13,31,74,0.12)", background: "#f8f9fc" }}
      >
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
          style={{ background: "rgba(10,23,69,0.07)" }}
        >
          <Phone className="h-6 w-6" style={{ color: "#0a1745" }} />
        </div>
        <div className="flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">Alternate Number</p>
          <p className="mt-0.5 font-display text-xl font-bold text-brand-900">{siteConfig.phoneAltDisplay}</p>
        </div>
        <span className="shrink-0 text-xs font-semibold text-brand-700">Call →</span>
      </a>

      <div
        className="flex items-start gap-3 rounded-xl p-4 sm:p-5"
        style={{ background: "rgba(201,151,62,0.07)", border: "1px solid rgba(201,151,62,0.22)" }}
      >
        <Clock className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#c9973e" }} />
        <div>
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "#9a6f0a" }}>OPD Timings</p>
          <p className="mt-1 text-sm font-medium text-brand-900">{siteConfig.hours.opd}</p>
          <p className="mt-0.5 text-xs font-semibold" style={{ color: "#c9973e" }}>{siteConfig.hours.emergency}</p>
        </div>
      </div>
    </div>
  );
}
