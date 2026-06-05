"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/site";
import { AnimateIn } from "@/components/motion/AnimateIn";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface-50 py-24" id="faq">
      <div className="mx-auto max-w-3xl px-4">
        <AnimateIn direction="up" className="mb-14 text-center">
          <p className="section-eyebrow mb-3">FAQ</p>
          <div className="gold-rule mb-5" />
          <h2 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-500">Clear answers for patients across Pune &amp; PCMC</p>
        </AnimateIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimateIn key={faq.question} direction="up" delay={i * 0.04}>
                <div
                  className="overflow-hidden rounded-xl bg-white transition-shadow duration-300"
                  style={{
                    border: isOpen ? "1px solid rgba(201,151,62,0.35)" : "1px solid rgba(13,31,74,0.08)",
                    boxShadow: isOpen ? "0 4px 24px -4px rgba(201,151,62,0.15)" : "0 2px 8px -2px rgba(13,31,74,0.06)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-surface-50"
                  >
                    <span className="font-semibold text-brand-900">{faq.question}</span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white transition-all duration-300"
                      style={{ background: isOpen ? "linear-gradient(135deg, #c9973e, #b8860b)" : "linear-gradient(135deg, #0a1745, #1e3897)" }}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="border-t border-surface-100 px-6 pb-5 pt-4 text-sm leading-relaxed text-slate-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
