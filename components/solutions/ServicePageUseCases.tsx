import * as React from "react";
import { ServiceSection, ServiceH2, ServiceEyebrow } from "./service-page-layout";

export type UseCase = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export function ServicePageUseCases({
  eyebrow,
  headline,
  useCases,
  className,
  ...props
}: {
  eyebrow?: React.ReactNode;
  headline: React.ReactNode;
  useCases: UseCase[];
} & React.ComponentProps<"section">) {
  return (
    <ServiceSection className={className} {...props}>
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow ? (
          <ServiceEyebrow className="first:mt-0">{eyebrow}</ServiceEyebrow>
        ) : null}
        <ServiceH2 className="mx-0 mt-2 max-w-none first:mt-0">{headline}</ServiceH2>
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((uc, i) => (
          <div
            key={i}
            className="rounded-lg border border-black/[0.08] bg-card p-6 text-card-foreground"
          >
            <h3 className="font-semibold text-foreground">{uc.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground [font-family:var(--font-inter)]">
              {uc.description}
            </p>
          </div>
        ))}
      </div>
    </ServiceSection>
  );
}
