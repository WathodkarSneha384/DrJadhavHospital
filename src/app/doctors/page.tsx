import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { CTABanner } from "@/components/home/CTABanner";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: `Dr. Satish Jadhav MD | Piles Specialist Doctor in Wakad Pune`,
  description: `Meet ${siteConfig.doctor.name}, ${siteConfig.doctor.title} — ${siteConfig.stats.patients} patients, ${siteConfig.stats.successRate} success. VAAFT, laser piles & fistula expert at NABH centre, Wakad.`,
  path: "/doctors",
  keywords: ["dr satish jadhav", "piles specialist doctor pune", "proctologist wakad", "VAAFT fistula"],
});

export default function DoctorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Our Doctors", url: `${siteConfig.url}/doctors` },
        ])}
      />

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold">Our Doctors</h1>
          <p className="mt-4 max-w-2xl text-brand-100">
            Experienced proctology and support team at NABH-accredited Sunrise / Dr.
            Jadhav Laser Centre, Wakad.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <article className="mx-auto grid max-w-4xl gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg lg:grid-cols-[220px_1fr]">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-2xl bg-brand-100">
              <Image
                src={siteConfig.doctor.image}
                alt={`${siteConfig.doctor.name} — Proctologist Wakad Pune`}
                fill
                className="object-cover"
                sizes="220px"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-accent-600">Available</p>
              <h2 className="font-display text-3xl font-bold text-slate-900">
                {siteConfig.doctor.name}
              </h2>
              <p className="text-lg font-medium text-brand-700">{siteConfig.doctor.title}</p>
              <p className="text-slate-600">{siteConfig.doctor.role}</p>
              <p className="mt-1 text-sm text-amber-600">
                {siteConfig.rating.value} / 5 — {siteConfig.stats.googleReviews} Google Reviews
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { v: `${siteConfig.stats.experience} Yrs`, l: "Experience" },
                  { v: siteConfig.stats.patients, l: "Patients" },
                  { v: siteConfig.stats.successRate, l: "Success" },
                  { v: `${siteConfig.rating.value}★`, l: "Rating" },
                ].map((s) => (
                  <div key={s.l} className="rounded-lg bg-brand-50 p-3 text-center">
                    <p className="font-bold text-brand-800">{s.v}</p>
                    <p className="text-xs text-slate-600">{s.l}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 leading-relaxed text-slate-700">{siteConfig.doctor.bio}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {siteConfig.doctor.expertise.map((e) => (
                  <span
                    key={e}
                    className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800"
                  >
                    {e}
                  </span>
                ))}
              </div>

              <Link
                href="/contact#appointment"
                className="mt-8 inline-block rounded-xl bg-accent-600 px-6 py-3 font-semibold text-white hover:bg-accent-500"
              >
                Book Consultation
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading title="Our Support Team" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-lg font-bold text-brand-800">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <h3 className="mt-4 font-display font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm text-brand-700">{member.role}</p>
                <p className="text-sm text-slate-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
