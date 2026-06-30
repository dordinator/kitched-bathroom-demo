import { company, nav, areas, services } from "@/lib/content";
import { NewsletterSignup } from "./NewsletterSignup";

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-offwhite/70">
      {/* Marketing opt-in + local business card */}
      <div className="border-b border-offwhite/10">
        <div className="max-site container-px grid gap-10 py-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h3 className="font-serif text-2xl text-offwhite sm:text-[1.75rem]">
              Design inspiration &amp; seasonal offers
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-offwhite/60">
              Join our list for kitchen and bathroom ideas, recently completed
              projects and occasional offers for local homeowners. No spam —
              unsubscribe anytime.
            </p>
            <div className="mt-6 max-w-md">
              <NewsletterSignup />
            </div>
          </div>

          {/* Local SEO: verified Google profile + NAP + map */}
          <div className="overflow-hidden rounded-2xl border border-offwhite/10 bg-offwhite/[0.03]">
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <GoogleG />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-offwhite">
                      {company.googleRating}
                    </span>
                    <span className="flex items-center gap-0.5 text-brass-light">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} />
                      ))}
                    </span>
                  </div>
                  <p className="text-xs text-offwhite/55">
                    {company.googleReviewCount} Google reviews · Verified
                    business
                  </p>
                </div>
              </div>
              <a
                href={company.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-brass-light hover:underline"
              >
                View on Google →
              </a>
            </div>
            <a
              href={company.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 border-t border-offwhite/10 bg-offwhite/[0.02] px-5 py-5 transition hover:bg-offwhite/[0.05]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass-light">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-offwhite">
                    {company.studio}
                  </p>
                  <p className="text-xs text-offwhite/55">
                    {company.addressLine}, {company.postcode}
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-xs font-semibold text-brass-light transition group-hover:translate-x-0.5">
                Get directions →
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-site container-px py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-offwhite/20 bg-offwhite/5 font-serif text-sm font-semibold text-offwhite">
                S
              </span>
              <div className="leading-tight">
                <span className="block font-serif text-base font-semibold text-offwhite">
                  Stoneford
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-offwhite/50">
                  Kitchens &amp; Bathrooms
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Premium kitchen and bathroom renovations across Hertfordshire and
              North London. Designed and fitted properly, by one trusted team.
            </p>
            <div className="mt-6 flex items-center gap-0.5 text-brass-light">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
              <a
                href="/feedback"
                className="ml-3 text-xs text-offwhite/60 underline-offset-2 hover:text-offwhite hover:underline"
              >
                Leave a review
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-offwhite">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-offwhite"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${company.email}?subject=Brochure%20request`}
                  className="transition-colors hover:text-offwhite"
                >
                  Request a printed brochure
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-offwhite">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="transition-colors hover:text-offwhite"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-offwhite">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={company.phoneHref}
                  className="font-semibold text-offwhite transition-colors hover:text-brass-light"
                >
                  {company.phone}
                </a>
                <span className="ml-2 text-[10px] uppercase tracking-wider text-offwhite/40">
                  Business line
                </span>
              </li>
              <li className="flex items-center gap-2 text-xs text-brass-light/90">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Missed our call? We&apos;ll text you back.
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-offwhite"
                >
                  {company.email}
                </a>
              </li>
              <li className="pt-1 not-italic text-offwhite/60">
                <address className="not-italic leading-relaxed">
                  {company.addressLine}
                  <br />
                  {company.addressLocality} {company.postcode}
                </address>
              </li>
              <li className="text-offwhite/60">{company.hours}</li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-offwhite/45">
              Serving {areas.slice(0, 6).join(", ")} &amp; surrounding areas.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-offwhite/10 pt-7 text-xs text-offwhite/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Fully insured · Hertfordshire &amp; North London ·{" "}
            <span className="text-offwhite/30">
              Demo website — imagery is premium stock photography.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Star() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
    </svg>
  );
}

function GoogleG() {
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    </svg>
  );
}
