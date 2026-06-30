"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteImages } from "@/lib/site-images";
import { QuoteButton } from "../quote/QuoteButton";

const trustLine = [
  "Kitchens",
  "Bathrooms",
  "Ensuites",
  "Design",
  "Supply",
  "Installation",
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={siteImages.hero.url}
          alt={siteImages.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/55 to-charcoal-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-charcoal-950/30" />
      </div>

      <div className="max-site container-px relative flex min-h-[100svh] flex-col justify-center pb-16 pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-offwhite/20 bg-offwhite/5 px-4 py-2 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-brass-light" />
            <span className="text-xs font-medium tracking-wide text-offwhite/90">
              Premium renovations across Hertfordshire &amp; North London
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.08 }}
            className="font-serif text-4xl font-medium leading-[1.05] text-offwhite sm:text-5xl lg:text-[4.1rem]"
          >
            Beautiful kitchens and bathrooms,{" "}
            <span className="italic text-brass-light">designed and fitted</span>{" "}
            properly.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            className="mt-6 max-w-xl text-base text-offwhite/80 sm:text-lg"
          >
            Premium kitchen and bathroom renovations across Hertfordshire and
            North London — from design consultation to final installation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.28 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <QuoteButton variant="brass" withArrow>
              Request a free quote
            </QuoteButton>
            <a href="#transformations" className="btn-ghost-light">
              View transformations
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            {trustLine.map((item, i) => (
              <div key={item} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-brass-light/70" />}
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-offwhite/70">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating trust card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.6 }}
        className="pointer-events-none absolute bottom-8 right-5 hidden w-[300px] xl:block xl:right-12"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-auto overflow-hidden rounded-2xl border border-offwhite/15 bg-offwhite/10 p-3 shadow-float backdrop-blur-xl"
        >
          <div className="relative h-36 w-full overflow-hidden rounded-xl">
            <Image
              src={siteImages.heroCard.url}
              alt={siteImages.heroCard.alt}
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-between px-1 pt-3">
            <div>
              <div className="flex items-center gap-0.5 text-brass-light">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="mt-1 text-xs font-medium text-offwhite/85">
                5-star rated locally
              </p>
            </div>
            <div className="text-right">
              <p className="font-serif text-2xl text-offwhite">120+</p>
              <p className="text-[10px] uppercase tracking-wider text-offwhite/60">
                Renovations
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block xl:left-12 xl:translate-x-0">
        <div className="flex items-center gap-2 text-offwhite/60">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs uppercase tracking-[0.2em]"
          >
            Scroll
          </motion.span>
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  );
}
