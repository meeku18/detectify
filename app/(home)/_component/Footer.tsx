"use client";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";



export function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-secondary">
      <div className="flex justify-between  p-6  w-full border-t">
        <div className="flex justify-center flex-col items-center">
          © 2024 myCompany, All Rights Reserved.
        </div>
        <div>
          <div className="flex gap-4">
            <Link href={"https://www.instagram.com/meeku0/"}>
                <FaInstagram className="w-6 h-6" />
            </Link>
            <Link href={"https://x.com/Meeku1801"}>
                <FaTwitter className="w-6 h-6" />
            </Link>
            <Link href={"https://www.instagram.com/meeku0/"}>
                <FaFacebook className="w-6 h-6" />
            </Link>
          </div>
          <div className="text-sm">
            hrishabh.jaiswal.ug21@nsut.ac.in
          </div>
        </div>

      </div>
    </div>
  );
}
