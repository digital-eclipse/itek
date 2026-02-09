import * as React from "react";
import { ServiceSection, ServiceH2, ServiceEyebrow } from "./service-page-layout";

export type Feature = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export function ServicePageFeaturesGrid({
  eyebrow,
  headline,
  features,
  className,
  ...props
}: {
  eyebrow?: React.ReactNode;
  headline: React.ReactNode;
  features: Feature[];
} & React.ComponentProps<"section">) {
  return (
    <ServiceSection className={className} {...props}>
      {eyebrow ? (
        <ServiceEyebrow className="mx-auto max-w-3xl">{eyebrow}</ServiceEyebrow>
      ) : null}
      <ServiceH2 className="mt-2 first:mt-0">{headline}</ServiceH2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground [font-family:var(--font-inter)]">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </ServiceSection>
  );
}
