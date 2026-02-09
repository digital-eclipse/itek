import type { Metadata } from "next";
import { getServiceByHref } from "@/components/landing/ServicesOverview";
import { getServiceCopy } from "@/content/services";
import type { ProblemSplitItem } from "@/components/solutions";
import {
  ServicePageHero,
  ServicePageHeroCta,
  ServicePageProblemSplit,
  ServicePageComparisonTable,
  ServicePageUseCases,
  ServicePageFinalCta,
} from "@/components/solutions";

const href = "/backup-disaster-recovery";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceByHref(href);
  return {
    title: service ? `${service.title} | ITEK Solutions` : "Backup & Disaster Recovery | ITEK Solutions",
    description: service?.shortDescription ?? service?.description ?? undefined,
  };
}

export default function BackupDisasterRecoveryPage() {
  const service = getServiceByHref(href);
  const copy = getServiceCopy(href);
  if (!service || !copy) return null;

  return (
    <div className="min-h-screen bg-background">
      <ServicePageHero
        eyebrow={copy.hero.eyebrow as string}
        headline={copy.hero.headline}
        description={copy.hero.description}
      >
        <ServicePageHeroCta />
      </ServicePageHero>

      <ServicePageProblemSplit
        eyebrow={copy.problem.eyebrow}
        headline={copy.problem.headline}
        description={copy.problem.description}
        items={copy.problem.items as [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem]}
      />

      <ServicePageComparisonTable
        eyebrow={copy.comparison.eyebrow}
        headline={copy.comparison.headline}
        rowLabels={copy.comparison.rowLabels}
        columns={copy.comparison.columns}
      />

      <ServicePageUseCases
        eyebrow={copy.useCases.eyebrow}
        headline={copy.useCases.headline}
        useCases={copy.useCases.useCases}
      />

      <ServicePageFinalCta
        headline={copy.cta.headline}
        subtext={copy.cta.subtext}
        ctaLabel={copy.cta.ctaLabel}
      />
    </div>
  );
}
