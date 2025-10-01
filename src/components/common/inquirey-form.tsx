"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ALLINFORMATION } from "@/constant";

const lineOfWorkOptions = [
  "Retailers",
  "Hotels",
  "Cafe / restaurants",
  "Shop",
  "Events",
  "End Customer",
  "Distributor",
];

const quantityOptions = ["200ml", "500ml", "1L"];

const bottleTypeOptions = ["Purelay"];

type InquiryFormProps = {
  variant?: "section" | "dialog";
  title?: string;
  description?: string;
  preFillData?: { quantity: string; bottleType: string };
};

const InquiryForm = ({
  variant = "section",
  title,
  description,
  preFillData,
}: InquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    message: "",
    lineOfWork: "Distributor",
    quantity: preFillData?.quantity || "1L",
    bottleType: preFillData?.bottleType || "Purelay",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preFillData) {
      setFormData((prev) => ({
        ...prev,
        quantity: preFillData.quantity,
        bottleType: preFillData.bottleType,
      }));
    }
  }, [preFillData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/sendInquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast.success(
          `Thank you, ${formData.name}! Your inquiry has been submitted.`
        );
      } else {
        toast.error("Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        message: "",
        lineOfWork: "Distributor",
        quantity: "1L",
        bottleType: "Purelay",
      });
    }
  };

  const formContent = (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="lineOfWork">Line of Work *</Label>
          <Select
            name="lineOfWork"
            value={formData.lineOfWork}
            onValueChange={(v: string) => handleSelectChange("lineOfWork", v)}
            required
          >
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              {lineOfWorkOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="quantity">Quantity *</Label>
          <Select
            name="quantity"
            value={formData.quantity}
            onValueChange={(v: string) => handleSelectChange("quantity", v)}
            required
          >
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              {quantityOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="bottleType">Bottle Type *</Label>
        <Select
          name="bottleType"
          value={formData.bottleType}
          onValueChange={(v: string) => handleSelectChange("bottleType", v)}
          required
          defaultValue="Purelay"
        >
          <SelectTrigger className="w-full mt-1">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            {bottleTypeOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1"
        />
      </div>
      <Button
        type="submit"
        className="w-full mt-4 rounded-full bg-primary/90 hover:bg-primary py-6 text-lg font-semibold cursor-pointer"
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  );

  if (variant === "dialog") {
    return (
      <div
        className="max-h-96 overflow-y-auto px-1"
        style={{ scrollbarWidth: "none" }}
      >
        {formContent}
      </div>
    );
  }

  return (
    <section className="relative p-8 md:p-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {title || "Request a Quote"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {description ||
              "Fill out the form below and our team will provide a detailed, personalized quote tailored to your needs."}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            We respect your privacy. Your information will never be shared.
          </p>

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
        </div>

        {formContent}
      </div>
    </section>
  );
};

export default InquiryForm;
