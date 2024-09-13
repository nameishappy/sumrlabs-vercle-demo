"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    label: "Demo",
    href: "https://tally.so/r/wg49NK",
  },
  {
    label: "About",
    href: "https://tally.so/r/wg49NK",
  },
  {
    label: "Contact",
    href: "https://tally.so/r/wg49NK",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-center py-5 px-4 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image src="/Logo-sumr.png" alt="SUMR Logo" width={144} height={56}  />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium font-['Nunito'] hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://app.sumrlabs.com/sign-in"
            className="px-5 py-2.5 bg-white rounded border border-[#2545d3] text-[#2545d3] text-base font-semibold font-['Nunito'] hover:bg-[#2545d3] hover:text-white transition-colors"
          >
            Log in
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#262626] p-4 shadow-lg z-50">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-white text-base font-medium font-['Nunito'] py-2 hover:text-gray-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://app.sumrlabs.com/sign-in"
            className="block mt-4 px-5 py-2.5 bg-white rounded border border-[#2545d3] text-[#2545d3] text-base font-semibold font-['Nunito'] text-center hover:bg-[#2545d3] hover:text-white transition-colors"
          >
            Log in
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
