import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Factory, Truck, Wrench, Phone } from "lucide-react"

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
    description: "Comprehensive water distribution for offices, restaurants, and retail establishments.",
    features: ["Bulk delivery", "Custom contracts", "Priority support"],
  },
  {
    icon: Factory,
    title: "Industrial Distribution",
    description: "Large-scale water supply for manufacturing and industrial facilities with specialized requirements.",
    features: ["High-volume supply", "Technical support", "Compliance monitoring"],
  },
  {
    icon: Truck,
    title: "Emergency Delivery",
    description: "24/7 emergency water supply services for urgent situations and disaster response.",
    features: ["Rapid response", "24/7 availability", "Crisis management"],
  },
  {
    icon: Wrench,
    title: "Installation & Maintenance",
    description: "Professional installation and ongoing maintenance of water distribution systems.",
    features: ["Expert installation", "Regular maintenance", "System upgrades"],
  },
  {
    icon: Phone,
    title: "Consultation Services",
    description: "Expert consultation for water distribution planning and system optimization.",
    features: ["System analysis", "Efficiency planning", "Cost optimization"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Comprehensive Water Distribution Services</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            From residential delivery to industrial solutions, we provide reliable water distribution services tailored
            to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
