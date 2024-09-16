"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IntegrationProps } from "@/types";

// Define a type for the direction object
interface Direction {
  x: number;
  y: number;
}

const IntegrationComponent = ({
  integrationData,
}: {
  integrationData: IntegrationProps;
}) => {
  const integrations = [
    {
      name: "Epic",
      logo: integrationData.integrationImages[0].imageUrl,
      direction: { x: -100, y: -100 },
    },
    {
      name: "Cerner",
      logo: integrationData.integrationImages[1].imageUrl,
      direction: { x: 100, y: -100 },
    },
    {
      name: "Veradigm",
      logo: integrationData.integrationImages[2].imageUrl,
      direction: { x: -100, y: 100 },
    },
    {
      name: "Athena Health",
      logo: integrationData.integrationImages[3].imageUrl,
      direction: { x: 100, y: 100 },
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: (direction: Direction) => ({
      x: direction.x,
      y: direction.y,
      opacity: 0,
    }),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full md:max-w-7xl mx-auto">
        <div className="grid grid-rows-1 md:grid-cols-2 gap- md:gap-8 items-center">
          <motion.div
            ref={ref}
            className="grid grid-rows-1 md:grid-cols-2 gap-3 md:col-span-1"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                className="bg-purple-custom h-[200px] md:h-100 md:w-100  p-4 mb-8 rounded-lg flex items-center justify-center"
                variants={itemVariants}
                custom={integration.direction}
              >
                <Image
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  width={150}
                  height={150}
                  objectFit="contain"
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            ref={ref}
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={childVariants}
              className="text-[#2b2b2b] text-xl md:text-2xl lg:text-3xl font-normal text-center md:text-start "
            >
              {integrationData.heading}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationComponent;
