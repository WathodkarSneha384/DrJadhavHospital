export const siteConfig = {
  name: "Dr. Jadhav Piles Fissure Injection & Laser Centre",
  alternateName: "Sunrise Piles Hospital Wakad",
  shortName: "Dr. Jadhav Laser Centre",
  tagline: "NABH-Accredited Laser Proctology · Piles, Fissure & Fistula · Wakad, Pune",
  description:
    "Dr. Satish Jadhav (MD, FPC, CCKS) — 10+ years experience, 5,000+ patients treated. Painless laser daycare surgery, video proctoscopy, cashless insurance & 24/7 post-op care at Mankar Chowk, Wakad, Pune.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://drjadhavpileslaser.com",
  locale: "en_IN",
  phone: "+919665612777",
  phoneDisplay: "+91 96656 12777",
  phoneAlt: "+919096965217",
  phoneAltDisplay: "+91 90969 65217",
  whatsapp: "919665612777",
  email: "info@drjadhavpileslaser.com",
  emailAlt: "info@sunrisepileshospital.com",
  address: {
    street: "2nd Floor, T Junction Building, Mankar Chowk, Kaspate Wasti Rd",
    landmark: "Above Chitale Bandhu Mithaiwale",
    locality: "Wakad",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411057",
    country: "IN",
    short: "Mankar Chowk, Wakad, Pune – 411057, Maharashtra",
  },
  geo: {
    latitude: 18.5998,
    longitude: 73.7645,
  },
  googleMapsUrl:
    "https://maps.google.com/?q=Dr+Jadhav+Piles+Laser+Centre+Wakad+Pune",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dr+Jadhav+Piles+Laser+Centre+Wakad",
  rating: { value: 4.9, count: 502 },
  stats: {
    patients: "5,000+",
    successRate: "95%+",
    experience: "10+",
    procedureMins: "45",
    googleReviews: "500+",
  },
  badges: ["NABH Accredited", "Insurance Cashless", "No Stitches", "15-Min Procedure"] as const,
  hours: {
    opd: "Mon–Sat: 9 AM – 8 PM · Sun: 11 AM – 2 PM & 5 PM – 7 PM",
    opdShort: "11 AM – 2 PM & 5 PM – 7 PM (Daily)",
    extended: "Mon–Sat: 9 AM – 8 PM",
    sunday: "Sunday: By Appointment / 11 AM – 7 PM",
    emergency: "24/7 Post-Operative Emergency Support",
  },
  doctor: {
    name: "Dr. Satish Jadhav",
    title: "MD, FPC, CCKS",
    role: "Senior Proctologist & Laser Surgeon",
    bio: "Leading proctologist with 10+ years in advanced laser proctology. Expert in VAAFT, laser hemorrhoidectomy, LIS for fissure & DLAFT fistula treatment. 5,000+ successful procedures with 95%+ success rate at Wakad, Pune.",
    image: "/Asset/Dr Jadhav.png",
    expertise: [
      "Advanced Laser Piles Surgery",
      "VAAFT for Anal Fistula",
      "Laser Fissurectomy (LIS)",
      "Diode Laser Proctology",
      "Video Proctoscopy",
      "Daycare Procedures",
    ],
  },
  team: [
    { name: "Dr. Sarika Deokate", role: "MD Anaesthesia", title: "Anaesthesiologist" },
    { name: "Dr. Balaji Kadam", role: "MD Anaesthesia", title: "Anaesthesiologist" },
    { name: "Dr. Akshay Chipare", role: "MD Medicine", title: "General Physician" },
    { name: "Dr. Suraj Gadiwal", role: "MBBS", title: "Medical Officer" },
  ],
  insurancePartners: [
    "PMJAY / Ayushman Bharat",
    "ESI",
    "Star Health",
    "HDFC ERGO",
    "New India Assurance",
    "Bajaj Allianz",
    "Niva Bupa",
    "United India",
    "Care Health",
    "Reliance Health",
  ],
  areasServed: [
    "Wakad",
    "Hinjewadi",
    "Baner",
    "Pimple Saudagar",
    "Pimpri Chinchwad",
    "Ravet",
    "Thergaon",
    "Rahatani",
    "Aundh",
    "Balewadi",
    "Moshi",
    "Chinchwad",
    "Dighi",
    "Nashik Phata",
    "Pune",
  ],
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
  },
} as const;

