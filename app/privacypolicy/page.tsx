import CTAButton from '@/components/Home/CTAButton';
import { getPrivacyPolicyPageData } from '@/sanity/lib/queries';
import React from 'react';

const page = async () => {
  const policyPageData = await getPrivacyPolicyPageData();
  const policyTitle = policyPageData[0]?.title || 'Privacy Policy'; // Fallback in case title is not available
  const policyContent = policyPageData[0]?.content[0]?.children[0]?.text || 'No privacy policy content available'; // Fallback in case content is not available
  console.log(policyContent); // For debugging purposes

  return (
    <>
      <div className="flex flex-col w-full h-[102px] bg-[#e5f3fa] justify-center">
        <p className="text-center text-black text-lg md:text-xl font-medium font-['Nunito'] justify-center px-4 sm:px-8">
          {policyTitle}
        </p>
      </div>

      <div className="w-full max-w-[1310px] text-black text-base sm:text-lg md:text-xl font-medium font-['Nunito'] mx-auto px-4 sm:px-6 md:px-8">
        <p>{policyContent}</p>
      </div>

      <div className="w-full max-w-[1313px] h-auto md:h-[314px] p-6 md:pl-[84px] md:pr-[87px] md:pt-[108px] md:pb-[116px] bg-[#e5f3fa] rounded-[15px] flex justify-center items-center my-[10vh]">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-[270px]">
          <div className="w-full md:w-[573px] text-neutral-800 text-xl md:text-3xl font-normal font-['Poppins'] text-center md:text-left">
            Experience the Future of Healthcare - Get Started with SUMR Today!
          </div>
          <div className="mt-4 md:mt-0 pl-6 md:pl-[65px] pr-6 md:pr-14 pt-4 md:pt-[22px] pb-4 md:pb-[21px] bg-[#2545d3] rounded-md flex justify-center items-center">
            <CTAButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
