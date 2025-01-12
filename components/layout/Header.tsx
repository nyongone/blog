import React from "react";
import Link from "next/link";
import Logo from "@/components/common/Logo";

const Header = () => {
  return (
    <header className="flex h-20 w-full flex-row items-center justify-center">
      <Link href="/">
        <Logo width={120} fill="#ccc" />
      </Link>
    </header>
  );
};

export default Header;
