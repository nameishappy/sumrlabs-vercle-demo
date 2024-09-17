"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ComplianceProps } from "@/types";

const IntegrationComponent = ({
  complianceData,
}: {
  complianceData: ComplianceProps;
}) => {
  const integrations = [
    { name: "hippa", logo: "/logos/Hippa.png" },
    { name: "SOC", logo: "/logos/SOC.png" },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
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
    <section className="w-screen py-10 md:py-20 flex flex-col justify-center">
      <div className="max-w-full md:max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-4" variants={textVariants}>
            <div className="text-[#2b2b2b] text-xl md:text-2xl lg:text-3xl font-normal md:text-start text-center">
              {complianceData.heading}
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 place-content-around place-items-center">
            {complianceData.integrationImages.map((integration) => (
              <motion.div
                key={integration.imageUrl}
                className="bg-purple-custom w-48 h-48 md:h-60 md:w-60 p-4 mb-8 rounded-lg flex items-center justify-center"
                variants={logoVariants}
              >
                <Image
                  src={integration.imageUrl}
                  alt={`${integration.altText} logo`}
                  width={150}
                  height={150}
                  objectFit="contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationComponent;
