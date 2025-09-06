export const siteNavigationElement = () => {
  return JSON.stringify({
    "@context": "http://schema.org",
    "@type": "SiteNavigationElement",
    name: ["Home", "Distribution", "Contact", "Legal"],
    url: [
      "https://purelaywater.com/",
      "https://purelaywater.com/distribution",
      "https://purelaywater.com/contact",
      "https://purelaywater.com/legal",
    ],
  });
};
