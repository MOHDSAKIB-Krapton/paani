import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-card to-background overflow-hidden  pt-12 pb-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative blurred circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-6 text-center lg:text-start">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Pure Water <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
                  Distribution Excellence
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Premium water solutions designed for modern homes and
                businesses. Reliable, sustainable, and delivered with unmatched
                service quality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a href="/contact" title="Get Started">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-full px-8 py-6 text-lg cursor-pointer"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="/distribution" title="Learn More">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                >
                  Learn More
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 pt-6">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Certified Quality</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">24/7 Service</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
              <img
                src="../images/bottle.webp"
                alt="Water distribution facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
