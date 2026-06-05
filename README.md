# Dr. Jadhav Piles Laser Centre — Next.js Website

Enterprise redesign for [Dr. Jadhav](https://drjadhavpileslaser.com/) / [Sunrise Piles Hospital Wakad](https://sunrisepileshospital.com/) — NABH-accredited laser proctology in Pune.

## Quick Start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages (30 routes)

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, stats, gallery, process, doctor, FAQ |
| `/mr` | Marathi (मराठी) landing page |
| `/locations` | All service areas |
| `/locations/[slug]` | SEO pages: Wakad, Hinjewadi, Baner, PCMC… |
| `/treatments/*` | Piles, fissure, fistula, laser, non-surgical |
| `/doctors` | Dr. Satish Jadhav + support team |
| `/faq` | Dedicated FAQ with schema markup |
| `/contact` | Appointment + map |

## Data Sources

Content merged from:

- [drjadhavpileslaser.com](https://drjadhavpileslaser.com/) — address, phone, gallery images, reviews
- [sunrisepileshospital.com](https://sunrisepileshospital.com/) — NABH, stats, process, insurance, team, laser details

## Deploy to Vercel

```bash
npx vercel
```

Or connect GitHub repo in [vercel.com](https://vercel.com). Set env:

```
NEXT_PUBLIC_SITE_URL=https://drjadhavpileslaser.com
```

`vercel.json` uses Mumbai region (`bom1`) for faster Pune users.

## Customize

Edit `src/lib/site.ts` — phones, hours, stats, team, insurance, images.

## SEO Checklist

- [ ] Add `public/og-image.jpg` (1200×630)
- [ ] Google Search Console + sitemap submit
- [ ] Google Business Profile (Wakad)
- [ ] 301 redirects from old WordPress URLs if paths change
