"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 5000, suffix: "+", label: "Patients Treated" },
  { value: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
  { value: 95, suffix: "%+", label: "Success Rate" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

function AnimatedNumber({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.floor(display).toLocaleString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="relative z-20 -mt-10 mx-4 max-w-6xl lg:mx-auto" aria-label="Hospital statistics">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-xl bg-white shadow-[0_8px_40px_-8px_rgba(13,31,74,0.18)]"
        style={{ border: "1px solid rgba(13,31,74,0.08)" }}
      >
        {/* Gold top accent line */}
        <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #c9973e, #e4b02a, #c9973e)" }} />
        <div className="grid grid-cols-2 divide-x divide-y divide-surface-200 md:grid-cols-4 md:divide-y-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="px-6 py-7 text-center"
            >
              <p
                className="font-display text-3xl font-bold md:text-4xl"
                style={{ background: "linear-gradient(135deg, #0a1745, #1e3897)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
