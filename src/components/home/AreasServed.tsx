"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { locations } from "@/lib/locations";

export function AreasServed() {
  return (
    <div
      className="overflow-hidden py-3 w-full"
      style={{ background: "linear-gradient(90deg, #060e2e 0%, #0a1745 50%, #0e1f5e 100%)" }}
    >
      <div className="group relative flex w-full overflow-hidden">
        {/* Moving track — duplicated for seamless loop */}
        <div
          className="marquee-track flex shrink-0 items-center gap-0"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {[...locations, ...locations].map((loc, i) => (
            <Link
              key={`${loc.slug}-${i}`}
              href={`/locations/${loc.slug}`}
              className="flex shrink-0 items-center gap-2 px-5 text-[12px] font-semibold text-blue-100/80 transition hover:text-white"
            >
              <MapPin className="h-3 w-3 shrink-0" style={{ color: "#c9973e" }} />
              {loc.name}
              <span className="mx-1 opacity-30">·</span>
            </Link>
          ))}
        </div>

        {/* Left/right fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#060e2e] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0e1f5e] to-transparent" />
      </div>
    </div>
  );
}
