import * as React from "react";
import { tw } from "@/lib/theme";

const sectionBase =
  "border-b border-black/[0.06] bg-background py-16 md:py-20 lg:py-24";
const containerBase = `mx-auto ${tw.maxWidthContent} ${tw.containerPadding}`;
const proseClass =
  "mx-auto max-w-3xl text-foreground [font-family:var(--font-inter)] text-base leading-relaxed md:text-lg";
const eyebrowClass = tw.sectionLabel;
const heading2Class =
  "mx-auto max-w-3xl text-2xl font-semibold tracking-tight text-foreground md:text-3xl";
const heading3Class = "text-lg font-semibold text-foreground mt-6";

export function ServiceSection({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={[sectionBase, className].filter(Boolean).join(" ")}
      {...props}
    >
      <div className={containerBase}>{children}</div>
    </section>
  );
}

export function ServiceProse({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={[proseClass, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  );
}

export function ServiceEyebrow({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={[eyebrowClass, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </p>
  );
}

export function ServiceH2({
  children,
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2 className={[heading2Class, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </h2>
  );
}

export function ServiceH3({
  children,
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3 className={[heading3Class, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </h3>
  );
}
