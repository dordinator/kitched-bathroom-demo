"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

type Stage = "rate" | "positive" | "private" | "done";

export function ReviewFunnel() {
  const [stage, setStage] = useState<Stage>("rate");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function choose(value: number) {
    setRating(value);
    // The "magic" funnel: delighted customers are routed to Google,
    // while anyone less than thrilled is invited to share private feedback
    // first so issues can be resolved before they go public.
    setTimeout(() => setStage(value >= 4 ? "positive" : "private"), 350);
  }

  return (
    <div className="w-full max-w-lg">
      <div className="overflow-hidden rounded-[1.75rem] border border-charcoal-900/10 bg-white shadow-card">
        <div className="bg-charcoal-900 px-7 py-7 text-center text-offwhite">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brass font-serif text-xl font-semibold text-charcoal-950">
            S
          </span>
          <h1 className="mt-4 font-serif text-2xl">Stoneford Kitchens &amp; Bathrooms</h1>
          <p className="mt-1 text-sm text-offwhite/70">
            We&apos;d love to hear how we did.
          </p>
        </div>

        <div className="px-7 py-8">
          <AnimatePresence mode="wait">
            {stage === "rate" && (
              <motion.div
                key="rate"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease }}
                className="text-center"
              >
                <h2 className="font-serif text-xl text-charcoal-900">
                  How was your experience?
                </h2>
                <p className="mt-2 text-sm text-charcoal-500">
                  Tap a star to rate your kitchen or bathroom project.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((value) => {
                    const active = (hover || rating) >= value;
                    return (
                      <button
                        key={value}
                        type="button"
                        aria-label={`${value} star${value > 1 ? "s" : ""}`}
                        onMouseEnter={() => setHover(value)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => choose(value)}
                        className="transition-transform duration-200 hover:scale-110"
                      >
                        <svg
                          width="42"
                          height="42"
                          viewBox="0 0 24 24"
                          fill={active ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className={active ? "text-brass" : "text-charcoal-300"}
                          aria-hidden
                        >
                          <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                        </svg>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {stage === "positive" && (
              <motion.div
                key="positive"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-1 text-brass">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <h2 className="mt-5 font-serif text-2xl text-charcoal-900">
                  Wonderful — thank you!
                </h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-charcoal-500">
                  We&apos;re so pleased you&apos;re happy with your new space.
                  Would you mind sharing a few words on Google? It takes less
                  than a minute and genuinely helps other local families find
                  us.
                </p>
                <a
                  href={company.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brass mt-6 w-full justify-center"
                >
                  <GoogleGlyph />
                  Leave a Google review
                </a>
                <button
                  type="button"
                  onClick={() => setStage("done")}
                  className="mt-3 text-sm text-charcoal-400 hover:text-charcoal-700"
                >
                  Maybe later
                </button>
              </motion.div>
            )}

            {stage === "private" && (
              <motion.div
                key="private"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease }}
              >
                <h2 className="font-serif text-xl text-charcoal-900">
                  Thank you for your honesty.
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                  We&apos;re sorry we didn&apos;t fully hit the mark. Please tell
                  us what happened — this goes straight to the owner and
                  we&apos;ll do everything we can to put it right.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStage("done");
                  }}
                  className="mt-5 space-y-3"
                >
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="field-input"
                  />
                  <input
                    name="contact"
                    type="text"
                    required
                    placeholder="Phone or email"
                    className="field-input"
                  />
                  <textarea
                    name="feedback"
                    rows={4}
                    required
                    placeholder="Tell us how we can do better…"
                    className="field-input resize-none"
                  />
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send private feedback
                  </button>
                </form>
              </motion.div>
            )}

            {stage === "done" && (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3, ease }}
                className="py-4 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brass text-charcoal-950">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl text-charcoal-900">
                  Thank you!
                </h2>
                <p className="mx-auto mt-2 max-w-sm text-sm text-charcoal-500">
                  We really appreciate you taking the time. Someone from the
                  team will be in touch if needed.
                </p>
                <a href="/" className="btn-ghost mt-6">
                  Back to homepage
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-charcoal-400">
        Powered by Stoneford · {company.region}
      </p>
    </div>
  );
}

function GoogleGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden>
      <path fill="#1f1d1a" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" opacity="0.9" />
      <path fill="#1f1d1a" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" opacity="0.7" />
      <path fill="#1f1d1a" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" opacity="0.5" />
      <path fill="#1f1d1a" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" opacity="0.8" />
    </svg>
  );
}
