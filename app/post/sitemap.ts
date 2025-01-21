import { getPosts } from "@/apis/post-api";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  return posts.data.map((post) => ({
    url: `https://nyong.world/post/${post.id}`,
    lastModified: post.updatedAt,
  }));
}
