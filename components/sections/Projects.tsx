"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects, siteImages } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";
import { useQuote } from "../quote/QuoteProvider";

export function Projects() {
  const { open } = useQuote();

  return (
    <section id="projects" className="relative bg-beige py-20 sm:py-28">
      <div className="max-site container-px">
        <SectionHeading
          eyebrow="Recent projects"
          title="Renovations our neighbours love coming home to."
          intro="A few examples of the kitchens, bathrooms and ensuites we design and install across Hertfordshire and North London."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-soft transition-shadow duration-500 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={siteImages[project.image].url}
                  alt={siteImages[project.image].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1.1s] ease-out-expo group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
                  <span className="rounded-full bg-charcoal-950/70 px-3 py-1.5 text-xs font-medium text-offwhite backdrop-blur-sm">
                    {project.location}
                  </span>
                  <span className="rounded-full bg-brass px-3 py-1.5 text-xs font-semibold text-charcoal-950">
                    {project.range}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-dark">
                  {project.type}
                </p>
                <h3 className="mt-2 font-serif text-xl leading-snug text-charcoal-900">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-500">
                  {project.result}
                </p>
                <button
                  type="button"
                  onClick={() => open(project.type)}
                  className="btn-ghost mt-6 w-full justify-center"
                >
                  Plan a similar project
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
