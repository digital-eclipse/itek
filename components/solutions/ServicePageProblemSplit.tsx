import * as React from "react";
import { tw } from "@/lib/theme";

export type ProblemSplitItem = {
  headline: React.ReactNode;
  description?: React.ReactNode;
  visual?: React.ReactNode;
};

export function ServicePageProblemSplit({
  eyebrow,
  headline,
  description,
  items,
  className,
  ...props
}: {
  eyebrow: React.ReactNode;
  headline: React.ReactNode;
  description: React.ReactNode;
  items: [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem];
} & React.ComponentProps<"section">) {
  return (
    <section
      className={[
        "border-b border-white/10 bg-primary py-16 text-white md:py-20 lg:py-24",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className={`mx-auto ${tw.maxWidthContent} ${tw.containerPadding}`}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Left: brief, big explanation — ~1/3, vertically centered */}
          <div className="flex flex-col justify-center lg:col-span-4">
            <p className="text-[11px] font-medium uppercase tracking-widest text-white/60">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-xl font-semibold leading-tight tracking-tight text-white md:text-2xl lg:text-3xl">
              {headline}
            </h2>
            <div className="mt-4 text-sm leading-relaxed text-white/90 [font-family:var(--font-inter)] md:text-base">
              {description}
            </div>
          </div>

          {/* Right: 3 stacked items — ~2/3 */}
          <div className="flex flex-col divide-y divide-white/15 lg:col-span-8">
            {items.map((item, i) => (
              <div
                key={i}
                className="py-6 first:pt-0 last:pb-0 lg:py-8"
              >
                <h3 className="text-base font-semibold leading-snug text-white md:text-lg">
                  {item.headline}
                </h3>
                {item.description ? (
                  <div className="mt-2 text-sm leading-relaxed text-white/80 [font-family:var(--font-inter)]">
                    {item.description}
                  </div>
                ) : null}
                {item.visual ? (
                  <div className="mt-6 rounded-lg bg-white/5 p-4 md:p-6">
                    {item.visual}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
