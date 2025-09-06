import { webPageSchema } from "@/seo-utils/webPageSchema";
import { createMetaData } from "@/seo-utils/CommonMeta";
import { organizationSchema } from "@/seo-utils/organizationSchema";
import { siteNavigationElement } from "@/seo-utils/siteNavigationElement";
import { breadCrumbSchema } from "@/seo-utils/breadCrumbSchema";
import { HOST } from "@/constant";
import { KEYWORDS } from "@/data/keywords";
import HomePage from "@/page-partials/home";

const url = `${HOST}`;
const title = `Purelay Water: Premium Bottled Water for Healthy Hydration`;
const description = `Purelay Water offers 100% pure and safe bottled water for optimal health and hydration. Enjoy refreshing, high-quality drinking water sourced responsibly, perfect for home, office, or on-the-go.`;
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
