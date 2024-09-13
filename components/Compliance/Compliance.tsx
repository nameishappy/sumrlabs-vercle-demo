"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IntegrationComponent = () => {
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
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-9xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-4" variants={textVariants}>
            <div className="text-[#2b2b2b] text-xl md:text-2xl lg:text-3xl font-normal font-['Poppins'] text-center">
              Secure, Compliant, and Trusted Healthcare Solutions:
              <br />
              HIPAA and SOC 2 Certified for Ultimate Data Protection
            </div>
          </motion.div>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 place-content-around place-items-center">
            {integrations.map((integration) => (
              <motion.div
                key={integration.name}
                className="bg-[#e5f3fa] w-48 h-48 md:h-60 md:w-60 p-4 mb-8 rounded-lg flex items-center justify-center"
                variants={logoVariants}
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrationComponent;
