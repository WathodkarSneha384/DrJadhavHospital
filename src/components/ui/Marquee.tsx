"use client";

import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  speed = 40,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        pauseOnHover && "[&:hover_.marquee-track]:animation-paused",
        className
      )}
    >
      <div
        className="marquee-track flex w-max gap-4"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f8f9fc] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f8f9fc] to-transparent" />
    </div>
  );
}
