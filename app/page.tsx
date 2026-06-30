import { QuoteProvider } from "@/components/quote/QuoteProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { Hero } from "@/components/sections/Hero";
import { LeadStrip } from "@/components/sections/LeadStrip";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Transformations } from "@/components/sections/Transformations";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { Areas } from "@/components/sections/Areas";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { company, areas, faqs } from "@/lib/content";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: company.name,
  description:
    "Premium kitchen and bathroom renovations across Hertfordshire and North London — from design consultation to final installation.",
  telephone: company.phone,
  email: company.email,
  url: "https://www.stonefordkb.co.uk",
  priceRange: "££££",
  areaServed: areas.map((a) => ({ "@type": "City", name: a })),
  address: {
    "@type": "PostalAddress",
    streetAddress: company.addressLine,
    addressLocality: "Watford",
    addressRegion: "Hertfordshire",
    postalCode: company.postcode,
    addressCountry: "GB",
  },
  openingHours: "Mo-Fr 08:30-17:30",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: company.googleRating,
    reviewCount: company.googleReviewCount,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <QuoteProvider>
        <Header />
        <main>
          <Hero />
          <LeadStrip />
          <Services />
          <Projects />
          <Transformations />
          <WhyChooseUs />
          <Process />
          <Reviews />
          <Areas />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <ChatWidget />
      </QuoteProvider>
    </>
  );
}
