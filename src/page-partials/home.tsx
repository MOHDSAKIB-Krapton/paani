import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { CTABanner } from "@/components/cta-banner";
import { WhyPurelayWater } from "@/components/why-us";
import dynamic from "next/dynamic";
import WaterOrderBannerClient from "@/components/water-order-client";

const FeaturesSection = dynamic(() => import("@/components/features"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
});

const TestimonialsSection = dynamic(() => import("@/components/testimonials"), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100" />,
});

const BenefitsSection = dynamic(() => import("@/components/benifits"), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100" />,
});

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WaterOrderBannerClient />
      <WhyPurelayWater />
      <ServicesSection />
      <BenefitsSection />
      <AboutSection />
      <FeaturesSection />
      <CTABanner />
      <TestimonialsSection />
    </main>
  );
}
