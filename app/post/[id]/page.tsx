import { getPostById, getPosts } from "@/apis/post-api";
import PostDetail from "@/containers/posts/PostDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<Metadata> {
  const { id } = await params;
  const { data } = await getPostById(id);

  if (data)
    return {
      title: `${data.title} | @nyongwon`,
    };

  return notFound();
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);

  return <PostDetail post={post.data} />;
}
