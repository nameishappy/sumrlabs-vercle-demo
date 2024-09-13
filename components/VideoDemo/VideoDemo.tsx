"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VideoDemo = () => {
  const features = [
    "AI-generated patient summaries",
    "Review essential medical terms",
    "Text-to-speech for physicians",
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-10 py-12 md:py-24">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="w-full mx-auto mb-8 md:mb-0">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 md:w-100"
                  variants={featureVariants}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image
                      alt="check"
                      src="/icons/Right.png"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="text-xl  text-black md:text-2xl lg:text-3xl">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div className="w-full md:w-1/2" variants={videoVariants}>
            <div className="bg-[#e5f3fa] p-4 rounded-lg shadow-lg">
              <Image
                className="w-full h-auto rounded"
                src="/gifs/demo.gif"
                alt="Video demo placeholder"
                width={30}
                height={30}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoDemo;
