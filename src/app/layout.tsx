import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { JsonLd } from "@/components/JsonLd";
import {
  buildMetadata,
  organizationJsonLd,
  physicianJsonLd,
  faqJsonLd,
  howToJsonLd,
} from "@/lib/seo";
import { siteConfig, faqs } from "@/lib/site";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} | Piles Laser Specialist Wakad Pune`,
  description: siteConfig.description,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" dir="ltr">
      <body className={`${roboto.variable} ${montserrat.variable} font-sans`}>
        <JsonLd
          data={[organizationJsonLd(), physicianJsonLd(), faqJsonLd(faqs), howToJsonLd()]}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
