import type { ReactNode } from "react";

/** One problem-split item (headline + optional description). */
export type ProblemSplitItem = {
  headline: string;
  description: string;
};

/** Copy shape for one service page. Add entries here as the page structure evolves. */
export type ServicePageCopy = {
  hero: {
    eyebrow: string;
    headline: ReactNode;
    description: ReactNode;
  };
  problem: {
    eyebrow: ReactNode;
    headline: ReactNode;
    description: string;
    /** Exactly 3 items for the problem split layout. */
    items: [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem];
  };
  comparison: {
    eyebrow: ReactNode;
    headline: ReactNode;
    rowLabels: ReactNode[];
    columns: Array<{ header: ReactNode; cells: ReactNode[] }>;
  };
  useCases: {
    eyebrow: ReactNode;
    headline: ReactNode;
    useCases: Array<{ title: ReactNode; description: ReactNode }>;
  };
  cta: {
    headline: ReactNode;
    subtext: ReactNode;
    ctaLabel: ReactNode;
  };
};

/** Hrefs that have full page copy. Add more as you fill them. */
export type ServiceHref =
  | "/managed-support"
  | "/cloud-solutions"
  | "/elevate-in-house-it"
  | "/future-proof-infrastructure"
  | "/managed-security"
  | "/business-continuity"
  | "/backup-disaster-recovery"
  | "/consulting-strategy";
