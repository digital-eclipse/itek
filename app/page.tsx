import { Hero } from "@/components/landing/Hero";
import { Testimonials } from "@/components/landing/Testimonials";
import { ServicesOverview } from "@/components/landing/ServicesOverview";
import { StatsWhy } from "@/components/landing/StatsWhy";
import { FinalCta } from "@/components/landing/FinalCta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Testimonials />
      <ServicesOverview />
      <StatsWhy />
      <FinalCta />
    </div>
  );
}
