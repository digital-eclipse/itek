"use client";

import * as React from "react";
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
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    // eslint-disable-next-line no-console
    form.reset();
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold tracking-tight">
              Get in touch
            </DialogTitle>
            <DialogDescription>
              Share your details and we&apos;ll get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="book-name">Name</Label>
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
            <div className="grid gap-2">
              <Label htmlFor="book-email">Email</Label>
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
          <DialogFooter className="gap-3 sm:gap-4">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="mr-1">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Request a call</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
