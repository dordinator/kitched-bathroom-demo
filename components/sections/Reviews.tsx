"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reviews, siteImages, company } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";

function GoogleG() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-brass">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-offwhite py-20 sm:py-28">
      <div className="max-site container-px">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Homeowner reviews"
            title="Trusted by homeowners across the area."
            intro="A few words from recent kitchen, bathroom and ensuite clients."
          />
          <div className="flex items-center gap-4 rounded-2xl border border-charcoal-900/10 bg-white px-5 py-4 shadow-soft">
            <GoogleG />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-charcoal-900">
                  {company.googleRating}
                </span>
                <Stars />
              </div>
              <p className="text-xs text-charcoal-500">
                {company.googleReviewCount} Google reviews · Verified
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="flex flex-col rounded-[1.5rem] border border-charcoal-900/[0.07] bg-white p-7 shadow-soft"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-charcoal-700">
                <span className="font-serif text-3xl leading-none text-brass/40">
                  &ldquo;
                </span>
                <p className="-mt-3">{review.quote}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-charcoal-900/[0.07] pt-5">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={siteImages[review.image].url}
                    alt={siteImages[review.image].alt}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-charcoal-900">
                    {review.name}
                  </div>
                  <div className="text-xs text-charcoal-400">
                    {review.project} · {review.location}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <p className="text-sm text-charcoal-500">
            Recently worked with us?
          </p>
          <a href="/feedback" className="btn-ghost">
            <GoogleG />
            Leave a review
          </a>
        </div>
      </div>
    </section>
  );
}
