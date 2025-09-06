import { ALLINFORMATION } from "@/constant";

export const organizationSchema = () => {
  return JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "PureLayWater",
    url: "https://purelaywater.com/",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: ALLINFORMATION.PHONE_NUMBER, // Main number
        contactType: "Customer support",
        contactOption: "TollFree",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: ALLINFORMATION.EMERGENCY_NUMBER, // Emergency / 24x7
        contactType: "Emergency support",
        contactOption: "TollFree",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    logo: "https://purelaywater.com/images/logo-full.webp",
    sameAs: [
      ALLINFORMATION.FACEBOOK_LINK,
      ALLINFORMATION.TWITTER_LINK,
      ALLINFORMATION.LINKEDIN_LINK,
      ALLINFORMATION.INSTAGRAM_LINK,
    ],
    description:
      "PureLayWater provides clean, fresh, and reliable water delivery services for homes, offices, and industries, available 24/7 with emergency support.",
  });
};
