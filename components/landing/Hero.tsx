import { ChevronDown } from "lucide-react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BookACallButton } from "@/components/landing/BookACallDialog";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-3.5rem)] flex-col justify-center overflow-hidden border-b border-primary px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-20"
      aria-label="Hero"
    >
      <BackgroundGradientAnimation
        containerClassName="absolute inset-0"
        className="flex flex-col justify-center"
        interactive={false}
      >
        <div className="mx-auto flex w-full max-w-8xl flex-col justify-center px-5 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-3xl">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl sm:leading-snug md:text-4xl md:leading-snug lg:text-5xl lg:leading-[1.15] xl:text-[2.75rem]">
              Do you want to run your business without IT headaches?
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg md:text-xl">
              We proactively monitor, maintain, and secure your entire IT
              infrastructure. So you never deal with downtime, cyberattacks, or
              surprise tech costs again.
            </p>
            <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-2 text-xs font-medium text-white backdrop-blur-sm sm:mt-6 sm:px-4 sm:text-sm">
              <span>24/7 expert support</span>
              <span className="text-white/50">·</span>
              <span>Zero stress</span>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
              <BookACallButton
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto"
              >
                Get in Touch
              </BookACallButton>
              <a
                href="#social-proof"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                or Keep exploring
                <ChevronDown className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}
