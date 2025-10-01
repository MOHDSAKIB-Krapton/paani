import { ALLINFORMATION } from "@/constant";
import {
  Package,
  Truck,
  FileText,
  ShieldCheck,
  Leaf,
  Users,
} from "lucide-react";

export default function DistributionPage() {
  const steps = [
    {
      icon: FileText,
      title: "Documentation & Planning",
      desc: "Vendor onboarding, compliance verification, and order scheduling handled with precision.",
    },
    {
      icon: Package,
      title: "Bottling & Quality Checks",
      desc: "Advanced purification systems ensure every drop meets international safety standards.",
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      desc: "Affordable, on-time delivery with real-time tracking for complete peace of mind.",
    },
  ];

  const reasons = [
    {
      icon: ShieldCheck,
      title: "Trusted Quality",
      subtitle: "Excellence you can rely on",
      desc: "Certified purification and safety checks for every order, ensuring clean and safe water delivery every time.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      subtitle: "Sustainability at our core",
      desc: "Sustainable packaging and reduced carbon footprint logistics designed to protect the environment while serving you.",
    },
    {
      icon: Users,
      title: "Vendor-Centric",
      subtitle: "Partnership that empowers growth",
      desc: "Flexible supply plans, vendor-first support, and affordable pricing tailored to your business needs.",
    },
  ];

  return (
    <main className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Distribution Network
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Purelay delivers safe, sustainable, and affordable water solutions —
            from production to your business.
          </p>
        </section>

        {/* What We Distribute */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">What We Distribute</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl border bg-card shadow-md hover:shadow-xl transition">
              <img
                src="./images/bottle.webp"
                alt="Bottled Water"
                className="h-48 w-full object-contain group-hover:scale-105 transition-transform"
              />
              <div className="p-6 space-y-2">
                <h3 className="font-semibold text-xl">Bottled Water</h3>
                <p className="text-muted-foreground">
                  Sealed, ready-to-drink bottles ideal for retail vendors and
                  daily consumption.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border bg-card shadow-md hover:shadow-xl transition">
              <img
                src="./images/200x24.webp"
                alt="Bulk Supply"
                className="h-64 w-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6 space-y-2">
                <h3 className="font-semibold text-xl">Bulk Supply</h3>
                <p className="text-muted-foreground">
                  Affordable large-scale deliveries tailored for businesses and
                  vendors.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border bg-card shadow-md hover:shadow-xl transition">
              {/* <img
                src="https://images.unsplash.com/photo-1621570168788-46c96a3cbd49?w=800"
                alt="Custom Orders"
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform"
              /> */}

              <div className="h-48 flex items-center justify-center">
                <p className="text-black">Order of your Choice.</p>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-semibold text-xl">Custom Orders</h3>
                <p className="text-muted-foreground">
                  Branded bottles, special packaging, and vendor-specific
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Distribute */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">How We Distribute</h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/30" />

            <div className="space-y-16">
              {steps.map((step, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  {/* Circle */}
                  <div className="z-10 shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-background">
                    <step.icon className="h-6 w-6" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-xl">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Purelay */}
        <section className="relative py-20 bg-gradient-to-b from-background to-muted rounded-xl">
          <div className="max-w-6xl mx-auto px-6">
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold leading-tight">
                Why Choose
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
                  {ALLINFORMATION.WEBSITE_NAME}
                </span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the key reasons why businesses, communities, and
                households trust Purelay for reliable water distribution.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-10">
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="relative group bg-card/60 backdrop-blur-xl border border-white/10 
                     rounded-2xl p-8 hover:shadow-lg transition-all 
                     duration-500 ease-in-out"
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center w-14 h-14 
                          rounded-full bg-gradient-to-tr from-primary to-primary 
                          text-background shadow-md mb-6"
                  >
                    <reason.icon className="h-7 w-7" />
                  </div>

                  {/* Title + Subtitle */}
                  <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {reason.subtitle ||
                      "Trusted excellence with years of expertise"}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
