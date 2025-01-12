import React from "react";
import { PostType } from "@/types/post";
import { markdownToHTML } from "@/utils/markdown";
import "@/styles/highlight.css";
import { formatDate } from "@/utils/date-formatter";

interface Props {
  post: PostType;
}

const PostDetail = async ({ post }: Props) => {
  return (
    <div className="w-full p-4">
      <div className="mb-16 flex h-auto w-full flex-col items-start justify-start gap-2">
        <span className="text-gray-400">{formatDate(post.createdAt)}</span>
        <h1 className="mb-4 text-wrap text-5xl font-extrabold leading-[1.5] text-gray-700 max-md:text-4xl max-md:leading-[1.5]">
          {post.title}
        </h1>
        <span className="block rounded-xl bg-gray-100 px-4 py-2 text-sm text-gray-400">
          {post.category.name}
        </span>
      </div>
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: await markdownToHTML(post.content) }}
      ></article>
    </div>
  );
};

export default PostDetail;
