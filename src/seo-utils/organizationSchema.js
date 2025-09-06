export const organizationSchema = () => {
  return JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "PureLayWater",
    url: "https://purelaywater.com/",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-5551234567", // Main number
        contactType: "Customer support",
        contactOption: "TollFree",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-5559876543", // Emergency / 24x7
        contactType: "Emergency support",
        contactOption: "TollFree",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    logo: "https://purelaywater.com/images/logo-full.webp",
    sameAs: [
      "https://www.facebook.com/purelaywater",
      "https://twitter.com/purelaywater",
      "https://www.linkedin.com/company/purelaywater",
      "https://www.instagram.com/purelaywater/",
      "https://www.youtube.com/@purelaywater",
    ],
    description:
      "PureLayWater provides clean, fresh, and reliable water delivery services for homes, offices, and industries, available 24/7 with emergency support.",
  });
};
