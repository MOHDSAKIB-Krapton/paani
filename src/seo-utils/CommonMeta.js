import { HOST } from "@/constant";

export const createMetaData = ({
  url = `${HOST}`,
  title = `PureLayWater - Fresh & Reliable Water Distribution`,
  description = `PureLayWater provides clean, fresh, and reliable water delivery services for homes, offices, and industries. We are available 24/7 with emergency supply and customized solutions.`,
  keywords = `PureLayWater, water delivery, water distribution, clean water, safe drinking water, 24/7 water supply, emergency water delivery, residential water, commercial water, industrial water`,
  image = "https://purelaywater.com/images/logo-full.webp",
} = {}) => {
  return {
    metadataBase: new URL("https://purelaywater.com"),
    title,
    description,
    keywords,
    url,
    openGraph: {
      type: "website",
      url: url,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://purelaywater.com",
      title,
      description,
      images: [image],
    },
    icons: {
      other: [
        { rel: "canonical", url: url },
        {
          rel: "image_src",
          url: image,
        },
      ],
    },
  };
};
