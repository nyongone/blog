"use client";

import React from "react";
import Giscus from "@giscus/react";

const Comments = () => {
  const [id, repo] = (process.env.NEXT_PUBLIC_GISCUS_REPO || "").split("/");

  return (
    <div className="px-4">
      <Giscus
        repo={`${id}/${repo}`}
        repoId={`${process.env.NEXT_PUBLIC_GISCUS_REPO_ID}`}
        category={`${process.env.NEXT_PUBLIC_GISCUS_CATEGORY}`}
        categoryId={`${process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}`}
        mapping="title"
        reactionsEnabled="1"
        inputPosition="bottom"
        theme="light"
        lang="ko"
        loading="lazy"
      />
    </div>
  );
};

export default Comments;
