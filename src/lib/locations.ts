import { siteConfig } from "./site";

export type LocationSlug =
  | "wakad"
  | "hinjewadi"
  | "baner"
  | "pimple-saudagar"
  | "pimpri-chinchwad"
  | "ravet"
  | "thergaon"
  | "rahatani"
  | "aundh"
  | "balewadi"
  | "moshi";

export const locations: {
  slug: LocationSlug;
  name: string;
  distance?: string;
  description: string;
}[] = [
  {
    slug: "wakad",
    name: "Wakad",
    distance: "0 km — at our centre",
    description:
      "Dr. Jadhav Piles Laser Centre is located at Mankar Chowk, Wakad — your nearest NABH-accredited piles hospital with laser daycare surgery.",
  },
  {
    slug: "hinjewadi",
    name: "Hinjewadi",
    distance: "~4 km",
    description:
      "Patients from Hinjewadi IT Park choose Dr. Satish Jadhav for painless laser piles, fissure & fistula treatment with same-day discharge.",
  },
  {
    slug: "baner",
    name: "Baner",
    distance: "~6 km",
    description:
      "Convenient piles specialist near Baner. Advanced laser proctology, cashless insurance, and 500+ five-star Google reviews.",
  },
  {
    slug: "pimple-saudagar",
    name: "Pimple Saudagar",
    distance: "~5 km",
    description:
      "Trusted piles doctor near Pimple Saudagar. Video proctoscopy, modular OT, and expert laser surgery by Dr. Jadhav.",
  },
  {
    slug: "pimpri-chinchwad",
    name: "Pimpri Chinchwad",
    distance: "~8 km",
    description:
      "Best piles treatment for PCMC patients. Fistula VAAFT, laser hemorrhoidectomy, and complete post-op support.",
  },
  {
    slug: "ravet",
    name: "Ravet",
    distance: "~7 km",
    description:
      "Laser piles hospital serving Ravet and surrounding areas. Book same-day consultation in Wakad.",
  },
  {
    slug: "thergaon",
    name: "Thergaon",
    distance: "~9 km",
    description:
      "Expert ano-rectal care for Thergaon residents. Minimally invasive laser procedures with 95%+ success rate.",
  },
  {
    slug: "rahatani",
    name: "Rahatani",
    distance: "~8 km",
    description:
      "Piles, fissure & fistula specialist near Rahatani. NABH centre with cashless insurance and 24/7 recovery support.",
  },
  {
    slug: "aundh",
    name: "Aundh",
    distance: "~7 km",
    description:
      "Advanced laser proctology for Aundh patients. Dr. Satish Jadhav — 10+ years experience, 5,000+ procedures.",
  },
  {
    slug: "balewadi",
    name: "Balewadi",
    distance: "~5 km",
    description:
      "Painless piles treatment near Balewadi. Daycare laser surgery — 15-min procedure, back to work in 2–3 days.",
  },
  {
    slug: "moshi",
    name: "Moshi",
    distance: "~12 km",
    description:
      "Serving Moshi and north Pune for piles, fissure & fistula. Call for appointment at Wakad laser centre.",
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}

export function locationMeta(location: (typeof locations)[0]) {
  return {
    title: `Piles Treatment in ${location.name} Pune | Dr. Jadhav Laser Centre Wakad`,
    description: `${location.description} Call ${siteConfig.phoneDisplay}. NABH-accredited. Laser surgery, cashless insurance.`,
  };
}
