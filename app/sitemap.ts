import { MetadataRoute } from "next";
import { getPosts } from "@/apis/post-api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts(1, -1);
  return [
    {
      url: "https://nyong.world",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    ...posts.data.map((post) => ({
      url: `https://nyong.world/post/${post.slug}`,
      lastModified: post.updatedAt,
    })),
  ];
}
