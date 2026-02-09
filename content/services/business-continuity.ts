import type { ProblemSplitItem, ServicePageCopy } from "../types";

export const href = "/business-continuity" as const;

export const copy: ServicePageCopy = {
  hero: {
    eyebrow: "Solutions",
    headline: "Keep your business running without interruption",
    description:
      "Downtime is not an option when you're caring for patients or serving customers. We ensure your business keeps functioning with planning, monitoring, and recovery support.",
  },
  problem: {
    eyebrow: "The cost of downtime",
    headline: "Why unplanned outages cost more than continuity planning",
    description:
      "Outages disrupt care, revenue, and trust. Many organizations have no plan, weak backups, or untested recovery. When something fails, the cost of not being ready is far higher than the cost of planning.",
    items: [
      {
        headline: "Outages disrupt operations and revenue.",
        description:
          "Unplanned downtime stops work, delays care, and loses revenue. In healthcare, even brief outages can affect patient safety and compliance. Recovery without a plan takes longer and costs more.",
      },
      {
        headline: "Backups alone are not enough.",
        description:
          "Backups can fail, be corrupted, or be too slow to restore. Without testing, documentation, and clear roles, you won't know if you can recover until it's too late.",
      },
      {
        headline: "No plan means chaos when it happens.",
        description:
          "Without a business continuity plan, people don't know who does what or in what order. Communication breaks down, and recovery takes longer than it should.",
      },
    ] as [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem],
  },
  comparison: {
    eyebrow: "Comparison to alternatives",
    headline: "Business Continuity vs backup-only vs no plan",
    rowLabels: [
      "Approach",
      "Recovery time and testing",
      "Documentation and roles",
      "Cost and predictability",
      "Compliance and audit",
    ],
    columns: [
      {
        header: "Business Continuity (us)",
        cells: [
          "Planning, monitoring, backup verification, and recovery support",
          "Defined recovery targets; regular testing so you know it works",
          "Documented plan, roles, and procedures; clear communication",
          "Predictable cost; no surprise outage or recovery bills",
          "Evidence of due care and planning for audits (e.g. HIPAA)",
        ],
      },
      {
        header: "Backup only",
        cells: [
          "Backups run; little or no planning or testing",
          "Recovery time unknown; first real test is during an incident",
          "Often no written plan or assigned roles",
          "Backup cost only until an outage; then recovery and downtime cost",
          "Harder to demonstrate due care; auditors ask for a plan",
        ],
      },
      {
        header: "No plan",
        cells: [
          "Hope nothing fails; react when it does",
          "Recovery is ad hoc; can take days or weeks",
          "No documentation; confusion and delay during incidents",
          "Unpredictable; outages and recovery can be very costly",
          "Compliance and audit risk; no evidence of planning",
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases / industries",
    headline: "Use cases for Business Continuity",
    useCases: [
      {
        title: "Healthcare practices",
        description:
          "Keep patient care and EHR access available; meet continuity and recovery expectations for HIPAA and patient safety.",
      },
      {
        title: "Multi-site organizations",
        description:
          "One continuity strategy across locations with clear roles and tested recovery.",
      },
      {
        title: "Compliance-focused industries",
        description:
          "Documented business continuity and disaster recovery plans for auditors and due care.",
      },
      {
        title: "Critical applications",
        description:
          "Define and test recovery for your most important systems so you know they can come back quickly.",
      },
      {
        title: "Ransomware readiness",
        description:
          "Backup verification, recovery testing, and incident response so you can recover from an attack.",
      },
      {
        title: "Leadership and board expectations",
        description:
          "Demonstrate that you have a plan and have tested it so the business can keep running.",
      },
    ],
  },
  cta: {
    headline: "Ready to keep your business running no matter what?",
    subtext:
      "Let's talk about your critical systems and how we can help you plan, test, and recover so downtime doesn't define your outcome.",
    ctaLabel: "Get in touch",
  },
};
