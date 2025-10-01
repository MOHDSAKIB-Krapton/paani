import { webPageSchema } from "@/seo-utils/webPageSchema";
import { createMetaData } from "@/seo-utils/CommonMeta";
import { organizationSchema } from "@/seo-utils/organizationSchema";
import { siteNavigationElement } from "@/seo-utils/siteNavigationElement";
import { breadCrumbSchema } from "@/seo-utils/breadCrumbSchema";
import { HOST } from "@/constant";
import { KEYWORDS } from "@/data/keywords";
import LegalPage from "@/page-partials/legal";

const url = `${HOST}`;
const title = `Purelay Water: Privacy Policy & Legal Information`;
const description = `Read Purelay Water's privacy policy, terms of service, and legal information for our custom-branded water distribution services. Ensuring transparency, data protection, and regulatory compliance for businesses and events.`;
const keywords = KEYWORDS.LEGAL;

export const metadata = {
  ...createMetaData({ title, description, keywords, url }),
};

export default function Legal() {
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
      <LegalPage />
    </>
  );
}
