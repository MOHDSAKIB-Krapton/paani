import { webPageSchema } from "@/seo-utils/webPageSchema";
import { createMetaData } from "@/seo-utils/CommonMeta";
import { organizationSchema } from "@/seo-utils/organizationSchema";
import { siteNavigationElement } from "@/seo-utils/siteNavigationElement";
import { breadCrumbSchema } from "@/seo-utils/breadCrumbSchema";
import { HOST } from "@/constant";
import { KEYWORDS } from "@/data/keywords";
import CustomBrandedWaterPage from "@/page-partials/custom-branding-water";

const url = `${HOST}`;
const title = "Custom Branded Water Bottles for Business & Events | Purelay";
const description =
  "Promote your brand with customized drinking water bottles. Ideal for hotels, restaurants, offices, events, and corporate branding.";
const keywords = KEYWORDS.DISTRIBUTION;

export const metadata = {
  ...createMetaData({ title, description, keywords, url }),
};

export default function CustomBrandedWater() {
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
      <CustomBrandedWaterPage />
    </>
  );
}
