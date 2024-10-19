import React from "react";
import CTAButton from "../Home/CTAButton";

const CtaSection = () => {
  return (
    <section className="md:h-[90vh]">
      <div className="relative h-full my-10 flex flex-col items-center justify-center w-full md:h-[95vh] mx-auto ">
        <figure className="absolute h-[40vh] lg:h-[80vh] hidden  md:flex items-center justify-center w-9/10 md:w-full">
          <img
            src="/Circle.png"
            alt="Callout"
            className="h-full object-contain opacity-100"
          />
        </figure>
        <div className="flex flex-col text-[#333333] items-center gap-4 w-full max-w-xl px-10 text-center z-1">
          <span className="md:2xl text-xl lg:text-3xl">
            Our Clinicians save up to{" "}
            <span className="text-[#343CED] font-semibold">
              <br />2 hours
            </span>{" "}
            / day
          </span>
          <span className="font-medium text-sm text-grey-800">
            Deploy SUM+R today and experience a more efficient <br /> approach
            to automating your clinical workflows.
          </span>
          <div className="mt-4">
            <CTAButton
              color="#fff"
              classNames="bg-white text-[#343CED] outline outline-[#343CED]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
