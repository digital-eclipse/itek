import type { ProblemSplitItem, ServicePageCopy } from "../types";

export const href = "/managed-support" as const;

export const copy: ServicePageCopy = {
  hero: {
    eyebrow: "Solutions",
    headline: "IT support that prevents problems instead of reacting to them",
    description:
      "Proactive monitoring, clear SLAs, and a single point of contact so your technology runs reliably and your team stays focused on what matters.",
  },
  problem: {
    eyebrow: "The cost of chaos",
    headline: "Why IT chaos costs more than proactive support",
    description:
      "Downtime and IT issues delay care, disrupt revenue, and put data at risk. Proactive support costs less than the fallout of going without it.",
    items: [
      {
        headline: "Reactive support wastes time and money.",
        description:
          "Break-fix or one overstretched IT person means firefighting, not prevention. Unplanned downtime costs thousands per hour; in healthcare, brief outages affect safety and compliance.",
      },
      {
        headline: "In-house teams are expensive and hard to scale.",
        description:
          "Many organizations need expertise but can't afford full IT staff. You need coverage when it matters, without the overhead of recruiting and retaining a full team.",
      },
      {
        headline: "Compliance adds another layer.",
        description:
          "You need documented policies, secure access, and evidence systems are maintained. A managed partner helps meet regulatory expectations and reduce audit stress.",
      },
    ] as [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem],
  },
  comparison: {
    eyebrow: "Comparison to alternatives",
    headline: "Managed Support vs break-fix vs in-house",
    rowLabels: [
      "Support model",
      "Cost predictability",
      "Response & resolution",
      "Compliance & documentation",
      "Scalability",
    ],
    columns: [
      {
        header: "Managed Support (us)",
        cells: [
          "Proactive monitoring, help desk, maintenance, and clear SLAs",
          "Fixed monthly cost; no surprise break-fix bills",
          "Defined SLAs; single point of contact and ticket tracking",
          "Documentation, logging, and reporting to support audits (e.g. HIPAA)",
          "Easily scale up or down with your needs",
        ],
      },
      {
        header: "Break-fix",
        cells: [
          "Pay only when something breaks; no ongoing monitoring",
          "Unpredictable; costs spike when outages or incidents occur",
          "Reactive; wait for failure, then call for help",
          "Often minimal; harder to demonstrate due care",
          "Limited; same ad-hoc model at any size",
        ],
      },
      {
        header: "In-house only",
        cells: [
          "Full-time staff; you own hiring, tools, and processes",
          "Salaries, benefits, tools; high fixed cost",
          "Depends on team size and availability; after-hours can be thin",
          "You own policies and evidence; can be strong if resourced",
          "Requires hiring to scale; slow to adjust",
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases / industries",
    headline: "Use cases for Managed Support",
    useCases: [
      {
        title: "Healthcare practices",
        description:
          "EHR uptime, HIPAA-aligned processes, and fast response so staff can focus on patients instead of IT tickets.",
      },
      {
        title: "Multi-site organizations",
        description:
          "One team and one view across locations; consistent monitoring, patching, and support everywhere.",
      },
      {
        title: "Growing SMBs",
        description:
          "Scale support as you grow without the cost of hiring a full IT team; get expertise when you need it.",
      },
      {
        title: "Compliance-focused industries",
        description:
          "Documented policies, access controls, and evidence of maintenance and monitoring to support audits.",
      },
      {
        title: "Business-critical applications",
        description:
          "Proactive monitoring and quick resolution so your core systems stay up and performant.",
      },
      {
        title: "Teams without dedicated IT",
        description:
          "A single point of contact and clear SLAs so you get reliable support without managing IT yourself.",
      },
    ],
  },
  cta: {
    headline: "Ready to get proactive support for your technology?",
    subtext:
      "Let's talk about how we can keep your systems running smoothly so you can focus on your business.",
    ctaLabel: "Get in touch",
  },
};
