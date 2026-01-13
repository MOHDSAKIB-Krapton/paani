import Image from "next/image";
import { CheckCircle, Zap, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { ALLINFORMATION } from "@/constant";
import Link from "next/link";

export default function CustomBrandedWaterPage() {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Brand Visibility",
      desc: "Every sip is a brand impression. Your logo reaches customers 100+ times daily.",
    },
    {
      icon: Shield,
      title: "Premium Quality Assurance",
      desc: "FDA-approved, sealed bottles with quality testing at every stage.",
    },
    {
      icon: TrendingUp,
      title: "ROI-Driven Marketing",
      desc: "Convert static water into a moving billboard. Track brand recall and customer loyalty.",
    },
  ];

  const customers = [
    {
      src: "/images/custom/5.jpeg",
      alt: "Restaurant custom branded water bottles",
      category: "Restaurants & Cafés",
      description:
        "Customized water bottles designed for restaurants and cafés to reinforce brand presence on every table and takeaway order.",
    },
    {
      src: "/images/custom/2.jpeg",
      alt: "Corporate office branded water bottles",
      category: "Corporate Offices",
      description:
        "Professionally branded drinking water bottles for offices, meetings, receptions, and corporate environments.",
    },
    {
      src: "/images/custom/3.jpeg",
      alt: "Event branded water bottles",
      category: "Events & Promotions",
      description:
        "Custom water bottles for events and promotions, helping brands gain visibility across large audiences.",
    },
    {
      src: "/images/custom/4.jpeg",
      alt: "Wedding custom water bottles",
      category: "Weddings",
      description:
        "Personalized water bottles for weddings, adding elegance, hygiene, and memorable branding to special occasions.",
    },
    {
      src: "/images/custom/7.jpeg",
      alt: "Premium wedding branded water bottles",
      category: "Weddings",
      description:
        "Premium customized bottled water crafted for luxury weddings and high-end celebrations.",
    },
    {
      src: "/images/custom/6.jpeg",
      alt: "Event and wedding custom bottled water",
      category: "Weddings & Events",
      description:
        "Versatile branded water bottles suitable for weddings, events, and private functions with bulk order support.",
    },
  ];

  return (
    <main className="w-full">
      {/* HERO - Problem & Solution */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Problem Statement */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                Solve Your Brand Visibility Problem
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Your Brand Deserves
                <span className="block ">More Than One Moment</span>
              </h1>
            </div>

            {/* The Why */}
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Most businesses spend thousands on ads customers skip. We turn a
                necessity—drinking water—into a
                <span className="font-semibold text-foreground">
                  {" "}
                  constant brand touchpoint
                </span>
                . Every bottle is a silent salesman working 24/7.
              </p>
              <p className="text-lg text-muted-foreground">
                Custom branded water doesn't just quench thirst. It builds
                trust, creates recall, and turns customers into brand advocates.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href={"/contact"}
                title="Order Now"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition flex items-center justify-center gap-2 group"
              >
                Start Your Custom Order
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </a>
            </div>

            {/* Trust Signal */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by 500+ businesses
              </p>
              <div className="flex flex-wrap justify-center gap-6 items-center opacity-60">
                <span className="font-semibold">Restaurants</span>
                <span className="w-1 h-1 bg-border rounded-full"></span>
                <span className="font-semibold">Corporate Offices</span>
                <span className="w-1 h-1 bg-border rounded-full"></span>
                <span className="font-semibold">Event Venues</span>
                <span className="w-1 h-1 bg-border rounded-full"></span>
                <span className="font-semibold">Hotels & Weddings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Benefits */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Custom Branded Water Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Psychology meets practicality. Your brand reaches customers when
                they're most receptive—thirsty, grateful, and engaged.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="p-8 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition group"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER SUCCESS - Social Proof */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Brands Growing With Custom Water
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how leading restaurants, offices, and event organizers use
                branded water to amplify their presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customers.map((customer, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border/50 bg-background overflow-hidden hover:shadow-lg transition group"
                >
                  <div className="relative h-64 bg-muted overflow-hidden">
                    <Image
                      src={customer.src}
                      alt={customer.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">
                      {customer.category}
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">
                      {customer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                What You Get With Every Order
              </h2>
              <p className="text-lg text-muted-foreground">
                Complete branding solution, nothing missing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Premium purified drinking water meeting FDA standards",
                "Fully customized labels with your logo, colors & messaging",
                "Sealed, hygienic bottles with tamper-proof quality seals",
                "Bulk pricing scaled to your order volume",
                "Fast nationwide delivery with tracking",
                "Design consultation with our branding experts",
                "Minimum order quantities flexible for your needs",
                "Reorder support and brand refresh options",
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Ready to Turn Water Into
              <span className="block text-primary">Marketing Gold?</span>
            </h2>

            <p className="text-xl text-muted-foreground">
              Join {ALLINFORMATION.WEBSITE_NAME} and 500+ businesses building
              brand loyalty one sip at a time. No setup fees. No minimum
              surprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                title="Contact"
                href="/contact"
                className="px-10 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:shadow-xl hover:shadow-primary/30 transition flex items-center justify-center gap-2 group"
              >
                Get Your Custom Water
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              Free consultation • No obligation • Custom samples available
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
