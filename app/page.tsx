import Categories from "@/components/layout/Categories";
import PostList from "@/components/posts/PostList";
import React from "react";
import { getPosts } from "@/apis/post-api";
import { getCategories } from "@/apis/category-api";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const category = (await searchParams).category;
  const page = (await searchParams).page;
  const categories = await getCategories();
  const posts = await getPosts(
    Number(page as string) || 1,
    -1,
    category as string,
  );

  return (
    <>
      <Categories categories={categories.data} />
      <section className="flex h-auto w-full flex-col items-start justify-start gap-4">
        <PostList posts={posts.data} />
      </section>
    </>
  );
}
