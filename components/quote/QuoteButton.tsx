"use client";

import type { ReactNode } from "react";
import { useQuote } from "./QuoteProvider";

type Variant = "primary" | "brass" | "ghost" | "ghost-light";

const classMap: Record<Variant, string> = {
  primary: "btn-primary",
  brass: "btn-brass",
  ghost: "btn-ghost",
  "ghost-light": "btn-ghost-light",
};

export function QuoteButton({
  children,
  variant = "brass",
  projectType,
  className = "",
  withArrow = false,
}: {
  children: ReactNode;
  variant?: Variant;
  projectType?: string;
  className?: string;
  withArrow?: boolean;
}) {
  const { open } = useQuote();
  return (
    <button
      type="button"
      onClick={() => open(projectType)}
      className={`${classMap[variant]} ${className}`}
    >
      {children}
      {withArrow && (
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
  );
}
