import type { ProblemSplitItem, ServicePageCopy } from "../types";

export const href = "/elevate-in-house-it" as const;

export const copy: ServicePageCopy = {
  hero: {
    eyebrow: "Solutions",
    headline: "Expert IT without the cost and stress of hiring in-house",
    description:
      "We provide subject matter experts to keep your systems secure and up to date. It's cost-effective and less stressful than building a full internal IT team.",
  },
  problem: {
    eyebrow: "The cost of hiring",
    headline: "Why building a full in-house IT team is hard and expensive",
    description:
      "Recruiting and retaining skilled IT staff is costly and slow. Salaries, benefits, training, and turnover add up, and many organizations still can't cover all the expertise they need.",
    items: [
      {
        headline: "Hiring is slow and expensive.",
        description:
          "IT roles take months to fill. Salaries and benefits for qualified staff are high, and turnover means you lose knowledge and start over. Small and midsize teams often can't afford specialists for security, cloud, or infrastructure.",
      },
      {
        headline: "Coverage and expertise gaps.",
        description:
          "One or two people can't be experts in everything. After-hours, vacations, and sick leave create gaps. Projects and day-to-day support compete for the same limited time.",
      },
      {
        headline: "Keeping skills current is hard.",
        description:
          "Technology changes fast. In-house staff need time and budget for training and certifications. Without it, your systems and security fall behind.",
      },
    ] as [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem],
  },
  comparison: {
    eyebrow: "Comparison to alternatives",
    headline: "Elevate In-House IT vs full hiring vs going it alone",
    rowLabels: [
      "Approach",
      "Cost and predictability",
      "Expertise and coverage",
      "Scalability",
      "Focus on your business",
    ],
    columns: [
      {
        header: "Elevate In-House (us)",
        cells: [
          "Experts augment your team; you keep control, we fill gaps",
          "Predictable cost; no salaries, benefits, or recruiting overhead",
          "Specialists in security, cloud, infrastructure; coverage when you need it",
          "Scale up or down by engagement; no hiring or layoffs",
          "Your team focuses on strategy; we handle execution and support",
        ],
      },
      {
        header: "Full in-house only",
        cells: [
          "You hire and manage everyone; full-time salaries and benefits",
          "High fixed cost; recruiting and turnover add more",
          "Limited by who you hire; after-hours and specialty gaps remain",
          "Requires hiring to scale; slow to add or reduce capacity",
          "You own training, retention, and day-to-day management",
        ],
      },
      {
        header: "No dedicated IT",
        cells: [
          "Break-fix or ad hoc help; no ongoing partnership",
          "Unpredictable; costs spike when things break or projects pile up",
          "No deep expertise; reactive support only",
          "Hard to scale; same ad hoc model at any size",
          "Your team spends time on IT fires instead of core work",
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases / industries",
    headline: "Use cases for Elevate In-House IT",
    useCases: [
      {
        title: "Growing SMBs",
        description:
          "Get enterprise-level expertise without enterprise-level headcount or budget.",
      },
      {
        title: "Teams with a small IT staff",
        description:
          "Augment your existing team with specialists for security, cloud, or projects so your staff isn't stretched thin.",
      },
      {
        title: "Healthcare and regulated industries",
        description:
          "Access experts who understand compliance and security so you stay ahead of audits and threats.",
      },
      {
        title: "Seasonal or project-based needs",
        description:
          "Ramp up for migrations, upgrades, or audits, then scale back when the work is done.",
      },
      {
        title: "Leadership without deep IT",
        description:
          "Strategic guidance and execution so you make good technology decisions without hiring a CIO.",
      },
      {
        title: "Reducing turnover risk",
        description:
          "Less dependence on one or two key people; knowledge and support continue even when staff changes.",
      },
    ],
  },
  cta: {
    headline: "Ready to elevate your IT without the hiring headache?",
    subtext:
      "Let's talk about your team, your gaps, and how we can provide the expertise you need without the cost of full-time hires.",
    ctaLabel: "Get in touch",
  },
};
