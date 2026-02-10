import Link from "next/link";
import { tw } from "@/lib/theme";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <section className="flex min-h-[60vh] flex-col items-center justify-center border-b border-border py-16 md:py-24">
        <div className={`mx-auto max-w-xl text-center ${tw.containerPadding}`}>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Error 404
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground [font-family:var(--font-inter)]">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
