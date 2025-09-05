"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Homeowner",
    feedback:
      "AquaFlow is super reliable! The delivery is always on time, and the water quality is crystal clear. Couldn’t ask for better service.",
  },
  {
    name: "Priya Sharma",
    role: "Restaurant Owner",
    feedback:
      "We’ve been using AquaFlow for our restaurant for over 5 years. Bulk deliveries are hassle-free, and the team is very supportive.",
  },
  {
    name: "Amit Verma",
    role: "Factory Manager",
    feedback:
      "Handling high-volume supply is not easy, but AquaFlow makes it seamless. Their compliance and safety standards are top-notch.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-primary/5 via-muted/30 to-transparent relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of customers across residential, commercial,
            and industrial sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="backdrop-blur-xl bg-card/80 border border-border/40 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex space-x-1 text-primary">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-primary" />
                  ))}
                </div>
                {/* Feedback */}
                <p className="text-muted-foreground leading-relaxed">
                  {t.feedback}
                </p>
                {/* Author */}
                <div>
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative glow shapes */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5 blur-3xl opacity-40 pointer-events-none" />
    </section>
  );
}
