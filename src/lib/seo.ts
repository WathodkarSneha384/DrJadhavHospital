import type { Metadata } from "next";
import { siteConfig } from "./site";

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.landmark}, ${siteConfig.address.locality}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.postalCode}`;

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  const defaultKeywords = [
    // Primary intent
    "best piles doctor in pune",
    "piles treatment wakad pune",
    "laser piles surgery pune",
    "painless piles treatment pune",
    "hemorrhoids specialist pune",
    // Secondary conditions
    "fissure treatment pune",
    "fistula treatment pune",
    "pilonidal sinus treatment pune",
    "anal fissure doctor wakad",
    "fistula laser surgery pune",
    // Doctor-branded
    "dr satish jadhav piles",
    "dr jadhav piles laser centre",
    "sunrise piles hospital wakad",
    // Local-intent
    "piles clinic near hinjewadi",
    "piles doctor near baner pune",
    "laser proctology wakad pune",
    "nabh accredited piles hospital pune",
  ];

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: siteConfig.doctor.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
        mr: `${siteConfig.url}/mr`,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    other: {
      "geo.region": "IN-MH",
      "geo.placename": "Wakad, Pune, Maharashtra",
      "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
      ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    },
  };
}

/** MedicalClinic + LocalBusiness combined schema */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${siteConfig.url}/#clinic`,
    name: siteConfig.name,
    alternateName: [siteConfig.shortName, siteConfig.alternateName],
    url: siteConfig.url,
    telephone: [siteConfig.phone, siteConfig.phoneAlt],
    email: siteConfig.email,
    description: siteConfig.description,
    image: `${siteConfig.url}/og-image.jpg`,
    logo: `${siteConfig.url}/Asset/logo-fixed.png`,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Insurance, UPI, Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street}, ${siteConfig.address.landmark}`,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: "https://www.google.com/maps/place/Sunrise+Piles+Hospital+-+Dr.Jadhav(MD,FPC,CCKS)/@18.5909885,73.7734981,16z",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:00",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: siteConfig.areasServed.map((area) => ({
      "@type": "City",
      name: `${area}, Pune`,
    })),
    medicalSpecialty: [
      "https://schema.org/Gastroenterologic",
      "https://schema.org/Surgical",
      "Proctology",
    ],
    availableService: [
      { "@type": "MedicalProcedure", name: "Laser Piles Surgery", procedureType: "https://schema.org/SurgicalProcedure" },
      { "@type": "MedicalProcedure", name: "Laser Hemorrhoidectomy", procedureType: "https://schema.org/SurgicalProcedure" },
      { "@type": "MedicalProcedure", name: "Anal Fissure Treatment (LIS)", procedureType: "https://schema.org/SurgicalProcedure" },
      { "@type": "MedicalProcedure", name: "Laser Fistula Surgery (DLAFT)", procedureType: "https://schema.org/SurgicalProcedure" },
      { "@type": "MedicalProcedure", name: "Video Proctoscopy", procedureType: "https://schema.org/DiagnosticProcedure" },
      { "@type": "MedicalProcedure", name: "Pilonidal Sinus Laser Treatment", procedureType: "https://schema.org/SurgicalProcedure" },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      xPath: ["/html/head/title", "/html/head/meta[@name='description']/@content"],
    },
    sameAs: [
      `https://www.google.com/maps/place/Sunrise+Piles+Hospital+-+Dr.Jadhav`,
      siteConfig.url,
    ].filter(Boolean),
  };
}

/** Physician schema */
export function physicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteConfig.url}/#physician`,
    name: siteConfig.doctor.name,
    honorificPrefix: "Dr.",
    jobTitle: siteConfig.doctor.role,
    description: `${siteConfig.doctor.title} — ${siteConfig.doctor.role} at ${siteConfig.name}, Wakad, Pune. ${siteConfig.stats.experience} years experience, ${siteConfig.stats.patients} patients treated.`,
    url: `${siteConfig.url}/doctors`,
    image: `${siteConfig.url}${siteConfig.doctor.image}`,
    telephone: siteConfig.phone,
    worksFor: { "@id": `${siteConfig.url}/#clinic` },
    medicalSpecialty: "Proctology",
    hasCredential: siteConfig.doctor.title,
    knowsAbout: [
      "Hemorrhoids (Piles) Treatment",
      "Anal Fissure Laser Surgery",
      "Anal Fistula Laser Surgery",
      "Pilonidal Sinus Treatment",
      "Video Proctoscopy",
      "Laser Proctology",
      "DLAFT (Diode Laser Anal Fistula Treatment)",
      "DLAFT (Diode Laser Anal Fistula Treatment)",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
    },
  };
}

/** FAQ schema */
export function faqJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["[data-speakable]", "h1", "h2"],
    },
  };
}

/** Breadcrumb schema */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** MedicalWebPage schema */
export function medicalWebPageJsonLd({ name, description, url }: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    description,
    url,
    about: { "@type": "MedicalCondition", name },
    lastReviewed: new Date().toISOString().split("T")[0],
    reviewedBy: { "@id": `${siteConfig.url}/#physician` },
    publisher: { "@id": `${siteConfig.url}/#clinic` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".overview"],
    },
  };
}

/** HowTo schema for the 4-step procedure process (AEO: voice / featured snippet) */
export function howToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Piles Treatment at Dr. Jadhav Laser Centre, Wakad",
    description: "Step-by-step guide to getting laser piles treatment at our NABH-accredited centre in Wakad, Pune.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Book Consultation",
        text: "Call +91 96656 12777 to book. Same-day appointments available at Mankar Chowk, Wakad.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Expert Diagnosis",
        text: "Dr. Satish Jadhav examines you using video proctoscopy, explains your condition, treatment options, cost, and insurance coverage.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Laser Procedure",
        text: "15-minute daycare laser surgery in our modular operation theater. Virtually painless, zero stitches, minimal blood loss.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Quick Recovery",
        text: "Rest briefly and go home. Return to desk work in 2–3 days with 24/7 post-operative support from Dr. Jadhav's team.",
      },
    ],
    totalTime: "PT15M",
    supply: [{ "@type": "HowToSupply", name: "NABH-Accredited Modular Operation Theater" }],
    tool: [{ "@type": "HowToTool", name: "Diode Laser System" }],
  };
}

/** AggregateRating standalone — for use on any page */
export function aggregateRatingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
    },
  };
}
