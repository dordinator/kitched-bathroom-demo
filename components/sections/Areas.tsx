"use client";

import { areas } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

export function Areas() {
  const loop = [...areas, ...areas];
  return (
    <section className="relative overflow-hidden bg-beige py-20 sm:py-24">
      <div className="max-site container-px">
        <SectionHeading
          align="center"
          eyebrow="Areas we serve"
          title="Local kitchen & bathroom specialists."
          intro="We design and install kitchens, bathrooms and ensuites for homeowners across Hertfordshire and North London, including:"
        />
      </div>

      <Reveal className="relative mt-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-beige to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-beige to-transparent"
        />
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((area, i) => (
            <span
              key={`${area}-${i}`}
              className="flex items-center gap-2.5 rounded-full border border-charcoal-900/10 bg-white px-6 py-3 text-sm font-medium text-charcoal-700 shadow-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              {area}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="max-site container-px mt-12">
        <Reveal className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-charcoal-500">
          <p>
            Based in Watford and working throughout Hertfordshire and North
            London, we know local homes — from Victorian terraces and 1930s
            semis to new-build apartments. If your town isn&apos;t listed, get
            in touch; we cover most of the surrounding area.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
