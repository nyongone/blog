import { getPostBySlug } from "@/apis/post-api";
import PostDetail from "@/containers/posts/PostDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Comments from "@/containers/posts/Comments";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await getPostBySlug(slug);

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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post.data) return notFound();

  return (
    <>
      <PostDetail post={post.data} />
      <hr className="my-16 h-[1px] w-full border-none bg-gray-300" />
      {process.env.NODE_ENV === "production" && <Comments />}
    </>
  );
}
