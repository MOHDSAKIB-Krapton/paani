import { Droplets, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">AquaFlow</span>
            </div>
            <p className="text-background/80 text-sm">
              Leading water distribution company providing reliable, sustainable, and high-quality water solutions since
              2008.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Residential Supply
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Commercial Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Industrial Distribution
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Emergency Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  News
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm text-background/80">
              <p>
                123 Water Distribution Blvd
                <br />
                Suite 100
                <br />
                City, State 12345
              </p>
              <p>Phone: (555) 123-4567</p>
              <p>Emergency: (555) 987-6543</p>
              <p>Email: info@aquaflow.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2024 AquaFlow Water Distribution. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
