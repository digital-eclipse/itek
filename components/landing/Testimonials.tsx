"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "I own a dental practice in downtown Toronto and have relied on ITEK for over 10 years. They installed our first server and have managed and upgraded our hardware through every technology change. During our latest upgrade, Nissan and Mohammed promptly addressed issues both onsite and remotely — their expertise made the transition seamless. Partnering with an organization like ITEK is crucial for success.",
    name: "Dr. Andrew Lee",
    location: "Dental Practice Owner, Downtown Toronto",
  },
  {
    quote:
      "ITEK replaced all our computers earlier this month — 6 computers and 1 server. I was worried something might go wrong, but everything went well! Nissan and Saeed were professional and efficient, and finished much earlier than I expected. Nissan even helped reconnect our outdated cameras. Post-installation service was excellent too.",
    name: "Judy Tsai",
    location: "Dental Office Manager",
  },
  {
    quote:
      "We have been satisfied clients of ITEK for a number of years now. We're very happy with the full range of services — network services, cloud backup and server maintenance. They've been very responsive for any immediate issues, and we would definitely recommend them.",
    name: "Anthony Tamberg",
    location: "Owner, St. Clair Dental Group",
  },
];

const easeSmooth = [0.25, 0.46, 0.45, 0.94] as const;

function initials(name: string): string {
  const cleaned = name.replace(/^Dr\.?\s+/i, "");
  const parts = cleaned.split(/\s+/).filter(Boolean);
  const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "");
  return letters.join("") || name[0]?.toUpperCase() || "?";
}

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-4 w-4 text-amber-400"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.51L10 14.13l-4.94 2.6.94-5.51-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="social-proof"
      className="border-b border-black/[0.06] py-16 md:py-24"
      aria-label="Testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header: label + aggregate rating */}
        <motion.div
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: easeSmooth }}
        >
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              What our clients say
            </p>
            <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Trusted by Toronto dental practices for over a decade
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Stars />
            <span className="text-sm font-semibold text-foreground">5.0</span>
          </div>
        </motion.div>

        {/* Masonry grid of reviews */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
        >
          {testimonials.map((item) => (
            <motion.figure
              key={item.name}
              className="flex h-full flex-col rounded-xl border border-black/[0.10] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: easeSmooth },
                },
              }}
            >
              <Stars />
              <blockquote className="mt-4 font-prose text-sm leading-relaxed text-foreground/90">
                {item.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-black/[0.06] pt-4">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#072446] text-xs font-semibold text-white"
                  aria-hidden="true"
                >
                  {initials(item.name)}
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-medium text-foreground">
                    {item.name}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {item.location}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
