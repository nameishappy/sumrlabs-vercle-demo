import { getUseCaseData } from "@/sanity/lib/queries";
import Image from "next/image";
import React from "react";

const useCases = [
  {
    heading: "Radiologist",
    point:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint debitis, maiores veritatis, dolorem aut, sunt velit dolorum sapiente ea nihil illo doloribus dicta libero quo! Exercitationem, culpa maxime aperiam, minima quos ipsam voluptas necessitatibus ipsa placeat, nam reiciendis eligendi veritatis illum aliquid eaque quaerat. ",
  },
];
const page = async () => {
  const useCaseData = await getUseCaseData();
  console.log(useCaseData);
  const useCaseContent = useCaseData[0];
  console.log(useCaseContent.content);
  return (
    <div className="w-full">
      <div className="h-[40vh] w-full relative flex flex-col justify-end bg-[#3F4BEF]">
        <div className="pb-5 font-bold w-3/4 mx-auto  text-5xl">Use Cases</div>
      </div>
      <section className=" w-3/4 mx-auto text-[#333]">
        <div className=" py-12 Heading text-2xl">
          {useCaseContent.mainHeading}
        </div>
        <div className="flex flex-col gap-4">
          {useCaseContent.content.map((useCase) => {
            return (
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl ">{useCase.point}</h3>
                <div className="">{useCase.point}</div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default page;
