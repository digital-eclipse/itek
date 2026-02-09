"use client";

import { BookACallButton } from "@/components/landing/BookACallDialog";

export function ServicePageHeroCta() {
  return (
    <BookACallButton className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition-colors hover:bg-primary/90 hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
      Get in touch
    </BookACallButton>
  );
}
