import React from "react";
import { PostType } from "@/types/post";
import PostItem from "@/components/posts/PostItem";

interface Props {
  posts: PostType[];
}

const PostList = ({ posts }: Props) => {
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
    <ul className="flex h-auto w-full flex-col items-start justify-start gap-2 px-4 max-md:gap-4">
      {posts.map((post) => (
        <PostItem key={post.id} postData={post} />
      ))}
    </ul>
  );
};

export default PostList;
