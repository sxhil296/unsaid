
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-20 w-full h-[70px] border-b-4 border-border bg-secondary-background px-5">
      <div className="mx-auto flex h-full w-[1300px] max-w-full items-center justify-between text-foreground">
        {/* Left side: logo + links */}
        <div className="flex items-center gap-4 xl:gap-10">
          <Link
            className="text-[22px] w-fit px-4 flex bg-main text-main-foreground border-2 border-black items-center justify-center font-heading"
            href="/"
          >
            Unsaid
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-6 text-base font-base">
            <Link href="/archives">Archives</Link>
            <Link href="/about">About</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </div>
        </div>

        {/* Right side: submit button + menu */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/submit">Submit</Link>
            </Button>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-5 py-4 bg-secondary-background border-2 border-border text-base pt-4 flex flex-col gap-6 w-full">
          <Link href="/archives" onClick={() => setIsMobileMenuOpen(false)}>
            Archives
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link
            href="/terms-and-conditions"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Terms & Conditions
          </Link>
          <Button asChild className="w-full mt-2">
            <Link href="/submit" onClick={() => setIsMobileMenuOpen(false)}>
              Submit
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Header;
