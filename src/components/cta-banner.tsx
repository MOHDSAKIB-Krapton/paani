"use client";

import { Button } from "@/components/ui/button";
import { ALLINFORMATION } from "@/constant";
import { Droplets } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-primary-foreground/20 p-4 rounded-full">
            <Droplets className="h-10 w-10" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready for Reliable Water Distribution?
        </h2>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg text-primary-foreground/90">
          Partner with Purelay today and ensure consistent, sustainable, and
          high-quality water delivery for your home, business, or industry.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a href="/contact" title="Contact">
            <Button
              size="lg"
              className="bg-background text-primary font-semibold hover:bg-background/90 px-8 py-6 cursor-pointer"
            >
              Get a Free Quote
            </Button>
          </a>
          <a href={`tel:${ALLINFORMATION.PHONE_NUMBER}`} title="Call Us Now">
            <Button
              size="lg"
              variant="outline"
              className="border-background text-black hover:text-background font-semibold hover:bg-background/10 px-8 py-6 cursor-pointer"
            >
              Call Us Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
