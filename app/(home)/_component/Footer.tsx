"use client";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-secondary">
      <div className="flex justify-between items-center p-4 border-t border-gray-300">
        <div className="text-center text-sm">
          <p>© 2024 myCompany, All Rights Reserved.</p>
          <p>hrishabh.jaiswal.ug21@nsut.ac.in</p>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="https://www.instagram.com/meeku0/" aria-label="Instagram">
            <FaInstagram className="w-6 h-6 hover:text-gray-400 transition-colors" />
          </Link>
          <Link href="https://x.com/Meeku1801" aria-label="Twitter">
            <FaTwitter className="w-6 h-6 hover:text-gray-400 transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/meeku0/" aria-label="Facebook">
            <FaFacebook className="w-6 h-6 hover:text-gray-400 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
