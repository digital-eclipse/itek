import * as React from "react";
import {
  ServiceSection,
  ServiceEyebrow,
  ServiceH2,
  ServiceProse,
} from "./service-page-layout";

export function ServicePageSolutionSection({
  eyebrow,
  headline,
  children,
  visual,
  quote,
  className,
  ...props
}: {
  eyebrow: React.ReactNode;
  headline: React.ReactNode;
  children: React.ReactNode;
  visual?: React.ReactNode;
  quote?: React.ReactNode;
} & React.ComponentProps<"section">) {
  return (
    <ServiceSection className={className} {...props}>
      <div className="mx-auto max-w-3xl">
        <ServiceEyebrow>{eyebrow}</ServiceEyebrow>
        <ServiceH2 className="mt-2 first:mt-2">{headline}</ServiceH2>
      </div>
      <div className="mx-auto mt-8 grid max-w-6xl gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <ServiceProse className="space-y-4 md:max-w-none">{children}</ServiceProse>
        {visual ? (
          <div className="flex items-start justify-center md:justify-end">
            {visual}
          </div>
        ) : null}
      </div>
      {quote ? (
        <blockquote className="mx-auto mt-10 max-w-3xl border-l-4 border-primary pl-4 text-muted-foreground [font-family:var(--font-inter)] italic md:pl-6">
          {quote}
        </blockquote>
      ) : null}
    </ServiceSection>
  );
}
