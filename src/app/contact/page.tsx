import { webPageSchema } from "@/seo-utils/webPageSchema";
import { createMetaData } from "@/seo-utils/CommonMeta";
import { organizationSchema } from "@/seo-utils/organizationSchema";
import { siteNavigationElement } from "@/seo-utils/siteNavigationElement";
import { breadCrumbSchema } from "@/seo-utils/breadCrumbSchema";
import { HOST } from "@/constant";
import { KEYWORDS } from "@/data/keywords";
import { ContactSection } from "@/components/contact-section";

const url = `${HOST}`;
const title = `Purelay Water: Contact Us for Custom Branded Water & Distribution`;
const description = `Get in touch with Purelay Water for inquiries, quotes, and support for custom-branded bottled water and reliable water distribution services. Fast, responsive assistance for businesses, events, hotels, and cafés.`;
const keywords = KEYWORDS.CONTACT;

export const metadata = {
  ...createMetaData({ title, description, keywords, url }),
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: webPageSchema(title, description, url),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: organizationSchema() }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: siteNavigationElement() }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadCrumbSchema(title, HOST, url) }}
      />
      <ContactSection />
    </>
  );
}
