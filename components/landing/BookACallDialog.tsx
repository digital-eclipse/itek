"use client";

import * as React from "react";
import { ChevronDown, MessagesSquare } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/components/landing/ServicesOverview";

type BookACallContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  openDialog: () => void;
};

const BookACallContext = React.createContext<BookACallContextValue | null>(null);

export function useBookACallDialog() {
  const ctx = React.useContext(BookACallContext);
  if (!ctx) {
    throw new Error("useBookACallDialog must be used within BookACallDialogProvider");
  }
  return ctx;
}

/** Client-only button that opens the Book a call dialog. Use for Hero CTA. */
export function BookACallButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { openDialog } = useBookACallDialog();
  return (
    <Button type="button" onClick={openDialog} {...props}>
      {children}
    </Button>
  );
}

export function BookACallDialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);

  const openDialog = React.useCallback(() => setOpen(true), []);

  const value = React.useMemo(
    () => ({ open, setOpen, openDialog }),
    [open, openDialog]
  );

  return (
    <BookACallContext.Provider value={value}>
      {children}
      <BookACallDialog open={open} onOpenChange={setOpen} />
    </BookACallContext.Provider>
  );
}

function BookACallDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [status, setStatus] = React.useState<"idle" | "sending">("idle");
  const [error, setError] = React.useState<string | null>(null);
  // Timestamp the form was opened — used server-side as a bot time-trap.
  const startedAtRef = React.useRef<number>(0);

  React.useEffect(() => {
    if (open) {
      startedAtRef.current = Date.now();
      setError(null);
    }
  }, [open]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          inquiry: data.get("inquiry"),
          website: data.get("website"), // honeypot
          startedAt: startedAtRef.current,
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.error || "Something went wrong. Please try again.");
      }

      form.reset();
      onOpenChange(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <form onSubmit={handleSubmit}>
          {/* Honeypot: hidden from users, bots tend to fill it. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />
          <DialogHeader>
            <div className="mb-1 flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MessagesSquare className="size-5" />
            </div>
            <DialogTitle className="text-xl font-semibold tracking-tight">
              Get in touch
            </DialogTitle>
            <DialogDescription>
              Share your details and we&apos;ll get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="book-name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="book-name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="h-10"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="book-company">Company</Label>
                <Input
                  id="book-company"
                  name="company"
                  placeholder="Company name"
                  className="h-10"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="book-email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="book-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="h-10"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="book-phone">Phone number</Label>
                <Input
                  id="book-phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="h-10"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="book-service">Service interested in</Label>
              <div className="relative">
                <select
                  id="book-service"
                  name="service"
                  defaultValue=""
                  className="h-10 w-full appearance-none rounded-md border border-input bg-transparent px-3 py-1 pr-9 text-sm text-foreground shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <option value="">Select a service (optional)</option>
                  {services.map(({ title }) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                  <option value="Other / Not sure">Other / Not sure</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="book-inquiry">Inquiry</Label>
              <Textarea
                id="book-inquiry"
                name="inquiry"
                placeholder="What would you like to discuss?"
                rows={3}
                className="resize-none"
              />
            </div>
          </div>
          {error ? (
            <p className="mb-2 rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
              {error}
            </p>
          ) : null}
          <DialogFooter className="gap-3 sm:gap-4">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="mr-1" disabled={status === "sending"}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
