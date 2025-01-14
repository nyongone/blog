import React from "react";
import { PostType } from "@/types/post";
import { markdownToHTML } from "@/utils/markdown";
import "@/styles/highlight.css";
import { formatDate } from "@/utils/date-formatter";
import PostToc from "@/containers/posts/PostToc";

interface Props {
  post: PostType;
}

const PostDetail = async ({ post }: Props) => {
  return (
    <>
      <div className="relative w-full">
        <aside className="absolute right-[100%] top-28 mr-4 h-full w-[150px] pt-8 max-xl:hidden">
          <PostToc content={post.content} />
        </aside>
        <div className="flex h-auto max-w-[1024px] flex-col items-start justify-start gap-2 p-4">
          <span className="text-gray-400">{formatDate(post.createdAt)}</span>
          <h1 className="mb-4 text-wrap text-5xl font-extrabold leading-[1.5] text-gray-700 max-md:text-4xl max-md:leading-[1.5]">
            {post.title}
          </h1>
          {post.category.name && (
            <span className="block rounded-xl bg-gray-100 px-4 py-2 text-sm text-gray-400">
              {post.category.name}
            </span>
          )}
          <article
            className="prose mt-16 max-w-[1024px]"
            dangerouslySetInnerHTML={{
              __html: await markdownToHTML(post.content),
            }}
          ></article>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
