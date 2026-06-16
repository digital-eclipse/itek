import Link from "next/link";
import {
  Headphones,
  Cloud,
  Users,
  Server,
  Shield,
  Activity,
  Database,
  Briefcase,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

export const services = [
  {
    title: "Managed Support",
    shortDescription: "Daily support and monitoring",
    description:
      "We proactively manage your IT infrastructure with daily support, maintenance and monitoring of technology.",
    href: "/managed-support",
    icon: Headphones,
  },
  {
    title: "Cloud Solutions",
    shortDescription: "Sourcing, implementation, management",
    description:
      "We help you find the Cloud option that best meets your goals. We assist with sourcing, implementing and managing it for improved transparency and reduced complexity.",
    href: "/cloud-solutions",
    icon: Cloud,
  },
  {
    title: "Elevate Your In-House IT",
    shortDescription: "Expert IT without hiring",
    description:
      "Building a dedicated IT team can be costly. We provide subject matter experts to keep your systems secure and up-to-date. It's cost-effective and less stressful than hiring in-house.",
    href: "/elevate-in-house-it",
    icon: Users,
  },
  {
    title: "Future-proof Your Infrastructure",
    shortDescription: "Visibility, security, compliance",
    description:
      "We simplify your infrastructure management and leverage your investment. We deliver cloud-based solutions that improve your visibility, security and compliance. Keeping your infrastructure up-to-date is vital.",
    href: "/future-proof-infrastructure",
    icon: Server,
  },
  {
    title: "Managed Security",
    shortDescription: "Cybersecurity and data protection",
    description:
      "We keep you and your patients safe from cybersecurity threats. We safeguard the integrity of your data and network operations with managed security services.",
    href: "/managed-security",
    icon: Shield,
  },
  {
    title: "Business Continuity",
    shortDescription: "No downtime, no interruption",
    description:
      "Downtime is not an option when you're caring for patients. We ensure your business keeps functioning without interruption.",
    href: "/business-continuity",
    icon: Activity,
  },
  {
    title: "Backup & Disaster Recovery",
    shortDescription: "Continuous data protection",
    description:
      "What would happen if your records vanished because of a technical issue? We ensure you have continuous data protection. You won't have to think about it.",
    href: "/backup-disaster-recovery",
    icon: Database,
  },
  {
    title: "Consulting & Project Management",
    shortDescription: "Strategy and execution",
    description:
      "We assist with the organization, execution and completion of your IT projects. We offer a virtual CIO experience with strategic, Chief Information Office-level consultation. We keep your projects on target and within budget.",
    href: "/consulting-strategy",
    icon: Briefcase,
  },
];

export function getServiceByHref(href: string) {
  return services.find((s) => s.href === href) ?? null;
}

function ServiceCell({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-background p-6 transition-colors hover:bg-muted/50 md:p-8"
    >
      <Icon
        className="size-8 text-primary md:size-9"
        aria-hidden
      />
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground md:text-xl">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
        Learn more <ChevronRight className="size-4" />
      </span>
    </Link>
  );
}

export function ServicesOverview() {
  return (
    <section
      id="services"
      className="border-b border-black/[0.06] bg-background py-20 md:py-28"
      aria-label="Services overview"
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Solutions
        </p>
        <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          What we offer
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground">
          End-to-end IT solutions to keep your business secure, connected, and running smoothly.
        </p>
        <div className="mt-14 overflow-hidden border border-black/[0.12] bg-background">
          <div className="grid grid-cols-1 divide-x-0 divide-y divide-black/[0.12] sm:grid-cols-2 sm:divide-x lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCell
                key={service.href}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
