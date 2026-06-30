"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [nudge, setNudge] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Gentle one-time attention nudge after the visitor has settled in.
  useEffect(() => {
    const t = setTimeout(() => setNudge(true), 6000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) setNudge(false);
  }, [open]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setName(String(data.get("name") || ""));
    setSent(true);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-label="Message Stoneford"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease }}
            className="mb-3 w-[min(92vw,360px)] overflow-hidden rounded-[1.4rem] border border-charcoal-900/10 bg-offwhite shadow-card"
          >
            {/* Header */}
            <div className="relative bg-charcoal-900 px-5 py-5 text-offwhite">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-offwhite/20 text-offwhite/80 transition hover:border-offwhite/60 hover:text-offwhite"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brass font-serif text-lg font-semibold text-charcoal-950">
                  S
                </span>
                <div>
                  <p className="font-serif text-lg leading-tight">Stoneford</p>
                  <p className="flex items-center gap-1.5 text-xs text-offwhite/70">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-green-400" />
                    Online · {company.responseTime.replace("We typically reply ", "replies ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 py-5">
              {!sent ? (
                <>
                  <div className="mb-4 max-w-[85%] rounded-2xl rounded-tl-sm bg-charcoal-900/[0.05] px-4 py-3 text-sm text-charcoal-700">
                    Hi there! 👋 Tell us a little about your kitchen or bathroom
                    project and we&apos;ll text you straight back — usually
                    within minutes.
                  </div>

                  <div className="mb-4 grid grid-cols-2 gap-2.5">
                    <a
                      href={company.phoneHref}
                      className="flex items-center justify-center gap-2 rounded-xl border border-charcoal-900/15 bg-white px-3 py-2.5 text-xs font-semibold text-charcoal-800 transition hover:border-charcoal-900/40"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      Call us
                    </a>
                    <a
                      href={company.smsHref}
                      className="flex items-center justify-center gap-2 rounded-xl border border-charcoal-900/15 bg-white px-3 py-2.5 text-xs font-semibold text-charcoal-800 transition hover:border-charcoal-900/40"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      Text us
                    </a>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      autoComplete="name"
                      className="field-input !py-2.5 !text-sm"
                    />
                    <input
                      name="mobile"
                      type="tel"
                      required
                      placeholder="Mobile number"
                      autoComplete="tel"
                      className="field-input !py-2.5 !text-sm"
                    />
                    <textarea
                      name="message"
                      rows={2}
                      placeholder="How can we help?"
                      className="field-input resize-none !py-2.5 !text-sm"
                    />
                    <button type="submit" className="btn-brass w-full justify-center !py-3">
                      Send message
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </button>
                    <p className="pt-0.5 text-center text-[11px] leading-relaxed text-charcoal-400">
                      By sending, you agree to receive a text back from us.
                      Message &amp; data rates may apply.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-4 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brass text-charcoal-950">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-900">
                    Message sent{name ? `, ${name.split(" ")[0]}` : ""}!
                  </h3>
                  <p className="mx-auto mt-2 max-w-[16rem] text-sm text-charcoal-500">
                    Thanks for getting in touch. We&apos;ll text you straight
                    back, usually within a few minutes during opening hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-4 text-sm font-semibold text-brass-dark hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        <AnimatePresence>
          {nudge && !open && (
            <motion.button
              type="button"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, x: 12, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.9 }}
              transition={{ duration: 0.4, ease }}
              className="hidden rounded-2xl rounded-br-sm border border-charcoal-900/10 bg-offwhite px-4 py-2.5 text-sm font-medium text-charcoal-800 shadow-float sm:block"
            >
              Missed our call? We&apos;ll text you back 👋
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close chat" : "Message us"}
          aria-expanded={open}
          whileTap={{ scale: 0.94 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-charcoal-900 text-offwhite shadow-float transition-colors hover:bg-charcoal-800"
        >
          {!open && (
            <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-75" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-brass" />
            </span>
          )}
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
