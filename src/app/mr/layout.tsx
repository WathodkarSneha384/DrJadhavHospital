import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    languages: {
      en: "/",
      mr: "/mr",
    },
  },
};

export default function MarathiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
