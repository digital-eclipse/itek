import type { ProblemSplitItem, ServicePageCopy } from "../types";

export const href = "/virtual-cio" as const;

export const copy: ServicePageCopy = {
  hero: {
    eyebrow: "Solutions",
    headline: "Strategic IT leadership without hiring a CIO",
    description:
      "Need help setting things up in a new office or deciding what you need? We help get your business up and running quickly with strategic, Chief Information Officer-level guidance.",
  },
  problem: {
    eyebrow: "The leadership gap",
    headline: "Why strategic IT decisions need CIO-level thinking",
    description:
      "Technology choices affect cost, security, and growth. Many organizations lack a CIO or senior IT leader to set strategy, prioritize projects, and align IT with the business. Without that, decisions are reactive and costly.",
    items: [
      {
        headline: "No one owns IT strategy.",
        description:
          "Without a CIO or equivalent, no one owns the big picture. Technology decisions are ad hoc, reactive, or driven by vendors. Priorities compete and budgets get spent on the wrong things.",
      },
      {
        headline: "New offices and projects need a plan.",
        description:
          "Opening a new location or starting a major project requires decisions about infrastructure, security, and vendors. Without strategic guidance, you overbuild, underbuild, or lock into the wrong path.",
      },
      {
        headline: "Boards and leadership want answers.",
        description:
          "Leadership and boards ask about IT risk, compliance, and strategy. Without a dedicated leader, answers are incomplete or delayed, and trust suffers.",
      },
    ] as [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem],
  },
  comparison: {
    eyebrow: "Comparison to alternatives",
    headline: "Virtual CIO vs full-time CIO vs no strategic lead",
    rowLabels: [
      "Approach",
      "Strategy and roadmap",
      "Cost and predictability",
      "Alignment with business",
      "Scalability",
    ],
    columns: [
      {
        header: "Virtual CIO (us)",
        cells: [
          "Strategic guidance, roadmap, and prioritization without full-time hire",
          "Defined engagement; strategy and decisions when you need them",
          "Predictable cost; no salary, benefits, or recruiting for a CIO",
          "Alignment with your business goals and budget; vendor-neutral advice",
          "Scale engagement up or down as your needs change",
        ],
      },
      {
        header: "Full-time CIO",
        cells: [
          "Dedicated leader; full ownership of IT strategy and execution",
          "Always available; deep context and continuity",
          "High fixed cost; salary, benefits, and recruiting",
          "Strong alignment if resourced and empowered",
          "Requires hiring and retention; slow to scale",
        ],
      },
      {
        header: "No strategic lead",
        cells: [
          "No one owns strategy; decisions are reactive or vendor-driven",
          "Ad hoc; no clear roadmap or prioritization",
          "No CIO cost but higher risk of wrong spend and rework",
          "IT may not align with business; priorities unclear",
          "Hard to scale strategy; same gap at any size",
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases / industries",
    headline: "Use cases for Virtual CIO",
    useCases: [
      {
        title: "New office or location",
        description:
          "Get strategic guidance on what you need to open a new site, from infrastructure to security to vendors.",
      },
      {
        title: "Growing SMBs",
        description:
          "Get CIO-level strategy and prioritization without the cost of hiring a full-time executive.",
      },
      {
        title: "Boards and leadership",
        description:
          "Answer board and leadership questions about IT risk, compliance, and strategy with clear, credible input.",
      },
      {
        title: "Vendor and technology selection",
        description:
          "Vendor-neutral guidance on choosing platforms, partners, and technology so you don't overbuy or lock in wrong.",
      },
      {
        title: "Roadmap and prioritization",
        description:
          "Turn business goals into an IT roadmap and prioritized project list so you know what to do next.",
      },
      {
        title: "Mergers and acquisitions",
        description:
          "Strategic guidance on integrating IT after a merger or acquisition so you consolidate and simplify.",
      },
    ],
  },
  cta: {
    headline: "Ready to get strategic IT leadership without hiring a CIO?",
    subtext:
      "Let's talk about your goals and how we can help you make the right technology decisions and get new offices or projects up and running.",
    ctaLabel: "Get in touch",
  },
};
