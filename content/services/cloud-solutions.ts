import type { ProblemSplitItem, ServicePageCopy } from "../types";

export const href = "/cloud-solutions" as const;

export const copy: ServicePageCopy = {
  hero: {
    eyebrow: "Solutions",
    headline: "Cloud solutions that fit your goals and simplify your operations",
    description:
      "We help you find the right cloud option, then assist with sourcing, implementing, and managing it so you get improved transparency and reduced complexity.",
  },
  problem: {
    eyebrow: "The cost of going it alone",
    headline: "Why cloud migrations fail without the right partner",
    description:
      "Moving to the cloud can cut costs and improve flexibility, but poor planning, wrong tool choices, and lack of ongoing management lead to overspend, security gaps, and frustrated teams.",
    items: [
      {
        headline: "Wrong fit and wasted spend.",
        description:
          "Choosing the wrong cloud provider or services leads to overpaying, underusing, or locking into solutions that don't scale. Many organizations overprovision or miss reserved capacity savings.",
      },
      {
        headline: "Security and compliance gaps.",
        description:
          "Cloud security is a shared responsibility. Misconfigurations, weak access controls, and missing compliance controls put data and reputation at risk, especially in regulated industries.",
      },
      {
        headline: "In-house teams stretched thin.",
        description:
          "Managing multiple cloud services, integrations, and updates takes dedicated time and expertise. Without it, migrations drag on and day-to-day operations suffer.",
      },
    ] as [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem],
  },
  comparison: {
    eyebrow: "Comparison to alternatives",
    headline: "Cloud Solutions vs DIY vs single-vendor lock-in",
    rowLabels: [
      "Approach",
      "Cost and scalability",
      "Security and compliance",
      "Ongoing management",
      "Flexibility",
    ],
    columns: [
      {
        header: "Cloud Solutions (us)",
        cells: [
          "Assessment, planning, and implementation with ongoing management",
          "Right-sized resources and reserved capacity; scale up or down as needed",
          "Hardening, access controls, and compliance support (e.g. HIPAA)",
          "Monitoring, updates, and optimization so you stay secure and efficient",
          "Multi-cloud or hybrid options; no lock-in to one vendor",
        ],
      },
      {
        header: "DIY cloud",
        cells: [
          "You choose and configure everything yourself",
          "Easy to overprovision or miss savings; scaling can be ad hoc",
          "You own security and compliance; misconfigurations are common",
          "Your team handles all maintenance and optimization",
          "Full control but high effort and risk",
        ],
      },
      {
        header: "Single-vendor only",
        cells: [
          "One provider for everything; vendor drives the roadmap",
          "Often higher list prices; less room to optimize across providers",
          "Vendor's defaults; may or may not meet your compliance needs",
          "Vendor-managed to a point; custom needs can be costly",
          "Lock-in; switching is expensive and slow",
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases / industries",
    headline: "Use cases for Cloud Solutions",
    useCases: [
      {
        title: "Healthcare and HIPAA",
        description:
          "Secure, compliant cloud for EHR, telehealth, and patient data with proper access controls and audit trails.",
      },
      {
        title: "Remote and hybrid work",
        description:
          "Reliable access to apps and data from anywhere, with consistent security and performance.",
      },
      {
        title: "Scaling without overbuilding",
        description:
          "Grow capacity when you need it and scale back when you don't, without big upfront hardware spend.",
      },
      {
        title: "Disaster recovery and backup",
        description:
          "Cloud-based backup and failover so you can recover quickly from outages or incidents.",
      },
      {
        title: "Application modernization",
        description:
          "Move legacy apps to the cloud or adopt SaaS and PaaS with a clear migration and support plan.",
      },
      {
        title: "Multi-location organizations",
        description:
          "One coherent cloud strategy across sites with centralized management and visibility.",
      },
    ],
  },
  cta: {
    headline: "Ready to move to the cloud the right way?",
    subtext:
      "Let's talk about your goals and how we can help you choose, implement, and manage cloud solutions that fit.",
    ctaLabel: "Get in touch",
  },
};
