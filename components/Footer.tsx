import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { services } from "@/components/landing/ServicesOverview";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#072446] text-white">
      {/* Main grid */}
      <div className="mx-auto max-w-8xl px-4 pt-14 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand + contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex flex-col gap-0.5 leading-none">
              <span className="text-xl font-semibold tracking-tight">ITEK</span>
              <span className="text-[10px] font-normal uppercase tracking-widest text-white/50">
                Solutions
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Enterprise-level IT managed services for healthcare, dental, and growing businesses.
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href="tel:+14165612888"
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-white/40" />
                  +1 (416) 561-2888
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@iteksolutions.ca"
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-white/40" />
                  support@iteksolutions.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Solutions
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {services.map(({ title, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Resources", href: "/resources" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-white/40">
            © {currentYear} ITEK Solutions. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Managed IT · Cloud · Security · Strategic IT Leadership
          </p>
        </div>
      </div>
    </footer>
  );
}
