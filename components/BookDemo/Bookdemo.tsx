import React from "react";
import CTAButton from "../Home/CTAButton";
import { CtaProps } from "@/types";

const Bookdemo = ({ ctaData }: { ctaData: CtaProps }) => {
  return (
    <div className="pt-16 md:pt-24 lg:pt-32 bg-white">
      <div className=" bg-purple-custom shadow-md overflow-hidden">
        <div className="p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full text-neutral-800 text-xl md:text-2xl lg:text-3xl font-normal  text-center md:text-left">
            <h2 className="mb-4">
              Experience the Future of Healthcare-
              <br className="hidden md:inline" /> Get Started with SUMR Today!
            </h2>
          </div>
          <div className="w-full flex items-center justify-center lg:justify-end">
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdemo;
