"use client";

import React, { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  tocs: { id: string; content: string; level: number }[];
}

const PostToc = ({ tocs }: Props) => {
  const [activateId, setActivateId] = useState<string | null>(null);
  const [headingCoords, setHeadingCoords] = useState<
    { id: string; top: number }[]
  >([]);

  const calcHeadingsTop = useCallback(() => {
    const _scrollTop = document.documentElement.scrollTop;
    setHeadingCoords(
      tocs.map((toc) => {
        const element = document.getElementById(toc.id);
        const top = element
          ? element.getBoundingClientRect().top + _scrollTop
          : -1;
        return { id: toc.id, top: top };
      }),
    );
  }, [tocs]);

  useEffect(() => {
    calcHeadingsTop();
  }, [calcHeadingsTop]);

  useEffect(() => {
    if (tocs.length >= 1) {
      const onScroll = () => {
        const _scrollTop = document.documentElement.scrollTop;
        const currentToc = headingCoords
          .slice()
          .reverse()
          .find((coord) => coord.top - 40 <= _scrollTop);

        if (currentToc?.id !== activateId)
          setActivateId(currentToc?.id || null);
      };

      onScroll();
      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [headingCoords]);

  if (tocs.length <= 0) return <></>;

  return (
    <ul className="sticky top-[100px] flex flex-col items-start justify-start gap-1">
      {tocs.map((toc) => (
        <li
          key={toc.id}
          className={clsx(`transition-all`, {
            ["text-sm text-gray-300 hover:text-gray-700"]:
              activateId !== toc.id,
            ["text-gray-700"]: activateId === toc.id,
            ["pl-2"]: toc.level === 2,
            ["pl-4"]: toc.level === 3,
          })}
        >
          <a href={`#${toc.id}`}>{toc.content}</a>
        </li>
      ))}
    </ul>
  );
};

export default PostToc;
