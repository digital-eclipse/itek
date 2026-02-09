import type { ProblemSplitItem, ServicePageCopy } from "../types";

export const href = "/consulting-strategy" as const;

export const copy: ServicePageCopy = {
  hero: {
    eyebrow: "Solutions",
    headline: "IT projects organized, executed, and completed on target and on budget",
    description:
      "We assist with the organization, execution, and completion of your IT projects. Strategy and execution in one place so your projects stay on target and within budget.",
  },
  problem: {
    eyebrow: "The cost of chaos",
    headline: "Why IT projects fail without structure and expertise",
    description:
      "Projects slip, budgets blow, and scope creeps when there's no clear plan, ownership, or expertise. Many organizations start projects without a roadmap, then struggle to finish on time and on budget.",
    items: [
      {
        headline: "Projects slip and budgets blow.",
        description:
          "Without clear scope, timelines, and ownership, projects drag on and costs spike. Change requests and scope creep add more. By the end, you've spent more and gotten less than you planned.",
      },
      {
        headline: "In-house teams are stretched thin.",
        description:
          "Day-to-day support and projects compete for the same people. Projects get deprioritized or done in a rush. Specialized work (migrations, integrations) may be beyond your team's bandwidth.",
      },
      {
        headline: "No single view of progress.",
        description:
          "Without project management, status updates, and documentation, stakeholders don't know where things stand. Decisions get delayed and risks go unnoticed until they become problems.",
      },
    ] as [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem],
  },
  comparison: {
    eyebrow: "Comparison to alternatives",
    headline: "Consulting & Project Management vs DIY vs vendor-only",
    rowLabels: [
      "Approach",
      "Scope and timeline",
      "Cost and predictability",
      "Expertise and execution",
      "Visibility and reporting",
    ],
    columns: [
      {
        header: "Consulting & PM (us)",
        cells: [
          "Structured planning, execution, and completion; clear scope and roles",
          "Defined milestones and timelines; change control so scope stays clear",
          "Fixed or phased pricing; no surprise overruns from scope creep",
          "Project management and technical expertise; you stay in control",
          "Regular status, documentation, and reporting so you know where things stand",
        ],
      },
      {
        header: "DIY projects",
        cells: [
          "You plan and run everything; scope and roles can be unclear",
          "Timelines often slip; scope creep is common",
          "Unpredictable; overruns and rework add cost",
          "Limited by your team's time and expertise",
          "Status and documentation depend on your team's bandwidth",
        ],
      },
      {
        header: "Vendor-only",
        cells: [
          "Vendor drives scope and timeline; you may have less control",
          "Vendor timelines may not match your priorities",
          "Vendor pricing; change orders and overruns can add cost",
          "Vendor expertise but you may be locked into their approach",
          "Reporting depends on vendor; may be less transparent",
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases / industries",
    headline: "Use cases for Consulting & Project Management",
    useCases: [
      {
        title: "Migrations and upgrades",
        description:
          "Plan and execute EHR, cloud, or infrastructure migrations with clear scope, timeline, and ownership.",
      },
      {
        title: "New office or location",
        description:
          "Get a new site up and running with structured planning and execution so you open on time and on budget.",
      },
      {
        title: "Integrations and implementations",
        description:
          "Implement new systems, integrations, or workflows with project management and technical support.",
      },
      {
        title: "Teams without a PM",
        description:
          "Get project management and execution without hiring a full-time PM or overloading your team.",
      },
      {
        title: "Multi-project coordination",
        description:
          "Coordinate several projects with one view of status, risks, and dependencies.",
      },
      {
        title: "Strategy and roadmap",
        description:
          "Turn strategy into a clear roadmap and execution plan so you know what to do next.",
      },
    ],
  },
  cta: {
    headline: "Ready to get your IT projects on track?",
    subtext:
      "Let's talk about your projects and how we can help you plan, execute, and complete them on target and within budget.",
    ctaLabel: "Get in touch",
  },
};
