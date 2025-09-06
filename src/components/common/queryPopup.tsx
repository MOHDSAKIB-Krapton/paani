"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function QueryPopup() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000); // popup after 5s
    return () => clearTimeout(timer);
  }, []);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Popup form submitted:", formData);
    setOpen(false); // close after submit
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg rounded-2xl border border-border/40 backdrop-blur-xl bg-card/90 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Quick Query
          </DialogTitle>
          <DialogDescription className="text-center">
            Fill this short form and we’ll reach out soon.
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-6 overflow-y-auto max-h-96 px-2"
        >
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
                <option value="industrial">Industrial Distribution</option>
                <option value="emergency">Emergency Delivery</option>
                <option value="maintenance">Installation & Maintenance</option>
                <option value="consultation">Consultation Services</option>
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
              rows={3}
              className="border-border focus:ring-2 focus:ring-primary"
              placeholder="Tell us about your needs..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all rounded-full cursor-pointer"
          >
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
