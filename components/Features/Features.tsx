"use client";
import Card from "./Card";
import { projects } from "./data";
import { useScroll, MotionValue } from "framer-motion"; // Explicit import for MotionValue type
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { FeatureProps } from "@/types";

export default function Demo({ featureData }: { featureData: FeatureProps }) {
  // Type ref for HTMLDivElement
  const { features } = featureData;
  const container = useRef<HTMLDivElement>(null);

  // Explicitly type scrollYProgress
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

  useEffect(() => {
    const lenis = new Lenis();

    // Explicitly type 'time' as DOMHighResTimeStamp
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="relative mt-16 px-4 sm:px-6 lg:px-8">
      <div className="" ref={container}>
        {features.map((feature, index) => {
          const targetScale = 1 - (features.length - index) * 0.05;
          return (
            <Card
              key={index}
              i={index}
              {...feature}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </main>
  );
}
