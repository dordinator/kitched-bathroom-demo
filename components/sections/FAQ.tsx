"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { QuoteButton } from "../quote/QuoteButton";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-offwhite py-20 sm:py-28">
      <div className="max-site container-px">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Good to know"
              title="Frequently asked questions."
              intro="Everything you might want to know before starting your kitchen or bathroom renovation. Still unsure? Just ask."
            />
            <div className="mt-8">
              <QuoteButton variant="primary" withArrow>
                Ask us a question
              </QuoteButton>
            </div>
          </div>

          <div className="divide-y divide-charcoal-900/10 border-y border-charcoal-900/10">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-serif text-lg text-charcoal-900">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-brass bg-brass text-charcoal-950"
                          : "border-charcoal-900/20 text-charcoal-700"
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-6 pr-10 text-sm leading-relaxed text-charcoal-500">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
