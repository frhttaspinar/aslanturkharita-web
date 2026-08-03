import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { absoluteUrl, hasSiteUrl } from "@/lib/seo";

/**
 * Alan adı tanımlı değilken sitemap boş döner. Geçici .vercel.app adresiyle
 * URL üretmek, kalıcı alan adı bağlandığında yinelenen içerik oluşturur.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!hasSiteUrl) return [];

  const home = absoluteUrl("/");
  const blog = absoluteUrl("/blog");
  if (!home || !blog) return [];

  const latestPost = blogPosts
    .map((post) => new Date(post.updatedAt ?? post.publishedAt))
    .sort((a, b) => b.getTime() - a.getTime())[0];

  return [
    {
      url: home,
      lastModified: latestPost,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: blog,
      lastModified: latestPost,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogPosts.flatMap((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      if (!url) return [];
      return [
        {
          url,
          lastModified: new Date(post.updatedAt ?? post.publishedAt),
          changeFrequency: "yearly" as const,
          priority: 0.7,
        },
      ];
    }),
  ];
}
