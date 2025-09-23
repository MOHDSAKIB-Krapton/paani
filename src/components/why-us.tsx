"use client";

import { motion } from "framer-motion";
import { Shield, Droplets, Leaf, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhyPurelayWater() {
  const features = [
    {
      icon: Shield,
      title: "Certified Purity",
      description:
        "Every drop undergoes multi-stage purification and rigorous testing to ensure unmatched quality.",
    },
    {
      icon: Droplets,
      title: "Balanced Minerals",
      description:
        "Engineered with the right mineral blend for better hydration, health, and taste.",
    },
    {
      icon: Leaf,
      title: "Eco-Smart Delivery",
      description:
        "Sustainable packaging and optimized routes reduce waste while keeping water fresh.",
    },
    {
      icon: Globe,
      title: "Trusted by Families & Businesses",
      description:
        "Purelay powers homes, offices, and industries with reliable water distribution excellence.",
    },
  ];

  return (
    <section
      id="why-purelay"
      className="relative py-20 bg-gradient-to-br from-background via-card to-background overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
              <img
                src="/images/bottle.jpg"
                alt="Purelay premium water"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Why <span className="text-primary">Purelay Water?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Purelay Water is more than hydration—it's{" "}
              <strong>
                certified purity, balanced minerals, and sustainable delivery
              </strong>
              , designed for modern lifestyles.
            </p>

            <ul className="space-y-6">
              {features.map(({ icon: Icon, title, description }, idx) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.15, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <Icon className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-base text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="pt-6">
              <a href="/about" aria-label="Learn more about Purelay Water">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-5 shadow-lg transition-all hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative glow orbs */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-4xl" />
    </section>
  );
}
