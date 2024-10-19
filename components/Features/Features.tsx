"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { FeatureProps } from "@/types";
import { Card } from "./Card";

export default function Demo({ featureData }: { featureData: FeatureProps }) {
  const { features } = featureData;
  const containerRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div className=" w-full min-h-screen">
      <main className="w-full md:px-10  px-1 mx-auto">
        <ul
          ref={containerRef}
          className="list-none grid grid-cols-1 gap-8 md:gap-16 py-10"
        >
          {features.map((feature, index) => (
            <Card
              key={index}
              card={feature}
              index={index}
              total={features.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}
