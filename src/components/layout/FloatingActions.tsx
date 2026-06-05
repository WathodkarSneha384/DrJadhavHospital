"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-4 right-3 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6 sm:gap-3">

      {/* Scroll to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 12 }}
            transition={{ type: "spring", stiffness: 350, damping: 24 }}
            onClick={scrollToTop}
            className="group flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110 sm:h-12 sm:w-12"
            style={{ background: "linear-gradient(135deg, #0a1745 0%, #1e3897 100%)", boxShadow: "0 4px 16px rgba(10,23,69,0.4)" }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call button */}
      <motion.a
        href={siteConfig.phoneTel}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 22 }}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-110 sm:h-14 sm:w-14"
        style={{ background: "linear-gradient(135deg, #c9973e 0%, #9a6f0a 100%)", boxShadow: "0 4px 20px rgba(201,151,62,0.5)" }}
        aria-label={`Call ${siteConfig.phoneDisplay}`}
      >
        <Phone className="h-6 w-6 fill-current" />
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ background: "rgba(201,151,62,0.6)" }}
        />
        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-brand-950 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          {siteConfig.phoneDisplay}
        </span>
      </motion.a>
    </div>
  );
}
