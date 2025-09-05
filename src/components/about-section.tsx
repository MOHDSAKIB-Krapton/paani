import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Leaf, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Satisfied Customers" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Leaf, value: "100%", label: "Eco-Friendly" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Leading Water Distribution Excellence Since 2008
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                AquaFlow has been at the forefront of water distribution
                services, providing reliable, sustainable, and high-quality
                water solutions to communities and businesses across the region.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To ensure every customer has access to clean, safe, and
                  reliable water through innovative distribution solutions and
                  exceptional service.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    Quality and safety in every drop
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    Environmental sustainability
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    Customer-first approach
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    Innovation and reliability
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src="../images/professional-water-distribution-team-working-with-.jpg"
                alt="AquaFlow team and facilities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center p-6 border-border bg-card"
                >
                  <CardContent className="space-y-3 p-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
