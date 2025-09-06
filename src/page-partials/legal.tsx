"use client";

import { ALLINFORMATION } from "@/constant";
import React from "react";

export default function LegalPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl text-muted-foreground">
      <h1 className="text-3xl font-bold text-foreground mb-8">
        Privacy Policy & Terms of Service
      </h1>

      {/* Privacy Policy */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Privacy Policy
        </h2>
        <p className="mb-4">
          At AquaFlow Water Distribution (&quot;Company&quot;, &quot;we&quot;,
          &quot;our&quot;, &quot;us&quot;), we value your trust and are
          committed to safeguarding the privacy of your personal information.
          This Privacy Policy outlines how we collect, use, disclose, and
          protect your data when you interact with our services, website, or
          mobile application.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">
          1. Information We Collect
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Full name, email address,
            phone number, billing address, and delivery address provided during
            order placement or account creation.
          </li>
          <li>
            <strong>Payment Information:</strong> Limited data necessary to
            process payments, handled securely via third-party gateways.
          </li>
          <li>
            <strong>Usage Data:</strong> Browsing behavior, device information,
            IP address, and interactions with our website and app.
          </li>
          <li>
            <strong>Communication Data:</strong> Emails, phone calls, and
            inquiries you send us for support or feedback.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">
          2. How We Use Your Information
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>To process and deliver your water bottle orders.</li>
          <li>To provide customer support and respond to inquiries.</li>
          <li>To personalize your experience with offers and promotions.</li>
          <li>To improve our website, services, and logistics.</li>
          <li>
            To comply with legal obligations and prevent fraudulent activity.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">
          3. Sharing of Information
        </h3>
        <p className="mb-4">
          We do not sell your data. However, we may share information with:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Service Providers:</strong> Logistics, payment gateways, IT
            support partners who enable order fulfillment.
          </li>
          <li>
            <strong>Legal Authorities:</strong> When required by law, court
            orders, or regulatory requests.
          </li>
          <li>
            <strong>Business Transfers:</strong> In case of mergers,
            acquisitions, or asset sales.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">4. Data Security</h3>
        <p className="mb-4">
          We implement strong security practices to protect your personal
          information. While no system is completely secure, we use encryption,
          firewalls, and strict access controls to minimize risks.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">5. Your Rights</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Right to access, update, or delete your data.</li>
          <li>Right to opt out of promotional communications.</li>
          <li>
            Right to withdraw consent for data processing where applicable.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">6. Cookies & Tracking</h3>
        <p className="mb-4">
          Our website may use cookies and analytics tools to enhance user
          experience, track performance, and deliver relevant offers. You can
          control cookie settings via your browser.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">7. Contact Us</h3>
        <p>
          If you have any concerns about this Privacy Policy, contact us at:{" "}
          <strong>{ALLINFORMATION.EMAIL}</strong>
        </p>
      </section>

      {/* Terms of Service */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Terms of Service
        </h2>
        <p className="mb-4">
          By accessing or using AquaFlow Water Distribution services, you agree
          to the following Terms of Service. If you do not agree, please do not
          use our services.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">
          1. Service Eligibility
        </h3>
        <p>
          You must be at least 18 years old to create an account and purchase
          from AquaFlow. By using our services, you confirm that you meet these
          requirements.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">
          2. Orders & Deliveries
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Orders must be placed through our website, app, or phone line.
          </li>
          <li>
            Delivery times are estimates and may vary due to traffic, weather,
            or stock availability.
          </li>
          <li>
            Customers are responsible for providing accurate delivery
            information.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">3. Pricing & Payments</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Prices are listed in INR (₹) and subject to change without notice.
          </li>
          <li>
            Payments must be completed before delivery via UPI, card, or cash on
            delivery (where available).
          </li>
          <li>
            Any promotional offers are time-limited and cannot be combined.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">
          4. Refunds & Cancellations
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Orders canceled before dispatch may be refunded in full.</li>
          <li>
            Damaged or incorrect deliveries must be reported within 24 hours for
            replacement or refund.
          </li>
          <li>
            No refunds will be issued for opened bottles due to hygiene reasons.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">
          5. User Responsibilities
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Provide accurate account and delivery details at all times.</li>
          <li>Use services lawfully and without causing harm to others.</li>
          <li>
            Do not attempt to misuse, hack, or disrupt our systems or
            operations.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">
          6. Limitation of Liability
        </h3>
        <p>
          AquaFlow will not be liable for indirect, incidental, or consequential
          damages arising from the use of our services, beyond the value of the
          product purchased.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">7. Modifications</h3>
        <p>
          We may update these Terms and the Privacy Policy at any time. Updated
          versions will be posted on our website, and continued use of our
          services implies acceptance of the changes.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">8. Governing Law</h3>
        <p>
          These Terms shall be governed by and interpreted in accordance with
          the laws of India. Any disputes shall be subject to the jurisdiction
          of courts in New Delhi.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">9. Contact Us</h3>
        <p>
          For questions regarding these Terms of Service, contact us at:{" "}
          <strong>{ALLINFORMATION.EMAIL}</strong>
        </p>
      </section>
    </main>
  );
}
