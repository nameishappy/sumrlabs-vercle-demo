"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  {
    label: "Sign in",
    href: "https://ai.sumrlabs.com",
  },
  {
    label: "Get Started",
    href: "https://tally.so/r/wg49NK",
  },
  {
    label: "team",
    href: "/team",
  },
  {
    label: "use-cases",
    href: "/use-cases",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const classCss = isVisible
    ? "bg-white text-black shadow-md opacity-100"
    : "bg-transparent text-white";

  return (
    <>
      {/* {!isVisible && <InitialHeader />} */}
      <header
        className={`${classCss} w-3/4 rounded-[20px] sticky top-5 left-0 right-0 z-50 mx-auto transition-opacity duration-300 cursor-pointer`}
      >
        <nav className="w-full py-3 px-4 sm:px-6 lg:px-10 flex justify-between items-center">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src={isVisible ? "/sumr-logo-dark.png" : "/sumr-logo-light.png"}
                alt="SUMR Logo"
                width={80}
                height={64}
                layout="intrinsic"
                objectFit="contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              href={links[0].href}
              className={`px-1 py-2 cursor-pointer ${
                isVisible ? "text-[#333333]" : "text-white"
              } rounded-md `}
            >
              Contact us
            </Link>
            <Link
              href={links[2].href}
              className={`px-1 py-2 cursor-pointer ${
                isVisible ? "text-[#333333]" : "text-white"
              } rounded-md `}
            >
              Team
            </Link>
            <Link
              href={links[3].href}
              className={`px-1 py-2 cursor-pointer ${
                isVisible ? "text-[#333333]" : "text-white"
              } rounded-md `}
            >
              Use case
            </Link>
            <Link
              href={links[1].href}
              className={`px-4 py-2 ${
                isVisible
                  ? "text-[#343CED] outline outline-[#343CED] bg-[#FBFBFE]"
                  : "text-white outline outline-white"
              } rounded-md`}
            >
              Sign in
            </Link>
            <Link
              href={links[1].href}
              className={`px-4 py-2 ${
                isVisible
                  ? "text-[#FAFAFA] outline bg-[#343CED]"
                  : "text-[#343CED] outline outline-white bg-[#FAFAFA]"
              } rounded-md`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-white focus:outline-none ${
                isVisible ? "text-[#343CED]" : "text-[#FFF]"
              }`}
            >
              <Menu
                className={`h-6 w-6 ${isVisible ? "text-black" : "text-white"}`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } rounded-lg absolute top-full left-0 right-0 bg-[#FFF] p-4 shadow-lg`}
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-black text-base font-medium py-2 hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* <Link
              href="https://app.sumrlabs.com/sign-in"
              className="block mt-4 px-5 py-2.5 bg-white rounded border border-[#2545d3] text-[#2545d3] text-base font-semibold  text-center hover:bg-[#2545d3] hover:text-white transition-colors"
            >
              Log in
            </Link> */}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
