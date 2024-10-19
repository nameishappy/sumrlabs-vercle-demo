import Hero from "@/components/Home/Hero";
import Compliance from "@/components/Compliance/Compliance";
import Features from "@/components/Features/Features";
import { getHomePage } from "@/sanity/lib/queries";
import InfiniteText from "@/components/InfiniteText/InfiniteText";
import CtaSection from "@/components/CtaSection/CtaSection";
import Animae from "@/components/Animae";
import Header from "@/components/header/Header";

export default async function Home() {
  const homepageContent = await getHomePage();

  const { pageBuilder } = homepageContent;

  const heroData = pageBuilder.find((section: any) => section._type === "hero");
  const featureData = pageBuilder.find(
    (section: any) => section._type === "feature"
  );
  const complianceData = pageBuilder.find(
    (section: any) => section._type === "compliance"
  );

  // console.log(heroData);

  return (
    <>
      <Header />
      <div className="w-screen flex flex-col gap-5 ">
        <div className="w-full">
          <Hero heroData={heroData} />
          <Animae />
          <InfiniteText />
        </div>
        <Features featureData={featureData} />
        <div className="my-5 py-8 md:mx-10 mx-5 px-4 md:px-5 sm:px-4 flex justify-center items-center">
          <Compliance complianceData={complianceData} />
        </div>
        <CtaSection />
      </div>
    </>
  );
}
