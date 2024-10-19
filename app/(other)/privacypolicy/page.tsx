import { getCTA, getPrivacyPolicyPageData } from "@/sanity/lib/queries";
import React from "react";

const page = async () => {
  const policyPageData = await getPrivacyPolicyPageData();
  const policyTitle = policyPageData[0]?.title || "Privacy Policy";
  const policyContent =
    policyPageData[0]?.content[0]?.children[0]?.text ||
    "No privacy policy content available";
  return (
    <>
      <div className="flex flex-col w-full h-[fit] justify-center pt-[18vh] py-[2vh] top-0 z-30">
        <p className="text-center text-black text-lg md:text-xl lg:text-2xl font-semibold  justify-center px-4 sm:px-8">
          {policyTitle}
        </p>
      </div>

      <div className="w-full max-w-[1310px] text-black text-base sm:text-lg md:text-xl font-medium  mx-auto px-4 sm:px-6 md:px-8">
        <div dangerouslySetInnerHTML={{ __html: policyContent }} />
      </div>
    </>
  );
};

export default page;
