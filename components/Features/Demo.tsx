"use client";
import Card from "./Card";
import { projects } from "./data";
import { useScroll, MotionValue } from "framer-motion"; // Explicit import for MotionValue type
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function Demo() {
  // Type ref for HTMLDivElement
  const container = useRef<HTMLDivElement>(null);

  // Explicitly type scrollYProgress
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
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
    <main className="relative mt-16">
      <div className="" ref={container}>
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <Card
              key={index}
              i={index}
              {...project}
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
