"use client";
import React from "react";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { Feature } from "@/types";
import { CheckCheck } from "lucide-react";

interface CardProps {
  card: Feature;
  index: number;
  total: number;
  scrollYProgress: any;
}

export const Card = ({ card, index, total, scrollYProgress }: CardProps) => {
  const cardHeight = 100; // Adjust this value based on your card's height
  const stackOffset = 10; // Adjust this value to control the stacking effect

  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index * stackOffset]
  );

  return (
    <motion.li
      className="sticky top-24"
      style={{
        // height: `${cardHeight}vh`,
        // marginBottom: `${stackOffset}vh`,
        paddingTop: "40px",
      }}
    >
      <motion.div
        className={`text-black w-5/6 mx-auto min-h-[65vh] rounded-3xl overflow-hidden flex items-center px-3 md:px-10 pt-10 md:pt-0  justify-center`}
        style={{
          y: yOffset,
          backgroundColor: card.color,
          position: "relative",
          zIndex: total - index,
        }}
      >
        <div className="flex flex-col w-full md:flex-row justify-between">
          <div className="flex flex-1 justify-center flex-col lg:gap-6 gap-3 items-canter">
            <div className="text-xl font-light md:text-2xl lg:text-3xl mb-2">
              {card.heading}
            </div>
            <p className="mb-4 text-base font-extralight">{card.description}</p>
            <div className="mb-4 flex flex-col">
              {card.bullets.map((bullet, index) => (
                <span
                  key={index}
                  className={`sm:w-max w-full h-14 sm:h-full text-black text-xs md:text-sm px-3 py-2 rounded-full mr-2 mb-2 items-center flex gap-2`}
                  style={{ backgroundColor: card.bulletBgcolor }}
                >
                  <CheckCheck color="#333333" width="18px" />
                  {bullet}
                </span>
              ))}
            </div>
            <a
              href={"https://tally.so/r/wg49NK"}
              className="pt-4 text-base hover:underline"
            >
              Learn More →
            </a>
          </div>
          <div className="flex flex-1 flex-wrap md:justify-end justify-center items-center content-start gap-2 w-full h-full">
            <div className="relative flex justify-center items-center w-full aspect-square">
              <Image
                src={card.imageUrl}
                height={300}
                width={400}
                alt="Agent"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
};
