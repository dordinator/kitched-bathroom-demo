"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services, siteImages } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { useQuote } from "../quote/QuoteProvider";

export function Services() {
  const { open } = useQuote();

  return (
    <section id="services" className="relative bg-offwhite py-20 sm:py-28">
      <div className="max-site container-px">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Everything for your kitchen
                <br className="hidden sm:block" /> or bathroom, under one roof.
              </>
            }
            intro="Design, supply and installation handled by one team — so your project runs smoothly from first sketch to final finish."
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal-900/[0.07] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={siteImages[service.image].url}
                  alt={siteImages[service.image].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl text-charcoal-900">
                  {service.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-charcoal-500">
                  {service.copy}
                </p>
                <button
                  type="button"
                  onClick={() => open(undefined)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal-900 transition-colors hover:text-brass-dark"
                >
                  {service.cta}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
