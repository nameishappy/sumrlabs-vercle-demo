"use client";

import CTAButton from "./CTAButton";
import NakerBackground from "./NakerBackground";
import { TypeAnimation } from "react-type-animation";

interface HeroProps {
  imageUrl: string;
  altText: string;
  heading: string;
  tagline: string;
}

const Hero: React.FC<{ heroData: HeroProps }> = ({ heroData }) => {
  const { heading, tagline } = heroData;

  const headingClasses =
    "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight";

  return (
    <section className="bgBaker -mt-16 text-white w-full py-5 md:py-20 flex flex-col justify-center items-center min-h-[80vh] md:min-h-[100vh] relative overflow-hidden">
      <NakerBackground />
      <div className="max-w-9xl md:-mt-[50px] mt-10 md:pt-20 mx-auto z-30 text-center px-4">
        <div className={`${headingClasses}  mb-0 md:mb-4`}>
          <span>AI-Powered </span>
          <span className="block md:inline-block min-w-[280px] sm:min-w-[340px] md:min-w-[400px] text-center md:text-left">
            <TypeAnimation
              sequence={[
                "Note Summary",
                1000,
                "Voice Narration",
                1000,
                "Entity Mapping",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </span>
        </div>
        <h1 className={`${headingClasses} mb-4`}>
          to automate clinical workflows
        </h1>
        <div className="text-xl mt-5 font-normal max-w-3xl mx-auto mb-8">
          SUM+R empowers clinicians with a personalized AI assistant,
          streamlining workflows, reducing mental-strain, and enhancing patient
          care quality.
        </div>
        <div className="flex justify-center">
          <CTAButton
            color="#fafafa"
            text_color="#343CED"
            classNames="text-[#343CED]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
