"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { transformations, siteImages } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { QuoteButton } from "../quote/QuoteButton";

function Compare({
  beforeKey,
  afterKey,
}: {
  beforeKey: keyof typeof siteImages;
  afterKey: keyof typeof siteImages;
}) {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const before = siteImages[beforeKey];
  const after = siteImages[afterKey];

  const updateFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) updateFromClientX(e.clientX);
      }}
      onPointerUp={() => (dragging.current = false)}
    >
      {/* After (full) */}
      <Image
        src={after.url}
        alt={after.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className="object-cover"
      />
      <span className="absolute right-3 top-3 z-10 rounded-full bg-brass px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-charcoal-950">
        After
      </span>

      {/* Before (clipped via clip-path) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before.url}
          alt={before.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950/10" />
        <span className="absolute left-3 top-3 z-10 rounded-full bg-charcoal-950/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-offwhite backdrop-blur-sm">
          Before
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-20 flex w-0.5 items-center justify-center bg-offwhite"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-offwhite text-charcoal-900 shadow-float">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Transformations() {
  return (
    <section
      id="transformations"
      className="relative overflow-hidden bg-charcoal-900 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 noise-overlay opacity-30"
      />
      <div className="max-site container-px relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            dark
            eyebrow="Before & after"
            title="See what your space could become."
            intro="Drag the slider on each project to reveal the transformation — from dated and tired to a space you'll love living in."
          />
          <div className="shrink-0">
            <QuoteButton variant="brass" withArrow>
              See what your space could become
            </QuoteButton>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {transformations.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <Compare beforeKey={t.before} afterKey={t.after} />
              <h3 className="mt-5 font-serif text-lg text-offwhite">
                {t.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-offwhite/65">
                {t.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
