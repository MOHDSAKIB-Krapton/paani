"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Factory, Truck, Wrench, Phone } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Supply",
    description:
      "Reliable water delivery for homes and apartments with flexible scheduling and premium quality assurance.",
    features: ["Daily/Weekly delivery", "Quality testing", "Emergency service"],
  },
  {
    icon: Building2,
    title: "Commercial Solutions",
    description:
      "Comprehensive water distribution for offices, restaurants, and retail establishments.",
    features: ["Bulk delivery", "Custom contracts", "Priority support"],
  },
  {
    icon: Factory,
    title: "Industrial Distribution",
    description:
      "Large-scale water supply for manufacturing and industrial facilities with specialized requirements.",
    features: [
      "High-volume supply",
      "Technical support",
      "Compliance monitoring",
    ],
  },
  {
    icon: Truck,
    title: "Emergency Delivery",
    description:
      "24/7 emergency water supply services for urgent situations and disaster response.",
    features: ["Rapid response", "24/7 availability", "Crisis management"],
  },
  {
    icon: Wrench,
    title: "Installation & Maintenance",
    description:
      "Professional installation and ongoing maintenance of water distribution systems.",
    features: ["Expert installation", "Regular maintenance", "System upgrades"],
  },
  {
    icon: Phone,
    title: "Consultation Services",
    description:
      "Expert consultation for water distribution planning and system optimization.",
    features: ["System analysis", "Efficiency planning", "Cost optimization"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
              Water Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From residential delivery to industrial solutions, we ensure
            dependable, high-quality water distribution tailored to every
            environment.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden transition-all duration-500 ease-in-out hover:shadow-lg"
            >
              <CardHeader className="space-y-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary flex items-center justify-center transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold mb-2 tracking-tight">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-foreground/80"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="/distribution" title="Services">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-primary/40 text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all cursor-pointer"
                  >
                    Learn More
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
