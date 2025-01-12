import Categories from "@/components/Categories";
import PostList from "@/components/posts/PostList";
import React from "react";
import { getPosts } from "@/apis/post-api";
import { getCategories } from "@/apis/category-api";

export const revalidate = 3000;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const category = (await searchParams).category;
  const categories = await getCategories();
  const posts = await getPosts(1, -1, category as string);

  return (
    <>
      <Categories categories={categories.data} />
      <section className="flex h-auto w-full flex-col items-start justify-start gap-4">
        <PostList posts={posts.data} />
      </section>
    </>
  );
}
