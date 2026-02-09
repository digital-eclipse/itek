"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useBookACallDialog } from "@/components/landing/BookACallDialog";

export function ServicePageFinalCta({
  headline = "Ready to simplify your IT?",
  subtext = "Get a free assessment and see how we can help.",
  ctaLabel = "Get in touch",
}: {
  headline?: React.ReactNode;
  subtext?: React.ReactNode;
  ctaLabel?: React.ReactNode;
}) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(buttonRef, { once: true, margin: "-80px", amount: 0.3 });
  const { openDialog } = useBookACallDialog();

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-black py-14 sm:py-20 md:py-24"
      aria-label="Get in touch"
    >
      <AuroraBackground
        asBackgroundLayer
        dark
        showRadialGradient
        className="pointer-events-none"
      />
      <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-stretch gap-8 sm:gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl md:text-[2.5rem]">
              {headline}
            </h2>
            <p className="mt-2 text-sm text-white/70 sm:mt-3 sm:text-base md:text-lg">
              {subtext}
            </p>
          </div>
          <motion.div
            ref={buttonRef}
            className="w-full shrink-0 md:min-w-0 md:w-[57%]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="button"
              onClick={openDialog}
              className="group flex h-14 w-full min-w-0 items-center justify-between gap-4 overflow-hidden rounded-full border border-black/10 bg-white px-5 py-3 text-black shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition-shadow hover:bg-white/95 hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)] sm:h-16 sm:px-6 md:h-20 md:pl-10 md:pr-2 md:py-2"
            >
              <span className="min-w-0 flex-1 bg-gradient-to-r from-neutral-500 to-black bg-clip-text text-left text-base font-semibold text-transparent sm:text-lg md:text-xl md:text-3xl">
                {ctaLabel}
              </span>
              <CircleArrowRight
                fill="black"
                stroke="white"
                strokeWidth={1}
                size={50}
                className="size-9 shrink-0 sm:size-10 md:size-[50px] md:mr-4"
                aria-hidden
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
