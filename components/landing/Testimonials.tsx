"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Easy, quick and efficient",
    name: "Laura L",
    location: "Dr. Agatha Bis Holistic & Family Dentistry",
  },
  {
    quote: "Very helpful and professional",
    name: "Jenny N",
    location: "Le Dental Care",
  },
  {
    quote:
      "Very good service, Roger told us how to solve the boot problem by the phone and it works. No charge for that. Save our day. Thank you!",
    name: "Jacy Y",
    location: "Dundas and University Dental Clinic",
  },
];

export function Testimonials() {
  return (
    <section
      id="social-proof"
      className="border-b border-black/[0.06]  py-16 md:py-20"
      aria-label="Testimonials"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_3fr] lg:items-center lg:gap-12">
          {/* Left: heading + stats stacked */}
          <div className="flex flex-col gap-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              What our clients say
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  CSAT 100
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Customer satisfaction score
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  36 reviews
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  in 90 days
                </p>
              </div>
            </div>
          </div>

          {/* Right: 2 cards on top, 1 full-width below */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                className={index === 2 ? "sm:col-span-2" : undefined}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <blockquote className="flex h-full min-h-[140px] flex-col rounded-md border border-black/[0.12] bg-white p-6 font-prose text-left text-foreground shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_2px_6px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)]">
                  <p className="flex flex-1 flex-col justify-center text-left text-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex flex-col border-t border-black/[0.08] pt-4">
                    <footer className="text-sm font-medium not-italic text-foreground">
                      {item.name}
                    </footer>
                    <cite className="mt-1 block text-xs not-italic text-muted-foreground">
                      {item.location}
                    </cite>
                  </div>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
