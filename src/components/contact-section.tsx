"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ALLINFORMATION } from "@/constant";
import InquiryForm from "./common/inquirey-form";

export function ContactSection() {
  const CONTACT_INFO = [
    {
      icon: MapPin,
      title: "Location",
      content: (
        <>
          {ALLINFORMATION.ADDRESS.split("<br />").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </>
      ),
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <>
          Main:{" "}
          <a
            href={`tel:${ALLINFORMATION.PHONE_NUMBER}`}
            className="text-primary font-semibold hover:underline"
          >
            {ALLINFORMATION.PHONE_NUMBER}
          </a>
          <br />
          Emergency:{" "}
          <a
            href={`tel:${ALLINFORMATION.EMERGENCY_NUMBER}`}
            className="text-primary font-semibold hover:underline"
          >
            {ALLINFORMATION.EMERGENCY_NUMBER}
          </a>
        </>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a
          href={`mailto:${ALLINFORMATION.EMAIL}`}
          className="text-primary font-semibold hover:underline"
        >
          {ALLINFORMATION.EMAIL}
        </a>
      ),
    },
    {
      icon: Clock,
      title: "Hours",
      content: <>{ALLINFORMATION.OPENING_HOURS}</>,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative bg-gradient-to-br from-primary/5 via-muted/20 to-transparent overflow-hidden"
    >
      {/* decorative blur */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-primary/5 blur-3xl opacity-50 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We’re here to keep you hydrated. Reach out to us anytime for quick
            support, custom quotes, or bulk water distribution solutions.
          </p>
        </div>

        {/* Contact Info in Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16 max-w-7xl mx-auto">
          {CONTACT_INFO.map((item, i) => (
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
                <p className="text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <InquiryForm
          variant="section"
          title="Inquire About Our Products"
          description="Fill out the form below to receive more information."
        />

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <a href={`tel:${ALLINFORMATION.PHONE_NUMBER}`}>
            <Button
              size="lg"
              className="px-10 py-6 rounded-full text-lg font-semibold cursor-pointer"
            >
              Call Us Now
            </Button>
          </a>
          <a href={`mailto:${ALLINFORMATION.EMAIL}`}>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 rounded-full text-lg font-semibold cursor-pointer"
            >
              Send an Email
            </Button>
          </a>
        </div>

        {/* Map Section */}
        <div className="w-[60%] mx-auto rounded-4xl p-1 bg-white h-[400px] overflow-hidden shadow-lg">
          <iframe
            src={`https://www.google.com/maps?q=${ALLINFORMATION.LAT},${ALLINFORMATION.LNG}&hl=es;z=14&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
