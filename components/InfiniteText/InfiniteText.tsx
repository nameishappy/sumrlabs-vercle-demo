"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const InfiniteLogoSlider = () => {
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
  ];

  const duration = 30; // Increased duration for slower animation

  return (
    <div className=" h-32 w-full overflow-hidden mt-5 flex items-center relative">
      <motion.div
        className="flex items-center space-x-16 absolute" // Increased space between logos
        style={{
          whiteSpace: "nowrap",
          width: "fit-content",
        }}
        animate={{
          x: ["0%", "-50%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear",
            },
          },
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-48 h-24"
          >
            {" "}
            {/* Fixed width and height for consistency */}
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={120}
              height={120}
              objectFit="contain"
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteLogoSlider;
