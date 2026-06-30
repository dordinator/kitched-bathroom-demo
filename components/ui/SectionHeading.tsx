import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`eyebrow ${dark ? "text-brass-light" : "text-brass-dark"}`}
      >
        <span className="h-px w-6 bg-current" />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-serif text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-offwhite" : "text-charcoal-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-base ${
            dark ? "text-offwhite/70" : "text-charcoal-500"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
