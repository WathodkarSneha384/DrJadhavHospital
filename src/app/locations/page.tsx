import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { locations } from "@/lib/locations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata({
  title: "Piles Treatment Locations Near Pune | Dr. Jadhav Wakad",
  description:
    "Laser piles, fissure & fistula treatment serving Wakad, Hinjewadi, Baner, PCMC, Ravet, Aundh and all Pune areas. NABH-accredited centre.",
  path: "/locations",
});

export default function LocationsIndexPage() {
  return (
    <>
      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-display text-4xl font-bold">Areas We Serve</h1>
          <p className="mt-4 max-w-2xl text-brand-100">
            Patients from across Pune and PCMC visit our Wakad centre for painless
            laser proctology. Select your area for local information.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            title="Piles Specialist Near You"
            description="All locations are served from our Mankar Chowk, Wakad hospital — typically 15–20 minutes away."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group rounded-2xl border border-slate-200 p-6 transition hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-600" />
                  <div>
                    <h2 className="font-display text-xl font-bold text-slate-900 group-hover:text-brand-800">
                      Piles Treatment in {loc.name}
                    </h2>
                    {loc.distance && (
                      <p className="text-sm text-slate-500">{loc.distance} from centre</p>
                    )}
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">{loc.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