export const galleryImages = [
  {
    src: "https://drjadhavpileslaser.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-14-at-01.07.43_4a07fc04-1-1024x758.jpg",
    alt: "Modular operation theater at Dr. Jadhav Piles Laser Centre Wakad Pune",
  },
  {
    src: "https://drjadhavpileslaser.com/wp-content/uploads/2024/03/IMG-20240311-WA0003.jpg",
    alt: "Advanced laser surgery facility at Sunrise Piles Hospital Wakad",
  },
  {
    src: "https://drjadhavpileslaser.com/wp-content/uploads/2024/03/IMG-20240311-WA0002.jpg",
    alt: "Patient consultation at Dr. Jadhav Piles Laser Centre",
  },
  {
    src: "https://drjadhavpileslaser.com/wp-content/uploads/2024/03/IMG-20240311-WA0001.jpg",
    alt: "Piles laser surgery team at Dr. Jadhav Laser Centre Wakad",
  },
  {
    src: "https://drjadhavpileslaser.com/wp-content/uploads/2024/03/IMG-20240305-WA0042.jpg",
    alt: "Laser piles treatment procedure at Wakad Pune",
  },
  {
    src: "https://drjadhavpileslaser.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-14-at-02.19.47_b8f978db.jpg",
    alt: "Modern operation theater at Dr. Jadhav Piles Centre",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/treatments",
    label: "Treatments",
    children: [
      { href: "/treatments/piles", label: "Piles Treatment" },
      { href: "/treatments/fissure", label: "Fissure Treatment" },
      { href: "/treatments/fistula", label: "Fistula Treatment" },
      { href: "/treatments/laser-piles-surgery", label: "Laser Piles Surgery" },
      { href: "/treatments/non-surgical", label: "Non-Surgical Treatment" },
    ],
  },
  { href: "/locations", label: "Locations" },
  { href: "/doctors", label: "Our Doctors" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const facilities = [
  "NABH-accredited centre — highest standards for quality & safety",
  "Advanced video proctoscopy for accurate diagnosis",
  "Cashless health insurance — PMJAY, ESI, Star Health & more",
  "Painless laser treatment — no stitches, minimal blood loss",
  "15-minute daycare procedures — minimal recovery time",
  "24/7 post-operative support until complete recovery",
  "Modular operation theater with diode laser technology",
  "Experienced anaesthesia & surgical support team",
  "Advanced computerized laboratory",
  "Special & deluxe patient rooms",
] as const;

export const whyChooseUs = [
  {
    title: "NABH Accredited Centre",
    text: "Highest national standards for quality, safety, hygiene, and patient care.",
  },
  {
    title: "No Stitches",
    text: "Advanced laser technology. Minimal blood loss, no sutures, faster recovery.",
  },
  {
    title: "Daycare Procedure",
    text: "Most procedures take 15 minutes. No overnight stay required.",
  },
  {
    title: "Insurance Cashless",
    text: "PMJAY, ESI, Star Health, HDFC Ergo, Bajaj Allianz, and more accepted.",
  },
  {
    title: "Back to Work in 2–3 Days",
    text: "Minimal discomfort. Resume desk work in 2–3 days, full activity in a week.",
  },
  {
    title: "10+ Years Specialist",
    text: "Dr. Satish Jadhav (MD, FPC, CCKS) — dedicated laser proctology experience.",
  },
] as const;

export const recoveryProcess = [
  {
    step: 1,
    title: "Book Consultation",
    text: "Call, WhatsApp, or book online. Same-day appointments available.",
  },
  {
    step: 2,
    title: "Expert Diagnosis",
    text: "Dr. Jadhav examines you and explains condition, options, cost, and insurance.",
  },
  {
    step: 3,
    title: "Laser Procedure",
    text: "45-minute daycare surgery. Virtually painless, zero stitches.",
  },
  {
    step: 4,
    title: "Quick Recovery",
    text: "Rest briefly after the procedure. Back to normal in 2–3 days with full support.",
  },
] as const;

export const treatments = [
  {
    slug: "piles",
    title: "Piles (Hemorrhoids) Treatment",
    shortTitle: "Piles",
    badge: "Most Common",
    metaTitle: "Best Piles Treatment in Wakad Pune | Laser Hemorrhoids Doctor",
    description:
      "Laser & stapler surgery for all grades. 15-min daycare procedure. Expert piles treatment by Dr. Satish Jadhav in Wakad, Pune.",
    icon: "activity",
  },
  {
    slug: "fissure",
    title: "Anal Fissure Treatment",
    shortTitle: "Fissure",
    badge: "Highly Treatable",
    metaTitle: "Fissure Treatment in Pune | Painless Laser Fissure Surgery Wakad",
    description:
      "Laser LIS for chronic fissure. Fast healing, minimal pain. Advanced fissure care at Dr. Jadhav Laser Centre, Wakad.",
    icon: "heart-pulse",
  },
  {
    slug: "fistula",
    title: "Fistula-in-Ano Treatment",
    shortTitle: "Fistula",
    badge: "Laser Surgery",
    metaTitle: "Fistula Treatment Pune | DLAFT Laser Fistula Surgery Wakad",
    description:
      "DLAFT laser fistulotomy & VAAFT. Very low recurrence rate. Trusted fistula specialist in Wakad, Pune.",
    icon: "shield-check",
  },
  {
    slug: "laser-piles-surgery",
    title: "Laser Piles Surgery",
    shortTitle: "Laser Surgery",
    badge: "Latest Tech",
    metaTitle: "Laser Piles Surgery Pune | Painless Hemorrhoid Laser Wakad",
    description:
      "No stitches. 45-min daycare procedures. State-of-the-art diode laser at NABH-accredited centre, Wakad.",
    icon: "zap",
  },
  {
    slug: "non-surgical",
    title: "Non-Surgical Treatment",
    shortTitle: "Non-Surgical",
    badge: "Conservative Care",
    metaTitle: "Non-Surgical Piles Treatment Pune | Injection Therapy Wakad",
    description:
      "Injection sclerotherapy, rubber band ligation & medical management for early-stage piles and fissure.",
    icon: "syringe",
  },
  {
    slug: "pilonidal-sinus",
    title: "Pilonidal Sinus Treatment",
    shortTitle: "Pilonidal Sinus",
    badge: "Laser Procedure",
    metaTitle: "Pilonidal Sinus Treatment Pune | Laser Surgery Wakad",
    description:
      "Advanced laser treatment for pilonidal sinus — minimal scarring, no open wound, faster recovery than conventional surgery.",
    icon: "target",
  },
] as const;

export const testimonials = [
  {
    name: "Kiran Mali",
    location: "Wakad, Pune",
    text: "I consulted 2 different doctors for piles, but finally chose Dr. Jadhav. He clearly explained immediate relief after operation — and that's exactly what happened. Highly recommended.",
    rating: 5,
  },
  {
    name: "Rahul Gholap",
    location: "Pune",
    text: "Excellent fistula treatment — nearly painless procedure, smooth surgery, cashless insurance, and outstanding post-surgery follow-up. Dr. Jadhav's skill and care are truly exceptional.",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    location: "Wakad, Pune",
    text: "I was very scared about surgery but Dr. Jadhav explained everything clearly. The laser procedure was done in 45 minutes and I went home the same day. Back to work in 3 days.",
    rating: 5,
  },
  {
    name: "Priya Kulkarni",
    location: "Hinjewadi, Pune",
    text: "Excellent treatment for my chronic fissure. I had been suffering for 2 years. Dr. Jadhav solved my problem with a simple laser procedure. Very professional staff and hygienic clinic.",
    rating: 5,
  },
  {
    name: "Suresh Patil",
    location: "Pimpri, Pune",
    text: "Best piles hospital in Pune! My fistula treatment (VAAFT) was completed without complications. No recurrence even after 6 months!",
    rating: 5,
  },
  {
    name: "Mohit Gade",
    location: "Wakad, Pune",
    text: "Best doctor for piles surgery in Wakad, Pune. Thank you Dr. Jadhav.",
    rating: 5,
  },
] as const;

/** Google Maps patient review videos */
export const videoReviews = [
  {
    id: "google-review-featured",
    title: "Patient Video Review",
    subtitle: "Verified review on Google Maps",
    source: "Google Maps",
    posterUrl:
      "https://gz0.googleusercontent.com/gps-cs-s/APNQkAFGeaw-02PlukJSPFNUzezYFRSZ7Q1R3yXrrBqmlJE0LYT5Up9ouYekEsUzkyE7oKVRkQNRULhaGduQal8Oq1jI694P03oPWknsq9q1HR-gh-Pnb-jJE3BypZvtRbJhvdajcnTcyCTz24rV=w1200-h800-k-no",
    watchUrl: "https://maps.app.goo.gl/8F6NqMpqp3Lmdv6n9",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Dr+Jadhav+MD+FPC+CCKS+Wakad+Pune&z=16&output=embed",
  },
] as const;

export const faqs = [
  {
    question: "Who is the best piles doctor in Wakad, Pune?",
    answer:
      "Dr. Satish Jadhav (MD, FPC, CCKS) at Dr. Jadhav Piles Laser Centre / Sunrise Piles Hospital, Mankar Chowk Wakad, is among Pune's top-rated proctologists with 500+ Google reviews and 5,000+ patients treated. The NABH-accredited centre offers laser surgery, video proctoscopy, and cashless insurance.",
  },
  {
    question: "What is the cost of laser piles surgery in Pune?",
    answer:
      "Laser piles surgery cost varies by hemorrhoid grade, anesthesia, and room type. After consultation, Dr. Jadhav's team provides transparent pricing. Cashless insurance (PMJAY, Star Health, HDFC Ergo, etc.) is accepted. Call +91 96656 12777 or +91 90969 65217.",
  },
  {
    question: "Is laser piles treatment painful?",
    answer:
      "Laser piles treatment is minimally invasive with significantly less pain than open surgery. Most patients go home the same day and resume desk work in 2–3 days.",
  },
  {
    question: "What are the OPD timings?",
    answer:
      "Mon–Sat: 9 AM – 8 PM. Sunday: 11 AM – 2 PM & 5 PM – 7 PM (by appointment). 24/7 support for post-operative patients.",
  },
  {
    question: "Is the hospital NABH accredited?",
    answer:
      "Yes. Sunrise Piles Hospital / Dr. Jadhav Laser Centre at Wakad is an NABH-accredited facility meeting national standards for patient safety, hygiene, and quality care.",
  },
  {
    question: "Which areas near Pune do you serve?",
    answer:
      "Patients visit from Wakad, Hinjewadi, Baner, Pimple Saudagar, Pimpri Chinchwad, Ravet, Thergaon, Rahatani, Aundh, Balewadi, Moshi, and across Pune.",
  },
  {
    question: "Does the hospital accept health insurance?",
    answer:
      "Yes. Cashless facility for PMJAY, ESI, Star Health, HDFC Ergo, Bajaj Allianz, New India Assurance, Niva Bupa, Care Health, and more.",
  },
] as const;
