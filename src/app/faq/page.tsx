import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { siteConfig, faqs } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | Piles Treatment Questions | Dr. Jadhav Wakad Pune",
  description:
    "Answers about piles surgery cost, laser pain, OPD timings, NABH accreditation, insurance & areas served in Pune.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "FAQ", url: `${siteConfig.url}/faq` },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-2xl text-brand-100">
            Clear answers about piles, fissure, fistula treatment in Pune — for patients
            and search engines.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-4 px-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="font-display text-lg font-bold text-slate-900">
                {faq.question}
              </h2>
              <p className="mt-3 leading-relaxed text-slate-700">{faq.answer}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-slate-600">
          Still have questions?{" "}
          <Link href="/contact" className="font-semibold text-brand-700 hover:underline">
            Contact us
          </Link>{" "}
          or read in{" "}
          <Link href="/mr" className="font-semibold text-brand-700 hover:underline">
            Marathi (मराठी)
          </Link>
        </p>
      </section>

      <CTABanner />
    </>
  );
}
