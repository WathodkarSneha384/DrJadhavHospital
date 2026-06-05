import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, navLinks, treatments } from "@/lib/site";
import { fullAddress } from "@/lib/seo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "linear-gradient(180deg, #060e2e 0%, #0a1745 100%)" }}>
      {/* Gold top accent */}
      <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, transparent, #c9973e, #e4b02a, #c9973e, transparent)" }} />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div>
          <div className="mb-4 inline-flex shrink-0 items-center justify-center rounded-lg bg-white p-2 ring-1 ring-gold-500/50">
            <Image
              src="/Asset/logo-fixed.png"
              alt="Dr. Jadhav Laser Centre Logo"
              width={72}
              height={88}
              className="h-auto w-[72px] max-w-full object-contain object-center"
              sizes="72px"
            />
          </div>
          <h2 className="font-display text-lg font-bold text-white">{siteConfig.shortName}</h2>
          <p className="mt-2 text-sm leading-relaxed text-blue-200/80">{siteConfig.description}</p>
          <div className="mt-5 flex items-center gap-2">
            <span className="font-display text-xl font-bold" style={{ color: "#e4b02a" }}>
              {siteConfig.rating.value}★
            </span>
            <span className="text-sm text-blue-300">
              · {siteConfig.rating.count}+ Google reviews
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "#e4b02a" }}>
            Quick Links
          </h3>
          <div className="mb-4 h-px w-8" style={{ background: "linear-gradient(90deg, #c9973e, transparent)" }} />
          <ul className="space-y-2.5 text-sm">
            {navLinks
              .filter((l) => !("children" in l))
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200/80 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Treatments */}
        <div>
          <h3 className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "#e4b02a" }}>
            Treatments
          </h3>
          <div className="mb-4 h-px w-8" style={{ background: "linear-gradient(90deg, #c9973e, transparent)" }} />
          <ul className="space-y-2.5 text-sm">
            {treatments.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/treatments/${t.slug}`}
                  className="text-blue-200/80 transition hover:text-white"
                >
                  {t.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "#e4b02a" }}>
            Contact
          </h3>
          <div className="mb-4 h-px w-8" style={{ background: "linear-gradient(90deg, #c9973e, transparent)" }} />
          <ul className="space-y-3 text-sm text-blue-200/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{fullAddress}</span>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-gold-400" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneAlt}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-gold-400" />
                {siteConfig.phoneAltDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-gold-400" />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{siteConfig.hours.opd}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t px-4 py-6" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <p className="mx-auto max-w-7xl text-center text-xs text-blue-300/60">
          Insurance: {siteConfig.insurancePartners.slice(0, 5).join(" · ")} & more
        </p>
        <div className="mx-auto mt-4 flex max-w-7xl flex-col items-center justify-between gap-2 text-center text-xs text-blue-300/50 sm:flex-row sm:text-left">
          <p>
            © {year} {siteConfig.name}. NABH Accredited · All rights reserved.
          </p>
          <p>
            {siteConfig.alternateName} · Mankar Chowk, Wakad
          </p>
        </div>
      </div>
    </footer>
  );
}
