import { webPageSchema } from "@/seo-utils/webPageSchema";
import { createMetaData } from "@/seo-utils/CommonMeta";
import { organizationSchema } from "@/seo-utils/organizationSchema";
import { siteNavigationElement } from "@/seo-utils/siteNavigationElement";
import { breadCrumbSchema } from "@/seo-utils/breadCrumbSchema";
import { HOST } from "@/constant";
import { KEYWORDS } from "@/data/keywords";
import DistributionPage from "@/components/distribution/page";

const url = `${HOST}`;
const title = `Purelay Water: Bulk & Custom Branded Water Distribution for Businesses`;
const description = `Purelay Water provides premium custom-branded and bulk water distribution for offices, events, hotels, and cafés. Reliable, fast delivery with personalized branding solutions.`;
const keywords = KEYWORDS.DISTRIBUTION;

export const metadata = {
  ...createMetaData({ title, description, keywords, url }),
};

export default function Distribution() {
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
      <DistributionPage />
    </>
  );
}
