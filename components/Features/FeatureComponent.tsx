'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface FeatureComponentProps {
  index: number;
}

const FeatureComponent: React.FC<FeatureComponentProps> = ({ index }) => {
  // For parallax effect
  const { scrollYProgress } = useScroll();
  const scale: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // Apply scale transformation

  return (
    <motion.div 
      className="max-w-7xl w-100 lg:pt-10 bg-[#e4f2fa] mx-auto mb-30" // Added margin-bottom for spacing between cards
      style={{ scale }} // Apply scale transformation
    >
      <div className="relative rounded-lg overflow-hidden">
        <div className="lg:absolute lg:inset-y-0 lg:right-5 lg:top-5 lg:w-1/2">
          <Image
            src="/summary.png"
            alt="AI-generated patient summary"
            width={700}
            height={300}
            className="h-56 w-full rounded-md object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          />
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="text-3xl font-normal font-['Poppins'] leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Gain immediate access to AI-generated patient summaries.
              </h2>
              <div className="mt-8 flex space-x-2">
                <div className="w-8 h-2 bg-[#2545d3] rounded-full" />
                <div className="w-8 h-2 bg-[#d9d9d9] rounded-full" />
                <div className="w-8 h-2 bg-[#d9d9d9] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureComponent;
