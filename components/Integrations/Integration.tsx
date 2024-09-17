"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IntegrationProps } from "@/types";

const IntegrationComponent = ({
  integrationData,
}: {
  integrationData: IntegrationProps;
}) => {
  const integrations = [
    {
      name: "Epic",
      logo: integrationData.integrationImages[0].imageUrl,
    },
    {
      name: "Cerner",
      logo: integrationData.integrationImages[1].imageUrl,
    },
    {
      name: "Veradigm",
      logo: integrationData.integrationImages[2].imageUrl,
    },
    {
      name: "Athena Health",
      logo: integrationData.integrationImages[3].imageUrl,
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const childVariants = {
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

  return (
    <section className="w-full py-10 md:py-20 px-4 md:px-0 overflow-hidden">
      <div className="max-w-full md:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <motion.div
            ref={ref}
            className="grid grid-cols-2 gap-4 md:gap-6 w-full md:w-1/2 mb-8 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                className="bg-purple-custom h-[150px] md:h-[200px] p-4 rounded-lg flex items-center justify-center"
                variants={itemVariants}
              >
                <Image
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            ref={ref}
            className="w-full md:w-1/2 space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={childVariants}
              className="text-[#2b2b2b] text-xl md:text-2xl lg:text-3xl font-normal text-center md:text-start"
            >
              {integrationData.heading}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationComponent;
