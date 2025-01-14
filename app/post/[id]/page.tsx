import { getPostById } from "@/apis/post-api";
import PostDetail from "@/containers/posts/PostDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Comments from "@/containers/posts/Comments";

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
      openGraph: {
        images: [
          {
            url: data.thumbnail?.formats.thumbnail.url || "",
            alt: `${data.title}`,
          },
        ],
      },
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

  return (
    <>
      <PostDetail post={post.data} />
      {process.env.NODE_ENV === "production" && <Comments />}
    </>
  );
}
