import Link from "next/link";
import { services } from "@/components/landing/ServicesOverview";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] bg-background">
      <div className="mx-auto max-w-8xl px-4 py-10 sm:px-6 lg:px-8 sm:py-12">
        <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1 lg:items-center">
            <Link href="/" className="inline-flex flex-col items-center gap-0.5 text-center leading-none">
              <span className="text-xl font-semibold leading-none tracking-tight text-foreground sm:text-2xl">
                ITEK
              </span>
              <span className="text-[10px] font-normal lowercase leading-none text-muted-foreground tracking-widest sm:text-xs">
                solutions
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professional technology solutions for your business.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              © {currentYear} ITEK Solutions. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center lg:col-span-2">
            <h3 className="text-sm font-medium text-foreground">Solutions</h3>
            <ul className="mt-4 grid w-full grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2 sm:justify-items-center">
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Overview
                </Link>
              </li>
              {services.map(({ title, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-medium text-foreground">Company</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
