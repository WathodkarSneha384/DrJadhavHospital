import type { Metadata } from "next";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { buildMetadata, breadcrumbJsonLd, fullAddress } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { AppointmentForm } from "@/components/contact/AppointmentForm";

export const metadata: Metadata = buildMetadata({
  title: `Book Appointment | Dr. Jadhav Piles Laser Centre Wakad Pune`,
  description: `Book a piles treatment appointment in Wakad, Pune. Call ${siteConfig.phoneDisplay}. Address: ${fullAddress}. Mon–Sat 9AM–8PM · Same-day appointments available.`,
  path: "/contact",
  keywords: ["book piles appointment pune", "piles doctor appointment wakad", "dr jadhav contact", "piles clinic wakad address", "piles treatment near me"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: siteConfig.url },
        { name: "Contact", url: `${siteConfig.url}/contact` },
      ])} />

      {/* Hero */}
      <section className="py-12 text-white sm:py-16" style={{ background: "linear-gradient(135deg, #060e2e 0%, #0a1745 50%, #0e1f5e 100%)" }}>
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#e4b02a" }}>Contact Us</p>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Book Your Appointment
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-blue-100/80">
            Visit our Wakad centre or book online. We&apos;re here to help you get relief from piles, fissure &amp; fistula.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:gap-14">
          <AppointmentForm />

          <div className="space-y-5">
            {/* Clinic info card */}
            <div className="rounded-xl bg-white p-6" style={{ border: "1px solid rgba(13,31,74,0.08)", boxShadow: "0 4px 20px -4px rgba(13,31,74,0.08)" }}>
              <h2 className="font-display text-lg font-bold text-brand-900">Clinic Information</h2>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#c9973e" }} />
                  <span className="text-sm text-slate-700">{fullAddress}</span>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phone}`} className="flex gap-3 text-sm font-semibold text-brand-800 hover:text-brand-600">
                    <Phone className="h-5 w-5 shrink-0" style={{ color: "#c9973e" }} />
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.phoneAlt}`} className="flex gap-3 text-sm font-semibold text-brand-800 hover:text-brand-600">
                    <Phone className="h-5 w-5 shrink-0" style={{ color: "#c9973e" }} />
                    {siteConfig.phoneAltDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0" style={{ color: "#c9973e" }} />
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-slate-700 hover:text-brand-800">{siteConfig.email}</a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#c9973e" }} />
                  <div className="text-sm text-slate-700">
                    <p>{siteConfig.hours.opd}</p>
                    <p className="mt-0.5 font-semibold" style={{ color: "#c9973e" }}>{siteConfig.hours.emergency}</p>
                  </div>
                </li>
              </ul>
              <a href="https://www.google.com/maps/place/Sunrise+Piles+Hospital+-+Dr.Jadhav(MD,FPC,CCKS)/@18.5909885,73.7734981,16z" target="_blank" rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-800 transition hover:bg-surface-50">
                <MapPin className="h-4 w-4" /> View on Google Maps
              </a>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl" style={{ border: "1px solid rgba(13,31,74,0.08)" }}>
              <iframe
                title="Dr. Jadhav Piles Laser Centre location on Google Maps"
                src="https://maps.google.com/maps?q=Sunrise+Piles+Hospital+Dr+Jadhav+Wakad+Pune&output=embed"
                className="h-64 w-full sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
