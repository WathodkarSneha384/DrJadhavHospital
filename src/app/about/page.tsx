import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata, breadcrumbJsonLd, fullAddress } from "@/lib/seo";
import { siteConfig, facilities } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: `Best Piles Hospital Wakad Pune | About Dr. Jadhav Laser Centre`,
  description: `Dr. Jadhav Piles Laser Centre — NABH-accredited advanced laser proctology in Wakad, Pune. Led by ${siteConfig.doctor.name} (${siteConfig.doctor.title}), ${siteConfig.stats.patients} patients treated with ${siteConfig.stats.successRate} success rate.`,
  path: "/about",
  keywords: ["about dr jadhav", "best piles hospital wakad pune", "nabh piles centre pune", "laser proctology wakad"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([
        { name: "Home", url: siteConfig.url },
        { name: "About Us", url: `${siteConfig.url}/about` },
      ])} />

      {/* Hero */}
      <section className="py-12 text-white sm:py-16" style={{ background: "linear-gradient(135deg, #060e2e 0%, #0a1745 50%, #0e1f5e 100%)" }}>
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "#e4b02a" }}>About Us</p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Premier Piles &amp; Fissure Care in Wakad, Pune
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100/80 sm:text-lg">
            Welcome to {siteConfig.name} — your dedicated centre for piles, fissure-in-ano, and fistula-in-ano with advanced laser technology and compassionate patient care.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["NABH Accredited", `${siteConfig.stats.patients} Patients`, `${siteConfig.stats.successRate} Success`, "10+ Years"].map((b) => (
              <span key={b} className="rounded-sm border px-3 py-1 text-xs font-semibold" style={{ borderColor: "rgba(201,151,62,0.4)", color: "#e4b02a" }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-eyebrow mb-2">Who We Are</p>
            <div className="gold-rule mb-4" style={{ marginLeft: 0, background: "linear-gradient(90deg, #c9973e, transparent)" }} />
            <h2 className="font-display text-2xl font-bold text-brand-900 sm:text-3xl">
              Advanced Laser Proctology Since 2013
            </h2>
            <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Led by <strong className="text-brand-900">{siteConfig.doctor.name}</strong> ({siteConfig.doctor.title}), our centre at Sunrise Multispeciality Hospital combines clinical excellence with patient-first values.
              </p>
              <p>
                Dr. Jadhav Piles Fissure Injection &amp; Laser Centre in Wakad, Pune is a super-speciality proctology unit focused on accurate diagnosis and minimally invasive treatment. We serve patients from Wakad, Hinjewadi, Baner, Pimpri Chinchwad, and across Pune.
              </p>
              <p>
                Our approach emphasizes clear communication, evidence-based treatment plans, and complete support from consultation through full recovery — including 24/7 post-operative availability.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#appointment" className="rounded-lg px-6 py-3 text-sm font-bold text-white" style={{ background: "linear-gradient(135deg, #c9973e, #9a6f0a)" }}>
                Book Consultation
              </Link>
              <Link href="/doctors" className="rounded-lg border-2 border-brand-200 px-6 py-3 text-sm font-bold text-brand-800 hover:bg-surface-50">
                Meet Our Doctors
              </Link>
            </div>
          </div>

          <div className="rounded-xl bg-white p-6 sm:p-8" style={{ border: "1px solid rgba(13,31,74,0.08)", boxShadow: "0 4px 24px -4px rgba(13,31,74,0.1)" }}>
            <h2 className="font-display text-xl font-bold text-brand-900">Hospital Facilities</h2>
            <p className="mt-1 text-sm text-slate-500">NABH-accredited infrastructure at Mankar Chowk, Wakad</p>
            <ul className="mt-5 space-y-3">
              {facilities.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#c9973e" }} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-lg p-4 text-sm" style={{ background: "rgba(201,151,62,0.06)", border: "1px solid rgba(201,151,62,0.2)" }}>
              <p className="font-semibold text-brand-900">📍 Address</p>
              <p className="mt-1 text-slate-600">{fullAddress}</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
