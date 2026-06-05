import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { buildMetadata, breadcrumbJsonLd, medicalWebPageJsonLd } from "@/lib/seo";
import { siteConfig, treatments } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import { CTABanner } from "@/components/home/CTABanner";
import { FAQ } from "@/components/home/FAQ";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) return {};
  return buildMetadata({
    title: treatment.metaTitle,
    description: treatment.description,
    path: `/treatments/${slug}`,
    keywords: [
      treatment.shortTitle.toLowerCase(),
      `best ${treatment.shortTitle.toLowerCase()} treatment pune`,
      `${treatment.shortTitle.toLowerCase()} specialist wakad`,
      `laser ${treatment.shortTitle.toLowerCase()} surgery pune`,
    ],
  });
}

const treatmentContent: Record<string, { overview: string; symptoms: string[]; approach: string[] }> = {
  piles: {
    overview: "Piles (hemorrhoids) are swollen veins in the anal canal causing bleeding, pain, itching, or prolapse. At Dr. Jadhav Laser Centre, Wakad, we offer accurate grading via video proctoscopy and recommend laser hemorrhoidectomy or non-surgical options based on severity.",
    symptoms: ["Bright red bleeding during bowel movements", "Pain or discomfort while sitting", "Itching or irritation around the anus", "Lump or prolapse near the anal opening"],
    approach: ["Clinical examination & video proctoscopy", "Grade I–II: medical or non-surgical options", "Grade III–IV: painless laser hemorrhoidectomy", "15-minute daycare discharge with 24/7 follow-up support"],
  },
  fissure: {
    overview: "An anal fissure is a tear in the lining of the anal canal causing sharp pain and bleeding. Dr. Satish Jadhav provides laser sphincterotomy and medical management for acute and chronic fissures in Pune.",
    symptoms: ["Severe pain during and after passing stool", "Small amount of bright red blood", "Spasm of the anal sphincter", "Chronic fissure lasting more than 6 weeks"],
    approach: ["Dietary & lifestyle counseling", "Topical medications for early fissures", "Laser lateral internal sphincterotomy for chronic cases", "Minimal downtime and fast pain relief"],
  },
  fistula: {
    overview: "An anal fistula is an abnormal tunnel between the anal canal and skin, often after an abscess. Our Wakad centre specializes in laser fistula surgery with focus on preserving sphincter function and reducing recurrence.",
    symptoms: ["Persistent discharge or pus near the anus", "Recurrent swelling and pain", "Irritation and soiling of undergarments", "History of perianal abscess"],
    approach: ["MRI or clinical mapping when indicated", "Laser fistula treatment (LIFT / FiLaC techniques)", "Cashless insurance processing", "Structured post-op wound care until healing"],
  },
  "laser-piles-surgery": {
    overview: "Laser piles surgery uses focused laser energy to shrink or remove hemorrhoidal tissue with minimal bleeding and faster recovery compared to conventional open surgery — ideal for patients in Pune seeking painless treatment.",
    symptoms: ["Suitable for Grade II–IV hemorrhoids", "Patients wanting minimal hospital stay", "Those who failed conservative treatment", "Recurrent piles after prior treatment"],
    approach: ["Pre-operative assessment & anesthesia planning", "Laser procedure in modular operation theater", "Day-care discharge in most cases", "Medication and dietary guidance for recovery"],
  },
  "non-surgical": {
    overview: "Not every patient requires surgery. We offer injection sclerotherapy, rubber band ligation, and comprehensive medical management for early-stage piles and fissures at our Wakad clinic.",
    symptoms: ["Early-stage piles with mild symptoms", "Patients unfit for surgery", "Preference for conservative trial first", "Intermittent bleeding without prolapse"],
    approach: ["Thorough diagnosis to confirm eligibility", "Injection therapy or band ligation", "Fiber-rich diet and hydration counseling", "Regular follow-up to monitor progress"],
  },
  "pilonidal-sinus": {
    overview: "A pilonidal sinus is a small cyst or abscess near the tailbone containing hair and skin debris. Dr. Jadhav offers advanced laser treatment for pilonidal sinus — minimal scarring, no open wound, and faster recovery than conventional surgery at Wakad, Pune.",
    symptoms: ["Pain or swelling near the tailbone", "Discharge of pus or blood from a dimple near the tailbone", "Hair protruding from the lesion", "Recurrent pilonidal abscess after conventional treatment"],
    approach: ["Clinical assessment and ultrasound if required", "Laser pilonidal sinus treatment under local/spinal anesthesia", "No open wound — minimal dressing required", "Recovery in 1–2 weeks with post-op support"],
  },
};

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = treatments.find((t) => t.slug === slug);
  if (!treatment) notFound();

  const content = treatmentContent[slug];
  const pageUrl = `${siteConfig.url}/treatments/${slug}`;

  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Home", url: siteConfig.url },
          { name: "Treatments", url: `${siteConfig.url}/treatments` },
          { name: treatment.shortTitle, url: pageUrl },
        ]),
        medicalWebPageJsonLd({ name: treatment.title, description: treatment.description, url: pageUrl }),
      ]} />

      {/* Hero */}
      <section className="py-12 text-white sm:py-16" style={{ background: "linear-gradient(135deg, #060e2e 0%, #0a1745 50%, #0e1f5e 100%)" }}>
        <div className="mx-auto max-w-7xl px-4">
          <nav className="mb-4 flex items-center gap-1 text-xs text-blue-200/70">
            <Link href="/treatments" className="hover:text-white">Treatments</Link>
            <ChevronRight className="h-3 w-3" />
            <span style={{ color: "#e4b02a" }}>{treatment.shortTitle}</span>
          </nav>
          <span className="mb-3 inline-block rounded-sm border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider" style={{ borderColor: "rgba(201,151,62,0.4)", color: "#e4b02a" }}>
            {treatment.badge}
          </span>
          <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">{treatment.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100/80">{treatment.description}</p>
        </div>
      </section>

      {content && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-3 lg:gap-14">
            {/* Main content */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="font-display text-xl font-bold text-brand-900 sm:text-2xl">Overview</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{content.overview}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-brand-900 sm:text-2xl">Common Symptoms</h2>
                <ul className="mt-3 space-y-2">
                  {content.symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#c9973e" }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-brand-900 sm:text-2xl">Our Treatment Approach</h2>
                <ol className="mt-3 space-y-3">
                  {content.approach.map((a, i) => (
                    <li key={a} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #0a1745, #1e3897)" }}>
                        {i + 1}
                      </span>
                      {a}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="h-fit rounded-xl p-6" style={{ background: "linear-gradient(135deg, #f8f9fc, #f0f2f8)", border: "1px solid rgba(13,31,74,0.08)" }}>
              <h3 className="font-display text-lg font-bold text-brand-900">Book Consultation in Wakad</h3>
              <p className="mt-2 text-sm text-slate-600">Speak with {siteConfig.doctor.name} for a personalised treatment plan.</p>
              <a href={`tel:${siteConfig.phone}`} className="mt-4 flex items-center justify-center rounded-lg py-3 text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #c9973e, #9a6f0a)" }}>
                Book Appointment
              </a>
              <a href={`tel:${siteConfig.phoneAlt}`} className="mt-3 flex items-center justify-center gap-2 rounded-lg border-2 border-brand-200 py-3 text-sm font-semibold text-brand-800 hover:bg-white">
                📞 {siteConfig.phoneAltDisplay}
              </a>
            </aside>
          </div>
        </section>
      )}

      <FAQ />
      <CTABanner />
    </>
  );
}
