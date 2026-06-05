import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import {
  buildMetadata,
  breadcrumbJsonLd,
  fullAddress,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { locations, getLocation, locationMeta } from "@/lib/locations";
import { JsonLd } from "@/components/JsonLd";
import { CTABanner } from "@/components/home/CTABanner";
import { TreatmentsGrid } from "@/components/home/TreatmentsGrid";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  const meta = locationMeta(location);
  return buildMetadata({
    title: meta.title,
    description: meta.description,
    path: `/locations/${slug}`,
    keywords: [
      `piles doctor ${location.name.toLowerCase()}`,
      `piles treatment ${location.name.toLowerCase()} pune`,
      `laser piles surgery ${location.name.toLowerCase()}`,
      "best piles hospital pune",
    ],
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const pageUrl = `${siteConfig.url}/locations/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Locations", url: `${siteConfig.url}/locations` },
            { name: location.name, url: pageUrl },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: `${siteConfig.shortName} — Serving ${location.name}, Pune`,
            description: location.description,
            url: pageUrl,
            telephone: siteConfig.phone,
            address: {
              "@type": "PostalAddress",
              addressLocality: siteConfig.address.locality,
              addressRegion: siteConfig.address.state,
              postalCode: siteConfig.address.postalCode,
              addressCountry: "IN",
            },
            areaServed: {
              "@type": "City",
              name: `${location.name}, Pune`,
            },
          },
        ]}
      />

      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="mb-4 text-sm text-brand-200">
            <Link href="/locations" className="hover:text-white">
              Locations
            </Link>
            <span className="mx-2">/</span>
            <span>{location.name}</span>
          </nav>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            Piles, Fissure & Fistula Treatment in {location.name}, Pune
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{location.description}</p>
          {location.distance && (
            <p className="mt-2 text-brand-200">
              <MapPin className="mr-1 inline h-4 w-4" />
              {location.distance} · Centre at {siteConfig.address.locality}
            </p>
          )}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6 text-slate-700">
              <h2 className="font-display text-2xl font-bold text-slate-900">
                Why patients from {location.name} choose Dr. Jadhav
              </h2>
              <p>
                Residents of {location.name} and nearby areas trust Dr. Satish Jadhav
                for painless laser treatment of piles (hemorrhoids), anal fissure, and
                fistula-in-ano. Our NABH-accredited centre at Mankar Chowk, Wakad offers
                video proctoscopy, 45-minute daycare surgery, cashless insurance, and
                24/7 post-operative support.
              </p>
              <p>
                With {siteConfig.stats.patients} patients treated and a{" "}
                {siteConfig.stats.successRate} success rate, we are among Pune&apos;s most
                recommended proctology centres — {siteConfig.rating.value}★ rating with{" "}
                {siteConfig.stats.googleReviews} Google reviews.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Laser hemorrhoidectomy — no stitches, same-day discharge</li>
                <li>Laser LIS for chronic anal fissure</li>
                <li>VAAFT / DLAFT laser fistula treatment</li>
                <li>PMJAY, ESI, Star Health & major insurers accepted</li>
              </ul>
            </div>

            <aside className="h-fit space-y-4 rounded-2xl border border-brand-200 bg-brand-50 p-6">
              <h3 className="font-display font-bold text-slate-900">Visit Our Centre</h3>
              <p className="flex gap-2 text-sm text-slate-700">
                <MapPin className="h-4 w-4 shrink-0 text-brand-600" />
                {fullAddress}
              </p>
              <p className="flex gap-2 text-sm text-slate-700">
                <Clock className="h-4 w-4 shrink-0 text-brand-600" />
                {siteConfig.hours.opd}
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 font-semibold text-brand-700"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact#appointment"
                className="block rounded-xl bg-accent-600 py-3 text-center font-semibold text-white hover:bg-accent-500"
              >
                Book Appointment
              </Link>
              <Link
                href="/locations"
                className="block text-center text-sm text-brand-700 hover:underline"
              >
                View all locations
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <TreatmentsGrid />
      <CTABanner />
    </>
  );
}
