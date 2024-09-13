"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>; // Explicitly typed as MotionValue<number>
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
  const container = useRef<HTMLDivElement>(null); // Explicitly typed ref
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]); // Image zoom-out animation
  const scale = useTransform(progress, range, [1, targetScale]); // Stacking effect

  return (
    <div
      ref={container}
      className="cardContainer w-100 md:max-w-7xl md:w-5xl max-w-3xl m-10 flex h-[80vh] md:h-[90vh] items-center justify-center sticky top-0"
    >
      <motion.div
        className="card flex flex-col w-100 items-center justify-start h-fit md:h-fit lg:h-full relative w-full rounded-3xl p-5"
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <div className="lg:absolute lg:inset-y-0 lg:right-5 lg:top-8 h-fit lg:w-1/2">
          <Image
            src="/summary1.png"
            alt="AI-generated patient summary"
            width={700}
            height={300}
            className="h-48 w-full rounded-md sm:h-72 md:h-96 lg:w-full"
            objectFit="contain"
          />
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="md:text-3xl text-xl font-normal font-['Poppins'] leading-8 tracking-tight text-gray-900 sm:text-4xl">
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
