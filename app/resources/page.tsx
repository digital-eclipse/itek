import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | ITEK Solutions",
  description: "Resources and guides from ITEK Solutions.",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-black/[0.06] py-16 md:py-24">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Resources
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Guides, best practices, and resources to help you get the most from your IT
            infrastructure. More content coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
