"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import LeftChevron from "@/components/common/LeftChevron";
import RightChevron from "@/components/common/RightChevron";

interface Props {
  totalPages: number;
  pageLimit: number;
  onPageChange: (page: number) => void;
}

const PostPagination = ({ totalPages, pageLimit, onPageChange }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageRange, setPageRange] = useState<number[]>(
    Array.from(
      { length: pageLimit > totalPages ? totalPages : pageLimit },
      (_, i) => i + 1,
    ),
  );

  const prevPage = (page: number) => {
    if (page - 1 <= 0) return;
    if ((page - 1) % pageLimit === 0)
      setPageRange(
        Array.from(
          { length: pageLimit },
          (_, i) => currentPage - pageLimit + i,
        ),
      );
    setCurrentPage((prev) => prev - 1);
  };

  const nextPage = (page: number) => {
    if (page + 1 > totalPages) return;
    if ((page + 1) % pageLimit === 1)
      setPageRange(
        Array.from({ length: pageLimit }, (_, i) => currentPage + i + 1),
      );
    setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);

  return (
    <ul className="my-8 flex h-12 w-full flex-row items-center justify-center gap-4 max-md:gap-2">
      <li className="h-12 w-12 max-md:h-8 max-md:w-8">
        <button
          onClick={() => prevPage(currentPage)}
          className="flex h-full w-full items-center justify-center"
        >
          <LeftChevron fill="#ccc" />
        </button>
      </li>
      {pageRange.map((page) => (
        <li key={page} className="h-12 w-12 max-md:h-8 max-md:w-8">
          <button
            onClick={() => setCurrentPage(page)}
            className={clsx(
              "flex h-full w-full items-center justify-center rounded-xl text-xl font-normal text-gray-400 max-md:text-sm",
              {
                "bg-blue-500 font-semibold text-white": page === currentPage,
                "bg-gray-100": page !== currentPage,
              },
            )}
          >
            {page}
          </button>
        </li>
      ))}
      <li className="h-12 w-12 max-md:h-8 max-md:w-8">
        <button
          onClick={() => nextPage(currentPage)}
          className="flex h-full w-full items-center justify-center"
        >
          <RightChevron fill="#ccc" />
        </button>
      </li>
    </ul>
  );
};

export default PostPagination;
