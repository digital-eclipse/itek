"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Menu, LayoutGrid, User, LifeBuoy } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useBookACallDialog } from "@/components/landing/BookACallDialog";
import { services } from "@/components/landing/ServicesOverview";

const SCREENCONNECT_URL = "https://iteksolutions.screenconnect.com/";

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
  title: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            {children && (
              <div className="text-muted-foreground line-clamp-2">{children}</div>
            )}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function MobileNavActions({ onClose }: { onClose: () => void }) {
  const { openDialog } = useBookACallDialog();
  return (
    <>
      <Button
        variant="outline"
        className="w-full justify-start gap-2"
        onClick={() => {
          openDialog();
          onClose();
        }}
      >
        <Phone className="size-4" />
        Call
      </Button>
      <Button
        variant="outline"
        className="w-full justify-start gap-2"
        onClick={() => {
          openDialog();
          onClose();
        }}
      >
        <Mail className="size-4" />
        Email
      </Button>
    </>
  );
}

export function Header() {
  const { openDialog } = useBookACallDialog();
  const [sheetOpen, setSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.06] bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="ITEK Solutions home">
          <Image
            src="/logo/logo.png"
            alt="ITEK Solutions"
            width={1920}
            height={1080}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/#services" title="Overview" key="overview">
                      View all solutions
                    </ListItem>
                    {services.map(({ title, href, shortDescription }) => (
                      <ListItem key={href} title={title} href={href}>
                        {shortDescription}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={openDialog} aria-label="Call us" className="gap-1.5 text-sm font-medium">
              <Phone className="size-4 shrink-0" />
              +1 (416) 561-2888
            </Button>
            <Button variant="ghost" size="icon-sm" onClick={openDialog} aria-label="Email us">
              <Mail className="size-4" />
            </Button>
          </div>
          <Button asChild size="sm" className="gap-1.5 font-semibold">
            <a href={SCREENCONNECT_URL} target="_blank" rel="noopener noreferrer">
              <LifeBuoy className="size-4 shrink-0" />
              Get IT Support
            </a>
          </Button>
        </div>

        {/* Mobile: menu button + bottom sheet */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto rounded-t-2xl">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pb-6">
              <Link
                href="/about"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
                onClick={() => setSheetOpen(false)}
              >
                <User className="size-4 shrink-0 text-muted-foreground" />
                About
              </Link>
              <Link
                href="/#services"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
                onClick={() => setSheetOpen(false)}
              >
                <LayoutGrid className="size-4 shrink-0 text-muted-foreground" />
                Overview (Solutions)
              </Link>
              {services.map(({ title, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 pl-10 text-sm font-medium text-foreground hover:bg-accent"
                  onClick={() => setSheetOpen(false)}
                >
                  <Icon className="size-4 shrink-0 text-muted-foreground" />
                  {title}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                <Button asChild className="w-full justify-start gap-2 font-semibold">
                  <a
                    href={SCREENCONNECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSheetOpen(false)}
                  >
                    <LifeBuoy className="size-4" />
                    Get IT Support
                  </a>
                </Button>
                <MobileNavActions onClose={() => setSheetOpen(false)} />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
