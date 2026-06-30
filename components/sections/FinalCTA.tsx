"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteImages, company } from "@/lib/content";
import { QuoteButton } from "../quote/QuoteButton";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={siteImages.openPlanWood.url}
          alt={siteImages.openPlanWood.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/70" />
      </div>

      <div className="max-site container-px relative py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow justify-center text-brass-light">
            <span className="h-px w-6 bg-current" />
            Let&apos;s begin
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-[1.1] text-offwhite sm:text-4xl lg:text-[3rem]">
            Ready to plan your kitchen or bathroom renovation?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-offwhite/75">
            Tell us what you&apos;re thinking and we&apos;ll help you understand
            the likely cost, timeline and next steps — with no pressure and no
            obligation.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton variant="brass" withArrow>
              Request a free quote
            </QuoteButton>
            <a href={company.phoneHref} className="btn-ghost-light">
              Or call {company.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
