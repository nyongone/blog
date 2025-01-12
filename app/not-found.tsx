import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-48 w-full flex-col items-center justify-center gap-4">
      <span className="text-lg font-semibold text-gray-400">
        404: 페이지를 찾을 수 없습니다.
      </span>
      <Link
        href="/"
        className="font-normal text-blue-500 hover:underline hover:decoration-blue-500 hover:underline-offset-4"
      >
        돌아가기
      </Link>
    </div>
  );
}
