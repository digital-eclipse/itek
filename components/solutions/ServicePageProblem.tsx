import * as React from "react";
import { ServiceSection, ServiceH2, ServiceProse } from "./service-page-layout";

export function ServicePageProblem({
  headline,
  children,
  className,
  ...props
}: {
  headline: React.ReactNode;
  children: React.ReactNode;
} & React.ComponentProps<"section">) {
  return (
    <ServiceSection className={className} {...props}>
      <ServiceH2 className="first:mt-0">{headline}</ServiceH2>
      <ServiceProse className="mt-4 space-y-4">{children}</ServiceProse>
    </ServiceSection>
  );
}
