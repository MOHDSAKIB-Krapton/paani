"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-gradient-to-br from-primary/5 via-muted/20 to-transparent overflow-hidden"
    >
      {/* decorative blur */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-primary/5 blur-3xl opacity-50 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your water distribution service? Contact us today for
            a personalized quote and consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: "Location",
                content: (
                  <>
                    123 Water Distribution Blvd
                    <br /> Suite 100 <br /> City, State 12345
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Phone",
                content: (
                  <>
                    Main: (555) 123-4567
                    <br /> Emergency: (555) 987-6543
                  </>
                ),
              },
              {
                icon: Mail,
                title: "Email",
                content: (
                  <>
                    info@aquaflow.com
                    <br /> support@aquaflow.com
                  </>
                ),
              },
              {
                icon: Clock,
                title: "Hours",
                content: (
                  <>
                    Mon–Fri: 7:00 AM – 7:00 PM
                    <br /> Sat–Sun: 8:00 AM – 5:00 PM
                    <br /> Emergency: 24/7
                  </>
                ),
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="border border-border/40 backdrop-blur-xl bg-card/80 shadow-md hover:shadow-xl transition-all"
              >
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5 text-primary" />
                    <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-border/40 backdrop-blur-xl bg-card/80 shadow-lg">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-border focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-border focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-border focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-border rounded-md bg-input focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Supply</option>
                        <option value="commercial">Commercial Solutions</option>
                        <option value="industrial">
                          Industrial Distribution
                        </option>
                        <option value="emergency">Emergency Delivery</option>
                        <option value="maintenance">
                          Installation & Maintenance
                        </option>
                        <option value="consultation">
                          Consultation Services
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="border-border focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your water distribution needs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
