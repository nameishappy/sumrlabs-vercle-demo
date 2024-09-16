"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const links = [
    {
      name: "term-of-services",
      href: "/termsofuse",
    },
    {
      name: "Privacy Policy",
      href: "/privacypolicy",
    },
  ];
  const router = useRouter();

  const handleClick = (x: number) => {
    // Navigate to the page with `termofservices` appended to the URL
    router.push(links[x].href);
  };
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
    <footer className="bg-blue-btn relative text-white py-8 px-4 md:px-8 lg:px-16  overflow-hidden">
      <motion.div
        ref={ref}
        className="container mx-auto w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div className="mb-6 md:mb-0" variants={itemVariants}>
            <Image
              src="/Logo-sumr.png"
              alt="SUMR Logo"
              width={144}
              height={56}
              objectFit="contain"
            />

            <motion.p className="text-sm mb-4" variants={itemVariants}>
              @2024 sumrlabs.inc
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-2 z-20 place-content-center place-items-start w-100 gap-12">
            <Link href={links[0].href}>
              <motion.div variants={itemVariants}>
                <motion.h3 className="mb-4" variants={itemVariants}>
                  Terms of Use
                </motion.h3>
              </motion.div>
            </Link>
            <Link href={links[1].href}>
              <motion.div variants={itemVariants}>
                <motion.h3 className="mb-4" variants={itemVariants}>
                  Privacy Policy
                </motion.h3>
              </motion.div>
            </Link>
          </div>
        </div>
        <motion.div
          className="border-t border-blue-500 mr-0 ml-0 pt-8"
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
