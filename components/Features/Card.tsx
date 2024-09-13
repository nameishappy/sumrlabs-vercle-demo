"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"; // Import MotionValue
import { useRef } from "react";

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>; // Set the correct type for progress
};

const Card = ({
  i,
  title,
  description,
  src,
  link,
  color,
  range,
  targetScale,
  progress,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]); // image zoom out animation
  const scale = useTransform(progress, range, [1, targetScale]); // stacking effect

  return (
    <div
      ref={container}
      className="cardContainer flex items-center justify-center w-100 m-10 lg:h[90vh] md:h-[70vh] sticky top-0"
    >
      <motion.div
        className="card flex flex-col w-100 md:h-[50vh] relative rounded-3xl p-5"
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div className="lg:absolute lg:inset-y-0 lg:right-5 lg:top-5 lg:w-1/2">
          <Image
            src={src}
            alt={title}
            width={700}
            height={300}
            className="h-48 w-full rounded-md sm:h-72 md:h-96 lg:w-full"
            objectFit="contain"
          />
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="lg:text-3xl md:text-2xl sm:text-xl font-normal font-['Poppins'] leading-8 tracking-tight text-gray-900">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
