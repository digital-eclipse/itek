import type { ProblemSplitItem, ServicePageCopy } from "../types";

export const href = "/managed-security" as const;

export const copy: ServicePageCopy = {
  hero: {
    eyebrow: "Solutions",
    headline: "Cybersecurity and data protection that keep you and your patients safe",
    description:
      "We safeguard the integrity of your data and network operations with managed security services. Stay ahead of threats and meet compliance without overloading your team.",
  },
  problem: {
    eyebrow: "The cost of exposure",
    headline: "Why cybersecurity threats cost more than managed security",
    description:
      "Ransomware, breaches, and compliance failures can shut down operations and damage trust. Many organizations lack the expertise and time to stay ahead of threats and regulations.",
    items: [
      {
        headline: "Threats are constant and evolving.",
        description:
          "Ransomware, phishing, and targeted attacks hit healthcare and SMBs every day. Without monitoring, hardening, and response plans, one incident can cost far more than ongoing security.",
      },
      {
        headline: "Compliance adds pressure.",
        description:
          "HIPAA, SOC 2, and other frameworks require documented controls, access management, and evidence of due care. Gaps lead to audit findings, fines, and reputational damage.",
      },
      {
        headline: "In-house security is scarce and costly.",
        description:
          "Security talent is expensive and hard to retain. Small and midsize teams often can't afford dedicated security staff, so security becomes an afterthought.",
      },
    ] as [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem],
  },
  comparison: {
    eyebrow: "Comparison to alternatives",
    headline: "Managed Security vs DIY vs point tools only",
    rowLabels: [
      "Approach",
      "Threat detection and response",
      "Compliance and documentation",
      "Cost and predictability",
      "Scalability",
    ],
    columns: [
      {
        header: "Managed Security (us)",
        cells: [
          "Ongoing monitoring, hardening, and incident response",
          "24/7 or business-hours monitoring; defined response and escalation",
          "Documentation, access controls, and evidence for audits (e.g. HIPAA)",
          "Fixed monthly cost; no surprise incident or breach costs",
          "Scale coverage and controls as you grow or regulations tighten",
        ],
      },
      {
        header: "DIY security",
        cells: [
          "You choose and run tools; you own response and policies",
          "Depends on your team's time and expertise; after-hours gaps",
          "You own policies and evidence; often incomplete for audits",
          "Unpredictable; incidents and audits spike costs",
          "Limited by your team; scaling means hiring",
        ],
      },
      {
        header: "Point tools only",
        cells: [
          "Antivirus or firewall only; no holistic program",
          "Limited visibility; alerts without dedicated response",
          "Tools don't document compliance; you still own evidence",
          "Tool costs plus your time; incidents still costly",
          "Adding coverage means more tools and more complexity",
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases / industries",
    headline: "Use cases for Managed Security",
    useCases: [
      {
        title: "Healthcare and HIPAA",
        description:
          "Safeguard patient data and meet HIPAA with documented controls, access management, and breach response readiness.",
      },
      {
        title: "Compliance-focused industries",
        description:
          "Meet SOC 2, PCI, or other frameworks with policies, monitoring, and evidence for auditors.",
      },
      {
        title: "Ransomware and breach prevention",
        description:
          "Hardening, monitoring, and backup verification so you detect and recover from incidents faster.",
      },
      {
        title: "Remote and hybrid work",
        description:
          "Secure access from anywhere with consistent policies, MFA, and endpoint protection.",
      },
      {
        title: "Teams without a CISO",
        description:
          "Get strategic security guidance and execution without hiring a full-time security leader.",
      },
      {
        title: "Mergers and acquisitions",
        description:
          "Integrate new systems and locations into a single, secure, compliant posture.",
      },
    ],
  },
  cta: {
    headline: "Ready to strengthen your security posture?",
    subtext:
      "Let's talk about your risks and how we can help you stay ahead of threats and meet compliance without overloading your team.",
    ctaLabel: "Get in touch",
  },
};
