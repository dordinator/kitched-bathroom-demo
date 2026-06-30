"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { process, siteImages } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { QuoteButton } from "../quote/QuoteButton";

export function Process() {
  return (
    <section id="process" className="relative bg-beige py-20 sm:py-28">
      <div className="max-site container-px">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="How it works"
              title="A simple renovation process from idea to installation."
              intro="We've refined our process over hundreds of projects so it stays calm, clear and on schedule — from your first phone call to the final walkthrough."
            />
            <div className="mt-8 overflow-hidden rounded-2xl shadow-soft">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={siteImages.openPlanDining.url}
                  alt={siteImages.openPlanDining.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-6 hidden lg:block">
              <QuoteButton variant="primary" withArrow>
                Book your free consultation
              </QuoteButton>
            </div>
          </div>

          <ol className="relative">
            <div
              aria-hidden
              className="absolute left-[27px] top-2 bottom-2 w-px bg-charcoal-900/15"
            />
            {process.map((step, i) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
                className="relative flex gap-5 pb-9 last:pb-0"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-charcoal-900/10 bg-offwhite font-serif text-lg text-brass-dark shadow-soft">
                  {step.step}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-serif text-xl text-charcoal-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-charcoal-500">
                    {step.copy}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
