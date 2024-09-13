import React from "react";
import CTAButton from "../Home/CTAButton";
import { CtaProps } from "@/types";

const Bookdemo = ({ ctaData }: { ctaData: CtaProps }) => {
  return (
    <div className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="mx-4 md:mx-8 lg:mx-16 bg-[#e5f3fa] rounded-lg shadow-md overflow-hidden">
        <div className="p-6 md:p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-2/3 lg:w-1/2 text-neutral-800 text-xl md:text-2xl lg:text-3xl font-normal font-['Poppins'] text-center md:text-left">
            <h2 className="mb-4">
              Experience the Future of Healthcare-
              <br className="hidden md:inline" /> Get Started with SUMR Today!
            </h2>
          </div>
          <div className="w-full flex items-center justify-center">
            <CTAButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdemo;
