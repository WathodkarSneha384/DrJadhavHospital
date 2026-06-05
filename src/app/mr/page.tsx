import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, galleryImages } from "@/lib/site";
import { marathiContent } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

export const metadata: Metadata = buildMetadata({
  title: "बवासीर उपचार पुणे वाकड | डॉ. जाधव लेसर केंद्र",
  description:
    "डॉ. सतीश जाधव — बवासीर, भगंदर, नाढीचे वेदनारहित लेसर उपचार. एनएबीएच प्रमाणित, वाकड, पुणे. कॉल +91 96656 12777",
  path: "/mr",
  keywords: ["बवासीर डॉक्टर पुणे", "बवासीर उपचार वाकड", "लेसर शस्त्रक्रिया पुणे"],
});

export default function MarathiPage() {
  const t = marathiContent;

  return (
    <>
      <section className="bg-brand-900 py-12 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <p className="text-sm font-medium text-brand-200">{t.hero.badge}</p>
          <LanguageSwitcher current="mr" />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-display text-4xl font-bold leading-tight text-slate-900">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg text-slate-700">{t.hero.subtitle}</p>
            <p className="mt-4 text-slate-600">{t.welcome}</p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { v: siteConfig.stats.patients, l: t.stats.patients },
                { v: `${siteConfig.rating.value}★`, l: t.stats.rating },
                { v: siteConfig.stats.successRate, l: t.stats.success },
                { v: siteConfig.stats.experience, l: t.stats.experience },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-brand-50 p-4 text-center">
                  <p className="font-display text-2xl font-bold text-brand-800">{s.v}</p>
                  <p className="text-xs text-slate-600">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact#appointment"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3 font-semibold text-white"
              >
                <Calendar className="h-5 w-5" />
                {t.hero.ctaBook}
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-700 px-6 py-3 font-semibold text-brand-700"
              >
                <Phone className="h-5 w-5" />
                {t.hero.ctaCall}
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={galleryImages[1].src}
              alt="डॉ. जाधव लेसर केंद्र वाकड"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">सुविधा</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {t.facilities.map((f) => (
              <li key={f} className="flex gap-2 text-slate-700">
                <span className="text-accent-600">✓</span> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-2xl font-bold text-slate-900">{t.faqTitle}</h2>
          <div className="mt-6 space-y-4">
            <details className="rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                वाकड, पुण्यातील सर्वोत्तम बवासीर डॉक्टर कोण?
              </summary>
              <p className="mt-3 text-slate-700">
                डॉ. सतीश जाधव (एमडी, एफपीसी, सीसीकेएस) — ५००+ गुगल रिव्ह्यू, ५०००+
                रुग्ण. मानकर चौक, वाकड येथे एनएबीएच प्रमाणित लेसर केंद्र.
              </p>
            </details>
            <details className="rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">
                लेसर बवासीर शस्त्रक्रियेचा खर्च किती?
              </summary>
              <p className="mt-3 text-slate-700">
                खर्च बवासीरच्या प्रकारावर अवलंबून. परामर्शानंतर किंमत सांगितली जाते.
                पीएमजय, स्टार हेल्थसह कॅशलेस विमा उपलब्ध. {siteConfig.phoneDisplay}
              </p>
            </details>
            <details className="rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold">ओपीडी वेळ?</summary>
              <p className="mt-3 text-slate-700">{t.contact.hours}</p>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-display text-2xl font-bold">{t.contact.title}</h2>
          <p className="mt-2 text-brand-100">{t.contact.address}</p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="mt-4 inline-block text-xl font-bold text-white"
          >
            {siteConfig.phoneDisplay}
          </a>
          <p className="mt-6">
            <Link href="/" className="text-brand-200 underline">
              English website
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
