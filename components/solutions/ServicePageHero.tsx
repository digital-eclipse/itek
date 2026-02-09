import * as React from "react";
import { tw } from "@/lib/theme";
import { BackgroundGradientAnimationWave } from "@/components/ui/background-gradient-animation-wave";

export function ServicePageHero({
  eyebrow = "Solutions",
  headline,
  description,
  children,
  className,
  ...props
}: {
  eyebrow?: string;
  headline: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
} & React.ComponentProps<"section">) {
  return (
    <section
      className={[
        "relative flex min-h-[60vh] flex-col justify-center overflow-hidden border-b border-primary py-14 md:py-20",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <BackgroundGradientAnimationWave
        containerClassName="absolute inset-0"
        className="flex flex-col justify-center"
        interactive={false}
      >
        <div className={`mx-auto max-w-4xl ${tw.containerPadding} text-center`}>
          <p className="text-xs font-medium uppercase tracking-widest text-white/80">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            {headline}
          </h1>
          <div className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 [font-family:var(--font-inter)] md:text-lg">
            {description}
          </div>
          {children ? (
          <div className="mt-6 [&_button]:bg-white [&_button]:text-primary [&_button]:hover:bg-white/90">
            {children}
          </div>
        ) : null}
        </div>
      </BackgroundGradientAnimationWave>
    </section>
  );
}
