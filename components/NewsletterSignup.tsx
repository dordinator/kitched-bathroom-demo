"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-brass/30 bg-brass/10 px-5 py-4 text-sm text-offwhite">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brass text-charcoal-950">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        You&apos;re on the list — look out for design inspiration &amp; seasonal
        offers.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="nl-email" className="sr-only">
        Email address
      </label>
      <input
        id="nl-email"
        name="email"
        type="email"
        required
        placeholder="Your email address"
        className="w-full rounded-full border border-offwhite/20 bg-offwhite/5 px-5 py-3 text-sm text-offwhite outline-none transition placeholder:text-offwhite/40 focus:border-brass focus:bg-offwhite/10"
      />
      <button type="submit" className="btn-brass shrink-0 justify-center">
        Subscribe
      </button>
    </form>
  );
}
