"use client";

import React from "react";
import Link from "next/link";
import { CategoryType } from "@/types/category";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import CloseButton from "@/components/common/CloseButton";

interface Props {
  categories: CategoryType[];
}

const Categories = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  if (!categories || categories.length <= 0) return <></>;

  return (
    <div className="m-[0_auto] my-8 flex h-auto max-w-[896px] flex-row items-center justify-start gap-4 px-4 max-md:flex-col max-md:items-start">
      <span className="text-sm font-bold text-gray-500">TOPICS</span>
      <ul className="flex flex-row flex-wrap items-center justify-start gap-4">
        {categories.map((category) => (
          <li
            key={category.id}
            className={clsx("block rounded-xl text-sm", {
              ["bg-blue-500 font-bold text-blue-50 drop-shadow-sm"]:
                category.slug === currentCategory,
              ["bg-gray-100 text-gray-400"]: category.slug !== currentCategory,
            })}
          >
            <Link
              className="block h-full w-full px-4 py-2"
              href={`/?category=${category.slug}`}
            >
              {category.name}
            </Link>
          </li>
        ))}
        {currentCategory && (
          <li>
            <Link href="/">
              <CloseButton width={16} height={16} fill="#ccc" />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Categories;
