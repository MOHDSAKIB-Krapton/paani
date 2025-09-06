"use client";

import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials";
import { CTABanner } from "@/components/cta-banner";
import WaterOrderBanner from "@/components/water-order-banner";
import InquiryForm from "@/components/common/inquirey-form";
import { useRef, useState } from "react";

export default function HomePage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [preFillData, setPreFillData] = useState({
    quantity: "1L",
    bottleType: "Purelay",
  });

  const handleOrderNow = (quantity: string, bottleType: string = "Purelay") => {
    setPreFillData({ quantity, bottleType });
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen">
      <HeroSection />
      <WaterOrderBanner onOrderNow={handleOrderNow} />

      <div ref={formRef}>
        <InquiryForm
          variant="section"
          title="Inquire About Our Products"
          description="Fill out the form below to receive more information."
          preFillData={preFillData}
        />
      </div>
      <ServicesSection />
      <AboutSection />
      <CTABanner />
      <TestimonialsSection />
    </main>
  );
}
