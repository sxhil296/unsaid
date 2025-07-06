"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-secondary-background text-foreground mt-8 ">
      <div className="w-full max-w-[1300px] mx-auto px-4  flex flex-col sm:flex-row justify-between h-[80px] items-center gap-4 text-sm">
        {/* Left: Navigation Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/archives" className="hover:underline">
            Archives
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/terms-and-conditions" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>

        {/* Right: Copyright */}
        <p className="text-center sm:text-right text-gray-500">
          © {new Date().getFullYear()} Unsaid. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
