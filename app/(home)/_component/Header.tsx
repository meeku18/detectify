"use client";
import React, { useEffect } from "react";
import Logo from "./Logo";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="bg-secondary shadow-md p-3 px-6 ">
      <div className="flex justify-between items-center justify-center">
        <Logo />
        <div className=" hidden md:flex gap-8 ">
          <Link href="/">
            <div
              className={`hover:text-primary hover:font-bold tran transition-all cursor-pointer ${
                path == "/" && "text-primary font-semibold"
              }`}
            >
              Home{" "}
            </div>
          </Link>
          <Link href="/upload">
            <div
              className={`hover:text-primary hover:font-bold tran transition-all cursor-pointer ${
                path == "/upload" && "text-primary font-semibold"
              }`}
            >
              Upload Video{" "}
            </div>
          </Link>
          <Link href="/detection">
            <div
              className={`hover:text-primary hover:font-bold tran transition-all cursor-pointer ${
                path == "/detection" && "text-primary font-semibold"
              }`}
            >
              Detection Results{" "}
            </div>
          </Link>
          <Link href="/work">
            <div
              className={`hover:text-primary hover:font-bold tran transition-all cursor-pointer ${
                path == "/work" && "text-primary font-semibold"
              }`}
            >
              How it Works
            </div>
          </Link>
        </div>
        <UserButton afterSignOutUrl="/sign-in"></UserButton>
      </div>
    </div>
  );
}
