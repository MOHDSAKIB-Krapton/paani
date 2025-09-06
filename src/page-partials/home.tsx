"use client";

import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials";
import { CTABanner } from "@/components/cta-banner";
import WaterOrderBanner from "@/components/water-order-banner";
import InquiryForm from "@/components/common/inquirey-form";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WaterOrderBanner />
      <InquiryForm
        variant="section"
        title="Inquire About Our Products"
        description="Fill out the form below to receive more information."
      />
      <ServicesSection />
      <AboutSection />
      <CTABanner />
      <TestimonialsSection />
    </main>
  );
}
