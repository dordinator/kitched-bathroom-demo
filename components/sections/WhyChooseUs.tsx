"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whyChooseUs, stats, siteImages } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

function Check() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass-dark">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

export function WhyChooseUs() {
  return (
    <section className="relative bg-offwhite py-20 sm:py-28">
      <div className="max-site container-px">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Why choose Stoneford"
              title="A renovation team you can actually relax with."
              intro="We handle the design, the materials and the installation — and we keep you informed at every stage. No subcontracting chaos, no surprises."
            />
            <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-2xl shadow-soft">
              <div className="relative aspect-[5/4] w-full">
                <Image
                  src={siteImages.kitchenShaker.url}
                  alt={siteImages.kitchenShaker.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
            className="grid gap-x-8 gap-y-7 sm:grid-cols-2"
          >
            {whyChooseUs.map((item) => (
              <motion.li
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="flex gap-3.5"
              >
                <Check />
                <div>
                  <h3 className="font-serif text-lg leading-snug text-charcoal-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-500">
                    {item.copy}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Stats */}
        <Reveal className="mt-16">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-charcoal-900/10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-charcoal-900 px-4 py-9 text-center"
              >
                <span className="font-serif text-4xl text-brass-light sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-offwhite/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
