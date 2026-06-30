# Stoneford Kitchens & Bathrooms — Demo Website

A premium, high-converting demo website for a fictional kitchen & bathroom
renovation company serving Hertfordshire & North London. Built as an agency
demo to showcase a polished, modern, trustworthy local renovation brand.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and
**Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create an optimised production build:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        Root layout: fonts, SEO metadata, Open Graph
  page.tsx          Homepage — assembles all sections + JSON-LD schema
  globals.css       Theme tokens, buttons, form styles, animations
  sitemap.ts        SEO sitemap
  robots.ts         SEO robots rules
components/
  Header.tsx        Sticky nav with mobile menu
  Footer.tsx
  quote/            Quote modal system (provider, button, form)
  sections/         Each homepage section (Hero, Services, etc.)
  ui/               Reveal animations + SectionHeading
lib/
  content.ts        ALL copy: services, projects, reviews, FAQs, areas…
  site-images.ts    ALL imagery (see below)
```

## Replacing the images

Every image on the site is defined in one place: **`lib/site-images.ts`**
(the `siteImages` object). Each entry has:

- `url` – the image source (currently optimised Unsplash stock photography)
- `alt` – SEO + accessibility alt text
- `query` – the recommended stock search query to find a replacement

To swap in real project photography, keep the same keys and replace the `url`
(and update `alt`). Nothing else needs to change.

> All current images are verified premium UK-style kitchen/bathroom interiors
> served from `images.unsplash.com`. Allowed remote hosts are configured in
> `next.config.mjs`. If you host images elsewhere, add the hostname there (or
> drop files into `/public` and reference them with a local path).

### Recommended replacement search queries

- luxury kitchen renovation quartz island warm lighting
- modern shaker kitchen renovation UK style
- premium kitchen island open plan living
- high end bathroom renovation walk in shower
- luxury bathroom marble brass fittings
- freestanding bath premium bathroom interior
- modern ensuite bathroom renovation
- kitchen renovation before / after
- bathroom renovation before / after
- premium home interiors renovation natural light

## Editing the copy

All text lives in **`lib/content.ts`** — company details, services, projects,
testimonials, the process, FAQs and the areas served. Update there and the
whole site reflects the changes.

## The quote form

The "Request a free quote" buttons across the site open a single shared modal
(`components/quote/QuoteProvider.tsx`). The form (`QuoteForm.tsx`) currently
**simulates** submission and shows a success state — it is not wired to a
backend. To go live, connect `handleSubmit` to an email service or CRM.

## Notes

- Mobile-first, responsive and accessibility-conscious (semantic headings,
  alt text, keyboard-dismissible modal, reduced-motion support).
- SEO: per-page metadata, Open Graph, `LocalBusiness` + `FAQPage` JSON-LD,
  sitemap and robots.
- This is a demo. The brand, phone number, reviews and statistics are
  illustrative placeholders, and imagery is premium stock photography.
```
