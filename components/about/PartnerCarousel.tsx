"use client";

import { cn } from "@/lib/utils";

export type PartnerItem = { name: string; logo?: string };

const DUPLICATE_COUNT = 2;

export function PartnerCarousel({
  partners,
  className,
}: {
  partners: PartnerItem[];
  className?: string;
}) {
  const duplicated = partners.length
    ? Array.from({ length: DUPLICATE_COUNT }, () => partners).flat()
    : [];

  if (!duplicated.length) return null;

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={(e) => e.currentTarget.querySelector("[data-carousel]")?.classList.add("pause")}
      onMouseLeave={(e) => e.currentTarget.querySelector("[data-carousel]")?.classList.remove("pause")}
    >
      <div
        data-carousel
        className="flex w-max items-center gap-12 md:gap-16 [&.pause]:[animation-play-state:paused]"
        style={{
          width: "max-content",
          animation: "partner-scroll 40s linear infinite",
        }}
      >
        {duplicated.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="flex shrink-0 items-center justify-center rounded-lg border border-border bg-card px-8 py-6 text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground md:px-10 md:py-8"
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto object-contain md:max-h-14"
              />
            ) : (
              <span className="text-sm font-medium md:text-base">{partner.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
