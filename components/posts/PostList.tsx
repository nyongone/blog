"use client";

import React, { useState } from "react";
import { PostType } from "@/types/post";
import PostItem from "@/components/posts/PostItem";
import PostPagination from "@/components/posts/PostPagination";
import { useSearchParams } from "next/navigation";

interface Props {
  posts: PostType[];
}

const PostList = ({ posts }: Props) => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState<number>(1);

  if (!posts || posts.length <= 0)
    return (
      <div className="flex h-48 w-full flex-col items-center justify-center gap-1">
        <span className="text-lg font-semibold text-gray-400">
          작성된 게시글이 없습니다.
        </span>
        <span className="text-gray-400">열심히 적도록 하겠습니다!</span>
      </div>
    );

  return (
    <>
      <ul className="flex h-auto w-full flex-col items-start justify-start gap-2 px-4 max-md:gap-4">
        {posts.slice((currentPage - 1) * 10, currentPage * 10).map((post) => (
          <PostItem key={post.id} postData={post} />
        ))}
      </ul>
      <PostPagination
        key={searchParams.get("category")}
        totalPages={Math.ceil(posts.length / 10)}
        pageLimit={5}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, left: 0 });
        }}
      />
    </>
  );
};

export default PostList;
