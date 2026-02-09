import type { ProblemSplitItem, ServicePageCopy } from "../types";

export const href = "/backup-disaster-recovery" as const;

export const copy: ServicePageCopy = {
  hero: {
    eyebrow: "Solutions",
    headline: "Continuous data protection so you don't have to think about it",
    description:
      "What would happen if your records vanished because of a technical issue? We ensure you have continuous data protection and a clear path to recovery so you won't have to wonder.",
  },
  problem: {
    eyebrow: "The cost of data loss",
    headline: "Why backup and disaster recovery matter more than ever",
    description:
      "Ransomware, hardware failure, and human error can wipe out data. Many organizations have backups that fail, are too slow to restore, or have never been tested. When you need to recover, the cost of not being ready is far higher than the cost of doing it right.",
    items: [
      {
        headline: "Backups fail or are too slow.",
        description:
          "Backups can be corrupted, incomplete, or too old to be useful. Restoring from tape or slow cloud backups can take days. Without verification and testing, you won't know until it's too late.",
      },
      {
        headline: "Ransomware changes the game.",
        description:
          "Attackers target backups and delete or encrypt them. You need backup strategies that survive ransomware, plus verification and recovery testing so you can restore quickly.",
      },
      {
        headline: "No plan means chaos when it happens.",
        description:
          "Without documented recovery procedures, roles, and testing, recovery takes longer and costs more. Communication breaks down and critical systems stay down longer than they should.",
      },
    ] as [ProblemSplitItem, ProblemSplitItem, ProblemSplitItem],
  },
  comparison: {
    eyebrow: "Comparison to alternatives",
    headline: "Backup & Disaster Recovery vs backup-only vs no backup",
    rowLabels: [
      "Approach",
      "Recovery time and testing",
      "Ransomware and security",
      "Cost and predictability",
      "Compliance and audit",
    ],
    columns: [
      {
        header: "Backup & DR (us)",
        cells: [
          "Continuous protection, verification, and recovery planning",
          "Defined recovery targets; regular testing so you know it works",
          "Immutable or air-gapped options; backup verification and testing",
          "Predictable monthly cost; no surprise recovery or data loss cost",
          "Documentation and evidence for audits (e.g. HIPAA)",
        ],
      },
      {
        header: "Backup only",
        cells: [
          "Backups run; little or no verification or recovery planning",
          "Recovery time unknown; first real test is during an incident",
          "Backups may be encrypted or deleted by ransomware",
          "Backup cost only until you need to recover; then recovery cost",
          "Often minimal documentation; harder to demonstrate due care",
        ],
      },
      {
        header: "No backup",
        cells: [
          "Hope nothing fails; no protection or recovery plan",
          "Recovery may be impossible; data loss can be permanent",
          "No protection against ransomware or hardware failure",
          "No backup cost until you lose data; then very high cost",
          "Compliance and audit risk; no evidence of data protection",
        ],
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases / industries",
    headline: "Use cases for Backup & Disaster Recovery",
    useCases: [
      {
        title: "Healthcare and patient records",
        description:
          "Protect EHR and patient data with continuous backup, verification, and recovery testing for HIPAA and patient safety.",
      },
      {
        title: "Ransomware readiness",
        description:
          "Backup strategies that survive ransomware, plus verification and recovery testing so you can restore without paying.",
      },
      {
        title: "Critical applications",
        description:
          "Define and test recovery for your most important systems so you know they can come back quickly.",
      },
      {
        title: "Compliance-focused industries",
        description:
          "Documented backup and recovery procedures and evidence for auditors and due care.",
      },
      {
        title: "Multi-site organizations",
        description:
          "One backup and recovery strategy across locations with clear roles and tested procedures.",
      },
      {
        title: "Peace of mind",
        description:
          "Know your data is protected and that you can recover when you need to, without guessing.",
      },
    ],
  },
  cta: {
    headline: "Ready to protect your data and know you can recover?",
    subtext:
      "Let's talk about your critical data and how we can help you get continuous protection and a clear path to recovery.",
    ctaLabel: "Get in touch",
  },
};
