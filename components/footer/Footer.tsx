"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
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
    <footer className="bg-blue-600 text-white py-8 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <motion.div
        ref={ref}
        className="container mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <motion.div className="mb-6 md:mb-0" variants={itemVariants}>
            <Image
              src="/Logo-sumr.png"
              alt="SUMR Logo"
              width={144}
              height={56}
              objectFit="contain"
            />

            <motion.p className="text-sm mb-4" variants={itemVariants}>
              Get the latest updates delivered to your inbox.
            </motion.p>
            <motion.div className="flex" variants={itemVariants}>
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-white text-black px-4 py-2 rounded-l-md w-full max-w-xs"
              />
              <button className="bg-gray-200 text-blue-600 px-4 py-2 rounded-r-md">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
          <div className="grid grid-cols-3 place-content-center place-items-start w-100 gap-12">
            <motion.div variants={itemVariants}>
              <motion.h3 className="font-bold mb-4" variants={itemVariants}>
                Follow
              </motion.h3>
              <ul className="space-y-2">
                <motion.li variants={itemVariants}>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          
            <motion.div variants={itemVariants}>
              <motion.h3 className="font-bold mb-4" variants={itemVariants}>
                Company
              </motion.h3>
              <ul className="space-y-2">
                <motion.li variants={itemVariants}>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a href="#" className="hover:underline">
                    Blogs
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a href="#" className="hover:underline">
                    Legal
                  </a>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.h3 className="font-bold mb-4" variants={itemVariants}>
                Resources
              </motion.h3>
              <ul className="space-y-2 ">
                <motion.li variants={itemVariants}>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="border-t border-blue-500 pt-8"
          variants={itemVariants}
        >
          <motion.p className="text-sm text-center" variants={itemVariants}>
            &copy; Sum+r. All rights reserved.
          </motion.p>
        </motion.div>
      </motion.div>
      <div className="absolute z-0 bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">
        <Image
          className="animate-spin-slow"
          src="/Hexagon.png"
          alt="Decorative hexagon"
          width={400}
          height={400}
        />
      </div>

      {/* Top-right Hexagon */}
      <div className="absolute z-0 top-0 right-0 transform translate-x-1/3 -translate-y-1/2">
        <Image
          className="animate-spin-slow"
          src="/Hexagon.png"
          alt="Decorative hexagon"
          width={400}
          height={400}
        />
      </div>
    </footer>
  );
};

export default Footer;
