"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const links = [
    {
      name: "Terms of Use",
      href: "/termsofuse",
    },
    {
      name: "Privacy Policy",
      href: "/privacypolicy",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className=" w-3/4 mt-10 my-5 mx-auto sm:px-4 py-8 ">
      <footer className=" relative text-black  overflow-hidden">
        <motion.div
          ref={ref}
          className="container mx-auto w-full z-10 "
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Footer Top Section */}
          <div className="flex flex-col justify-between  mb-8 space-y-6 md:space-y-0">
            <motion.div
              className="flex ml-1 flex-col md:items-start items-center gap-3 mb-6 md:mb-0 text-center md:text-left z-10"
              variants={itemVariants}
            >
              <Link href={"/"}>
                <Image
                  src="/sumr-logo-dark.png"
                  alt="SUMR Logo"
                  width={80}
                  height={64}
                  layout="intrinsic"
                  objectFit="contain"
                />
              </Link>
              <div className="relative md:w-2/6 font-medium">
                <a href="mailto:hello@sumrlabs.com">care@sumrlabs.com</a>
                {/* <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 pr-10 text-gray-700 bg-gray-100 rounded-md focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 focus:outline-none"
                >
                  <ArrowRight size={20} />
                </button> */}
              </div>
            </motion.div>

            {/* Links Section */}
          </div>

          {/* Footer Bottom Section */}
          <motion.div
            className="border-t flex flex-col md:flex-row items-center justify-between border-black pt-8"
            variants={itemVariants}
          >
            {/* Copyright Information */}
            <motion.div
              className="text-sm mb-4 md:mb-0 text-center md:text-left"
              variants={itemVariants}
            >
              <p>&copy;2024 Sumr Labs Inc. All rights reserved.</p>
            </motion.div>
            <div className="grid grid-cols-2 gap-6 md:gap-12 text-center md:text-left z-10">
              {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <motion.div variants={itemVariants}>
                    <motion.h3 className="text-sm" variants={itemVariants}>
                      {link.name}
                    </motion.h3>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
