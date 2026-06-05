import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig, treatments } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: `Piles, Fissure & Fistula Treatments in Pune | Dr. Jadhav Wakad`,
  description:
    "Complete ano-rectal treatments in Wakad, Pune — laser piles surgery, fissure care, fistula surgery & non-surgical options by Dr. Satish Jadhav.",
  path: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Treatments", url: `${siteConfig.url}/treatments` },
        ])}
      />

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold">Our Treatments</h1>
          <p className="mt-4 max-w-2xl text-brand-100">
            Advanced laser and surgical solutions for piles, fissure, fistula and
            related conditions — tailored to your diagnosis and lifestyle.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Specialized Proctology Services"
            description="Each treatment page includes detailed information to help you understand options, recovery, and when to consult a specialist in Pune."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {treatments.map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="group flex items-start justify-between rounded-2xl border border-slate-200 p-6 transition hover:border-brand-300 hover:shadow-md"
              >
                <div>
                  <h2 className="font-display text-xl font-bold text-slate-900 group-hover:text-brand-800">
                    {t.title}
                  </h2>
                  <p className="mt-2 text-slate-600">{t.description}</p>
                </div>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-brand-600 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
