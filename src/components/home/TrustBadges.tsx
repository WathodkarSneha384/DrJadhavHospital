import { Award, Shield, Clock, CreditCard } from "lucide-react";
import { siteConfig } from "@/lib/site";

const icons = [Award, CreditCard, Clock, Shield];

export function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      {siteConfig.badges.map((badge, i) => {
        const Icon = icons[i] ?? Shield;
        return (
          <span
            key={badge}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm"
          >
            <Icon className="h-4 w-4 text-gold-400" />
            {badge}
          </span>
        );
      })}
    </div>
  );
}
