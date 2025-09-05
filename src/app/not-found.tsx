"use client";

import { Button } from "@/components/ui/button";
import { Droplets } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="text-center space-y-8 max-w-lg">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-primary/10 p-6 rounded-full">
            <Droplets className="h-12 w-12 text-primary" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-foreground">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>

        {/* Description */}
        <p className="text-muted-foreground text-lg">
          Oops! The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6"
          >
            <Link href="/">Back to Home</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 px-8 py-6"
          >
            <Link href="/#contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
