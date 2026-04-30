import type { MetadataRoute } from "next";

const SITE_URL = "https://citeable.com";

const SECTION_HASHES = [
  "services",
  "process",
  "compare",
  "calculator",
  "faq",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...SECTION_HASHES.map((hash) => ({
      url: `${SITE_URL}/#${hash}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
