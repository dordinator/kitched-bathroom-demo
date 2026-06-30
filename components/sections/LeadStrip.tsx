import { QuoteForm } from "../quote/QuoteForm";

export function LeadStrip() {
  return (
    <section className="relative z-10 -mt-2 px-4 sm:px-8 lg:px-12">
      <div className="max-site -translate-y-12 sm:-translate-y-16">
        <div className="overflow-hidden rounded-[1.75rem] bg-charcoal-900 shadow-card">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr]">
            <div className="relative flex flex-col justify-center gap-4 bg-charcoal-900 px-8 py-9 sm:px-10">
              <div
                aria-hidden
                className="absolute inset-0 noise-overlay opacity-40"
              />
              <p className="eyebrow relative text-brass-light">
                Free, no obligation
              </p>
              <h2 className="relative font-serif text-3xl text-offwhite sm:text-[2.1rem]">
                Planning a renovation?
              </h2>
              <p className="relative max-w-sm text-sm text-offwhite/70">
                Tell us about your kitchen or bathroom project and get a free
                consultation with one of our designers.
              </p>
            </div>
            <div className="bg-offwhite px-6 py-8 sm:px-9">
              <QuoteForm variant="strip" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
