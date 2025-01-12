import { getPostById, getPosts } from "@/apis/post-api";
import PostDetail from "@/containers/posts/PostDetail";
import { Metadata } from "next";

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

  return {
    title: `${data.title} | @nyongwon`,
  };
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
