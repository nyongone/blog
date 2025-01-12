import { getPostById, getPosts } from "@/apis/post-api";
import PostDetail from "@/containers/posts/PostDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data } = await getPosts();

  return data.map((post) => ({
    params: {
      id: post.id,
    },
  }));
}

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

  return { title: "@nyongwon" };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post.data) return notFound();

  return <PostDetail post={post.data} />;
}
