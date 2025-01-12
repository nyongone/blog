import React from "react";
import { PostType } from "@/types/post";
import { formatDate } from "@/utils/date-formatter";
import Link from "next/link";

interface Props {
  postData: PostType;
}

const PostItem = ({ postData }: Props) => {
  return (
    <li className="h-auto w-full bg-transparent py-4 max-md:py-2">
      <Link
        href={`/post/${postData.id}`}
        className="flex h-full w-full flex-col items-start justify-center gap-2"
      >
        <div className="flex h-auto w-full flex-row items-center justify-start gap-2">
          <span className="text-sm text-gray-400">
            {formatDate(postData.createdAt)}
          </span>
        </div>
        <span className="relative z-10 text-xl font-semibold text-gray-700 max-md:text-[1rem] max-md:leading-normal">
          {postData.title}
        </span>
      </Link>
    </li>
  );
};

export default PostItem;
