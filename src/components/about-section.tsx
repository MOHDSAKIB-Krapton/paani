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
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 lg:px-12 space-y-20">
        <div className="space-y-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            At Purelay Water, we blend purity with branding. Our mission is to
            provide businesses a unique way to stand out while delivering safe
            and refreshing water.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  “To deliver premium water that carries your brand with pride
                  and trust.”
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Our Values</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Quality and safety in every drop",
                    "Environmental sustainability",
                    "Customer-first approach",
                    "Innovation and reliability",
                  ].map((value, i) => (
                    <li key={i} className="flex items-center text-base">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mr-3 shadow-sm" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image & Stats */}
          <div className="space-y-10">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/20">
              <img
                src="../images/professional-water-distribution-team-working-with-.jpg"
                alt="Purelay team and facilities"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl hover:shadow-lg transition-all duration-500 ease-in-out"
            >
              <CardContent className="space-y-4 p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary flex items-center justify-center mx-auto shadow-md">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
