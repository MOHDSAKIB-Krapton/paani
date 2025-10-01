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
    title: "Custom Branding",
    description:
      "Personalize every bottle with your logo, tagline, and unique design. Ideal for businesses and events that demand a professional, premium touch while boosting brand visibility.",
    features: [
      "Custom logos and taglines on bottles",
      "Tailored designs for events and promotions",
      "Premium quality water presentation",
    ],
  },
  {
    icon: Building2,
    title: "Events & Corporate",
    description:
      "Perfect for weddings, parties, conferences, and corporate seminars. Deliver safe, high-quality, branded water that elevates guest experience and reinforces event identity.",
    features: [
      "Branded water for weddings, parties, and corporate events",
      "Safe, mineral-rich bottled water",
      "Enhances guest experience with premium presentation",
    ],
  },
  {
    icon: Factory,
    title: "Hotels & Restaurants",
    description:
      "Enhance hospitality with signature branded bottles. Impress guests with hygienic, mineral-rich water that complements your premium service standards.",
    features: [
      "Signature branded bottles for guests",
      "Maintains hygiene and freshness",
      "Elevates overall guest satisfaction",
    ],
  },
  {
    icon: Truck,
    title: "Retail Solutions",
    description:
      "Boost visibility and brand recognition with cost-effective, personalized packaging. Perfect for retail stores, supermarkets, and corporate gifting, combining quality with marketing impact.",
    features: [
      "Cost-effective personalized packaging",
      "Enhances brand visibility and recall",
      "Ideal for retail stores and gifting",
    ],
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
          <h2 className="text-4xl md:text-5xl font-extrabold">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From homes and offices to industrial facilities, Purelay Water
            delivers reliable, safe, and premium-quality water solutions
            customized for every environment.
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
