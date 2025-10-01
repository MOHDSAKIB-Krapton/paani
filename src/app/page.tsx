import { webPageSchema } from "@/seo-utils/webPageSchema";
import { createMetaData } from "@/seo-utils/CommonMeta";
import { organizationSchema } from "@/seo-utils/organizationSchema";
import { siteNavigationElement } from "@/seo-utils/siteNavigationElement";
import { breadCrumbSchema } from "@/seo-utils/breadCrumbSchema";
import { HOST } from "@/constant";
import { KEYWORDS } from "@/data/keywords";
import HomePage from "@/page-partials/home";

const url = `${HOST}`;
const title = `Purelay Water: Custom Branded Bottles & Reliable Water Distribution`;
const description = `Purelay Water provides premium custom-branded water bottles and reliable distribution for businesses, events, hotels, and cafés. Fast delivery and personalized branding solutions for every order.`;
const keywords = KEYWORDS.HOME;

export const metadata = {
  ...createMetaData({ title, description, keywords, url }),
};

export default function Home() {
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
      <HomePage />
    </>
  );
}
