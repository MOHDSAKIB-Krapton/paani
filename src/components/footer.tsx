import { Droplets, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Droplets className="h-9 w-9 text-primary" />
              <span className="text-2xl font-extrabold tracking-tight">
                AquaFlow
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Delivering safe, sustainable, and high-quality water solutions
              since 2008 — trusted by thousands of vendors and businesses.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <div
                  key={i}
                  className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <Icon className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Residential Supply",
                "Commercial Solutions",
                "Industrial Distribution",
                "Emergency Delivery",
                "Maintenance",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#" },
                { label: "Careers", href: "#" },
                { label: "News", href: "#" },
                { label: "Contact", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-background/70">
              <p>
                123 Water Distribution Blvd <br />
                Suite 100 <br />
                City, State 12345
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:5551234567"
                  className="hover:text-primary transition-colors"
                >
                  (555) 123-4567
                </a>
              </p>
              <p>
                Emergency:{" "}
                <a
                  href="tel:5559876543"
                  className="hover:text-primary transition-colors"
                >
                  (555) 987-6543
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@aquaflow.com"
                  className="hover:text-primary transition-colors"
                >
                  info@aquaflow.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-background/20 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-background/60">
          <p>© 2024 AquaFlow Water Distribution. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
