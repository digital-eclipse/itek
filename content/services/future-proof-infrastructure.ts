import type { ProblemSplitItem, ServicePageCopy } from "../types";

export const href = "/future-proof-infrastructure" as const;

export const copy: ServicePageCopy = {
  hero: {
    eyebrow: "Solutions",
    headline: "Infrastructure that stays visible, secure, and compliant",
    description:
      "We simplify infrastructure management and help you get more from your investment. Cloud-based solutions improve visibility, security, and compliance so your infrastructure stays up to date.",
  },
  problem: {
    eyebrow: "The cost of neglect",
    headline: "Why outdated or opaque infrastructure holds you back",
    description:
      "Legacy systems, poor visibility, and deferred upgrades create security risks, compliance gaps, and rising support costs. Keeping infrastructure current is vital but often deprioritized.",
    items: [
      {
        headline: "Visibility and control are missing.",
        description:
          "Without clear visibility into assets, performance, and usage, you can't optimize or secure effectively. Shadow IT and unmanaged devices create blind spots and risk.",
      },
      {
        headline: "Security and compliance suffer.",
        description:
          "Old systems and missing patches are easy targets. Regulated industries need documented controls and evidence of maintenance; outdated infrastructure makes audits harder.",
      },
      {
        headline: "Technical debt compounds.",
        description:
          "Deferring upgrades and modernization leads to higher support costs, fewer options, and bigger projects later. Eventually you face a costly, risky migration or breach.",
      },
    ] as [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem],
  },
  comparison: {
    eyebrow: "Comparison to alternatives",
    headline: "Future-proof Infrastructure vs legacy-only vs ad hoc",
    rowLabels: [
      "Approach",
      "Visibility and management",
      "Security and compliance",
      "Scalability",
      "Total cost over time",
    ],
    columns: [
      {
        header: "Future-proof (us)",
        cells: [
          "Unified view of assets, performance, and usage; proactive management",
          "Hardening, patching, and compliance support; evidence for audits",
          "Modern, scalable design; cloud and hybrid options",
          "Predictable spend; avoid big surprise projects and outages",
          "Lower total cost over time; fewer outages and emergency projects",
        ],
      },
      {
        header: "Legacy-only",
        cells: [
          "Limited visibility; manual tracking and reactive support",
          "Older systems harder to secure and patch; compliance gaps",
          "Scaling often means more of the same legacy gear",
          "Support costs rise; eventual big migration or failure",
          "Higher total cost; support and replacement spikes later",
        ],
      },
      {
        header: "Ad hoc upgrades",
        cells: [
          "No single view; upgrades when something breaks or budget allows",
          "Inconsistent security posture; compliance is catch-up",
          "Growth is reactive; capacity and performance issues appear late",
          "Unpredictable; spikes when you must replace or fix",
          "Higher total cost; reactive spend and downtime",
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases / industries",
    headline: "Use cases for Future-proof Infrastructure",
    useCases: [
      {
        title: "Healthcare and HIPAA",
        description:
          "Infrastructure that supports EHR, telehealth, and patient data with documented controls and audit readiness.",
      },
      {
        title: "Multi-site organizations",
        description:
          "One view and one strategy across locations so you manage and secure infrastructure consistently.",
      },
      {
        title: "Compliance-focused industries",
        description:
          "Documented policies, hardening, and evidence of maintenance to support audits and due care.",
      },
      {
        title: "Cloud and hybrid adoption",
        description:
          "Plan and execute cloud or hybrid moves without leaving legacy systems unmanaged.",
      },
      {
        title: "Reducing technical debt",
        description:
          "Structured roadmap to modernize and consolidate so you avoid big-bang projects later.",
      },
      {
        title: "Mergers and acquisitions",
        description:
          "Integrate new locations and systems into a single, visible, secure infrastructure.",
      },
    ],
  },
  cta: {
    headline: "Ready to future-proof your infrastructure?",
    subtext:
      "Let's talk about your current setup and how we can improve visibility, security, and compliance so you're set for what's next.",
    ctaLabel: "Get in touch",
  },
};
