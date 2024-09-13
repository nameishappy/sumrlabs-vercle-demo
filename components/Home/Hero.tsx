"use client";
import { content } from "@/locales/content";
import CTAButton from "./CTAButton";
import Image from "next/image";
import Header from "../header/Header";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className=" text-black">
      <div className={styles["wrapper-of-wrapper"]}>
        <div className={styles.wrapper}>
          <div className={styles.rainbow}></div>
        </div>
      </div>
      {/* <Header /> */}
      <section className=" w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 min-h-[50vh] md:min-h-[90vh] relative  overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-['SUSE'] leading-tight mb-6">
              REVOLUTIONIZING DIAGNOSTICS WITH PRECISION SUMMARIZATION
            </h1>
            <p className=" text-md sm:text-base font-normal font-['Poppins'] max-w-2xl mx-auto mb-8">
              Empower your diagnostic process with AI-driven summaries that
              distill complex medical data into actionable insights.
            </p>
          </div>
          <div className="flex justify-center">
            <CTAButton />
          </div>
        </div>

        {/* Left Hexagon */}
        <div className="absolute z-0 bottom-0 left-0 transform -translate-x-1/2 translate-y-1/4 w-1/2 max-w-md">
          <Image
            className="animate-spin-slow"
            src="/Hexagon.png"
            alt="Decorative hexagon"
            layout="responsive"
            width={400}
            height={400}
          />
        </div>

        {/* Right Hexagon - Half Hidden */}
        <div className="absolute z-0 top-0 right-0 transform translate-x-1/2 -translate-y-1/4 w-1/2 max-w-md">
          <Image
            className="animate-spin-slow"
            src="/Hexagon.png"
            alt="Decorative hexagon"
            layout="responsive"
            width={400}
            height={400}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
