import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { ServicePageHero, ServicePageHeroCta } from "@/components/solutions";
import { BackgroundGradientAnimationWave } from "@/components/ui/background-gradient-animation-wave";
import { aboutCopy, leadership, partnerLogos } from "@/content/about";
import { PartnerCarousel } from "@/components/about";
import { tw } from "@/lib/theme";
import { ServicePageFinalCta } from "@/components/solutions";

export const metadata: Metadata = {
  title: "About | ITEK Solutions",
  description:
    "Learn about Metallic IT and ITEK Solutions: women-led, minority-owned IT with enterprise-level expertise in managed support, cloud, security, and strategic leadership.",
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

      {/* Partners carousel */}
      <section className="border-b border-border bg-secondary/50 py-16 md:py-20">
        <div className={`mx-auto ${tw.maxWidthContent} ${tw.containerPadding}`}>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {aboutCopy.partners.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {aboutCopy.partners.headline}
          </h2>
          <div className="mt-10">
            <PartnerCarousel partners={partnerLogos} />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-b border-border bg-background py-16 md:py-20 lg:py-24">
        <div className={`mx-auto ${tw.maxWidthContent} ${tw.containerPadding}`}>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {aboutCopy.leadership.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {aboutCopy.leadership.headline}
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2 lg:gap-16">
            {leadership.map((member) => (
              <article
                key={member.name}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm md:p-8"
              >
                <div className="border-b border-border pb-4">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{member.title}</p>
                </div>
                <div className="mt-4 flex-1 space-y-4 [font-family:var(--font-inter)]">
                  {member.bio.map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4">
                  <a
                    href={`tel:${member.phone.replace(/\D/g, "")}`}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Phone className="size-4 shrink-0" aria-hidden />
                    {member.phone}
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-sm text-muted-foreground">{member.tollFree}</span>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Mail className="size-4 shrink-0" aria-hidden />
                    {member.email}
                  </a>
                </div>
              </article>
            ))}
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
