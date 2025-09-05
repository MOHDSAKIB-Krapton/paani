import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-card to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Pure Water
                <span className="text-primary block">Distribution</span>
                Excellence
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl">
                Delivering premium quality water solutions to residential and
                commercial clients with unmatched reliability and service
                excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Certified Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium">24/7 Service</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-8">
              <img
                src="../images/modern-water-distribution-facility-with-clean-pipe.jpg"
                alt="Water distribution facility"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">
                Happy Customers
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
