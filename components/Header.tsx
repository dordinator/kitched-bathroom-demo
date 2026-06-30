"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, company } from "@/lib/content";
import { QuoteButton } from "./quote/QuoteButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "bg-offwhite/90 py-3 shadow-[0_1px_0_rgba(31,29,26,0.08)] backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-site container-px flex items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label={`${company.name} home`}
        >
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-500 ${
              scrolled
                ? "border-charcoal-900/20 bg-charcoal-900 text-offwhite"
                : "border-offwhite/40 bg-offwhite/10 text-offwhite backdrop-blur"
            }`}
          >
            S
          </span>
          <span className="leading-tight">
            <span
              className={`block font-serif text-base font-semibold transition-colors duration-500 ${
                scrolled ? "text-charcoal-900" : "text-offwhite"
              }`}
            >
              Stoneford
            </span>
            <span
              className={`block text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                scrolled ? "text-charcoal-400" : "text-offwhite/70"
              }`}
            >
              Kitchens &amp; Bathrooms
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-charcoal-600 hover:text-charcoal-900"
                  : "text-offwhite/80 hover:text-offwhite"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className={`text-sm font-semibold transition-colors duration-300 ${
              scrolled
                ? "text-charcoal-800 hover:text-brass-dark"
                : "text-offwhite hover:text-brass-light"
            }`}
          >
            {company.phone}
          </a>
          <QuoteButton variant={scrolled ? "primary" : "brass"}>
            Request a free quote
          </QuoteButton>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
            scrolled
              ? "border-charcoal-900/15 text-charcoal-900"
              : "border-offwhite/30 text-offwhite"
          }`}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-offwhite px-7 py-7 shadow-card"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-semibold text-charcoal-900">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-900/15 text-charcoal-900"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-lg font-medium text-charcoal-800 transition-colors hover:bg-charcoal-900/[0.05]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={company.phoneHref}
                  className="text-center text-sm font-semibold text-charcoal-700"
                >
                  Call {company.phone}
                </a>
                <div onClick={() => setMenuOpen(false)}>
                  <QuoteButton variant="primary" className="w-full justify-center">
                    Request a free quote
                  </QuoteButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
