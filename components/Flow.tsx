"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Flow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/sumrapp1.png", "/images/sumrapp2.png"];
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Create thresholds from 0 to 1
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intersectionRatio = entry.intersectionRatio;
          const newIndex = Math.min(
            Math.floor(intersectionRatio * images.length),
            images.length - 1
          );
          setCurrentImageIndex(newIndex);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [images.length]);

  return (
    <div
      ref={containerRef}
      className="relative h-[40vh] md:h-[60vh] lg:h-[80vh] top-5 -mt-28 md:w-full w-3/4 mx-auto flex items-center justify-center"
    >
      {images.map((src, index) => (
        <motion.img
          key={src}
          src={src}
          alt={`Image ${index + 1}`}
          className="rounded-3xl absolute md:top-0 left-0 w-full h-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};

export default Flow;
