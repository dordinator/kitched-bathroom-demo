"use client";

import { useState } from "react";
import { projectTypes, budgetRanges, startDates } from "@/lib/content";

type QuoteFormProps = {
  variant?: "panel" | "strip";
  defaultProjectType?: string;
  onDone?: () => void;
};

export function QuoteForm({
  variant = "panel",
  defaultProjectType,
  onDone,
}: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Demo only: simulate a network request. Wire this to a real endpoint
    // (email service / CRM) when going live.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-charcoal-900 px-6 py-12 text-center text-offwhite">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brass text-charcoal-950">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl">Thank you — request received</h3>
        <p className="mt-3 max-w-sm text-sm text-offwhite/70">
          One of our designers will be in touch within one working day to
          arrange your free consultation. We&apos;ll talk through your ideas,
          timeline and likely budget.
        </p>
        {onDone && (
          <button
            type="button"
            onClick={onDone}
            className="btn-brass mt-7"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  const grid =
    variant === "strip"
      ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      : "grid grid-cols-1 gap-4 sm:grid-cols-2";

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className={grid}>
        <div>
          <label htmlFor="qf-name" className="field-label">
            Name
          </label>
          <input
            id="qf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className="field-input"
          />
        </div>
        <div>
          <label htmlFor="qf-phone" className="field-label">
            Phone
          </label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Best contact number"
            className="field-input"
          />
        </div>
        <div>
          <label htmlFor="qf-postcode" className="field-label">
            Postcode
          </label>
          <input
            id="qf-postcode"
            name="postcode"
            type="text"
            required
            autoComplete="postal-code"
            placeholder="e.g. WD17 1AB"
            className="field-input"
          />
        </div>
        <div>
          <label htmlFor="qf-type" className="field-label">
            Project type
          </label>
          <select
            id="qf-type"
            name="projectType"
            className="field-select"
            defaultValue={defaultProjectType ?? projectTypes[0]}
          >
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="qf-budget" className="field-label">
            Estimated budget
          </label>
          <select id="qf-budget" name="budget" className="field-select">
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="qf-start" className="field-label">
            Ideal start date
          </label>
          <select id="qf-start" name="startDate" className="field-select">
            {startDates.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {variant === "panel" && (
        <div className="mt-4">
          <label htmlFor="qf-message" className="field-label">
            Tell us about your project (optional)
          </label>
          <textarea
            id="qf-message"
            name="message"
            rows={3}
            placeholder="A few words about your kitchen or bathroom plans…"
            className="field-input resize-none"
          />
        </div>
      )}

      <div
        className={
          variant === "strip"
            ? "mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            : "mt-6 flex flex-col gap-3"
        }
      >
        <button
          type="submit"
          disabled={submitting}
          className="btn-brass w-full justify-center disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {submitting ? "Sending…" : "Get my free quote"}
          {!submitting && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          )}
        </button>
        <p className="text-xs text-charcoal-400">
          No obligation. We typically reply within one working day.
        </p>
      </div>
    </form>
  );
}
