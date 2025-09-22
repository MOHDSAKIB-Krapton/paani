import { Droplets, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "./common/logo";
import { ALLINFORMATION } from "@/constant";

export function Footer() {
  const SOCIAL_MEDIA = [
    {
      name: "Facebook",
      icon: Facebook,
      link: ALLINFORMATION.FACEBOOK_LINK,
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: ALLINFORMATION.INSTAGRAM_LINK,
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: ALLINFORMATION.TWITTER_LINK,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: ALLINFORMATION.LINKEDIN_LINK,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            {/* <Logo theme="dark" /> */}
            <h4 className={`text-2xl font-extrabold text-background mb-8`}>
              {ALLINFORMATION.WEBSITE_NAME}
            </h4>

            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Delivering safe, sustainable, and high-quality water solutions
              since 2025 — trusted by thousands of vendors and businesses.
            </p>
            <div className="flex space-x-3">
              {SOCIAL_MEDIA.map((Icon, i) => (
                <a
                  key={i}
                  href={Icon.link}
                  title={Icon.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={Icon.name}
                  className="p-2 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <Icon.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-[0.15em]">
              Services
            </h3>
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
                    href="/distribution"
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
                { label: "Distribution", href: "/distribution" },
                { label: "Contact", href: "/contact" },
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
              <p>{ALLINFORMATION.ADDRESS}</p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${ALLINFORMATION.PHONE_NUMBER}`}
                  title="Call us"
                  className="hover:text-primary transition-colors"
                >
                  {ALLINFORMATION.PHONE_NUMBER}
                </a>
              </p>
              <p>
                Emergency:{" "}
                <a
                  href={`tel:${ALLINFORMATION.EMERGENCY_NUMBER}`}
                  title="Call emergency number"
                  className="hover:text-primary transition-colors"
                >
                  {ALLINFORMATION.EMERGENCY_NUMBER}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${ALLINFORMATION.EMAIL}`}
                  title="Email us"
                  className="hover:text-primary transition-colors"
                >
                  {ALLINFORMATION.EMAIL}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-background/20 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-background/60">
          <p>© 2025 Purelay Water Distribution. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="/legal" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/legal" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
