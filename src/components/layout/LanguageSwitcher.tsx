import Link from "next/link";
import { Languages } from "lucide-react";

export function LanguageSwitcher({ current = "en" }: { current?: "en" | "mr" }) {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-slate-200 p-0.5 text-xs font-semibold">
      <Languages className="ml-2 h-3.5 w-3.5 text-slate-500" aria-hidden />
      <Link
        href="/"
        className={`rounded-md px-2.5 py-1.5 transition ${
          current === "en" ? "bg-brand-600 text-white" : "text-slate-600 hover:text-brand-700"
        }`}
        hrefLang="en"
      >
        EN
      </Link>
      <Link
        href="/mr"
        className={`rounded-md px-2.5 py-1.5 transition ${
          current === "mr" ? "bg-brand-600 text-white" : "text-slate-600 hover:text-brand-700"
        }`}
        hrefLang="mr"
      >
        मराठी
      </Link>
    </div>
  );
}
