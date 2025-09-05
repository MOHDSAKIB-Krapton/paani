import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { TestimonialsSection } from "@/components/testimonials";
import { CTABanner } from "@/components/cta-banner";
// import { TestSection } from "@/components/test";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <TestSection /> */}
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
}
