import type { Metadata } from "next";
import { ServicePageHeroCta } from "@/components/solutions";
import { BackgroundGradientAnimationWave } from "@/components/ui/background-gradient-animation-wave";
import { aboutCopy } from "@/content/about";
import { tw } from "@/lib/theme";
import { ServicePageFinalCta } from "@/components/solutions";

export const metadata: Metadata = {
  title: "About | ITEK Solutions",
  description:
    "Learn about ITEK Solutions: women-led, minority-owned IT with enterprise-level expertise in managed support, cloud, security, and strategic leadership.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden border-b border-primary py-14 md:py-20">
        <BackgroundGradientAnimationWave
          containerClassName="absolute inset-0"
          className="flex flex-col justify-center"
          interactive={false}
        >
          <div className={`mx-auto max-w-4xl ${tw.containerPadding} text-center`}>
            <p className="text-xs font-medium uppercase tracking-widest text-white/80">
              {aboutCopy.hero.eyebrow}
            </p>
            <h1 className="mt-2 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {aboutCopy.hero.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 [font-family:var(--font-inter)] md:text-lg">
              {aboutCopy.hero.description}
            </p>
            <div className="mt-6 [&_button]:bg-white [&_button]:text-primary [&_button]:hover:bg-white/90">
              <ServicePageHeroCta />
            </div>
          </div>
        </BackgroundGradientAnimationWave>
      </section>

      {/* About Us */}
      <section className="border-b border-border bg-background py-16 md:py-20 lg:py-24">
        <div className={`mx-auto ${tw.maxWidthContent} ${tw.containerPadding}`}>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {aboutCopy.aboutUs.headline}
          </h2>
          <div className="mt-6 w-full space-y-5 text-base leading-relaxed text-muted-foreground [font-family:var(--font-inter)] md:text-lg">
            {aboutCopy.aboutUs.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition + Mission (primary band) */}
      <section className="border-b border-white/10 bg-primary py-16 text-white md:py-20 lg:py-24">
        <div className={`mx-auto ${tw.maxWidthContent} ${tw.containerPadding}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-widest text-white/60">
                {aboutCopy.valueProposition.label}
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                {aboutCopy.valueProposition.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/90 [font-family:var(--font-inter)]">
                {aboutCopy.valueProposition.body}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
                {aboutCopy.mission.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/90 [font-family:var(--font-inter)]">
                {aboutCopy.mission.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ServicePageFinalCta
        headline="Ready to work with a team that puts your success first?"
        subtext="Let's talk about your technology goals and how we can help."
        ctaLabel="Get in touch"
      />
    </div>
  );
}
