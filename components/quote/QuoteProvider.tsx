"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QuoteForm } from "./QuoteForm";
import { company } from "@/lib/content";

type QuoteContextValue = {
  open: (projectType?: string) => void;
  close: () => void;
};

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within QuoteProvider");
  return ctx;
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [projectType, setProjectType] = useState<string | undefined>(undefined);

  const open = useCallback((type?: string) => {
    setProjectType(type);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <QuoteContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Close quote form"
              className="absolute inset-0 bg-charcoal-950/70 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Request a free quote"
              className="relative z-10 my-4 w-full max-w-2xl overflow-hidden rounded-[1.75rem] bg-offwhite shadow-card"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative bg-charcoal-900 px-6 py-7 text-offwhite sm:px-9">
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-offwhite/20 text-offwhite/80 transition hover:border-offwhite/60 hover:text-offwhite"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
                <p className="eyebrow text-brass-light">Free consultation</p>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
                  Request a free quote
                </h2>
                <p className="mt-2 max-w-md text-sm text-offwhite/70">
                  Tell us about your kitchen or bathroom project and we&apos;ll
                  help you understand the likely cost, timeline and next steps.
                </p>
              </div>
              <div className="px-6 py-7 sm:px-9">
                <QuoteForm
                  variant="panel"
                  defaultProjectType={projectType}
                  onDone={close}
                />
                <p className="mt-5 text-center text-xs text-charcoal-400">
                  Prefer to talk? Call us on{" "}
                  <a
                    href={company.phoneHref}
                    className="font-semibold text-charcoal-700 underline-offset-2 hover:underline"
                  >
                    {company.phone}
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </QuoteContext.Provider>
  );
}
