import Hero from "@/components/Home/Hero";
import IntegrationComponent from "@/components/Integrations/Integration";
import Compliance from "@/components/Compliance/Compliance";
import Bookdemo from "@/components/BookDemo/Bookdemo";
import VideoDemo from "@/components/VideoDemo/VideoDemo";
import Features from "@/components/Features/Features";
import { getHomePage } from "@/sanity/lib/queries";

export default async function Home() {
  const homepageContent = await getHomePage();
  // console.log(homepageContent, "homepageContent");

  const { pageBuilder } = homepageContent;
  const heroData = pageBuilder.find((section: any) => section._type === "hero");
  const featureData = pageBuilder.find(
    (section: any) => section._type === "feature"
  );
  const integrationData = pageBuilder.find(
    (section: any) => section._type === "integration"
  );
  const demoData = pageBuilder.find((section: any) => section._type === "demo");
  const complianceData = pageBuilder.find(
    (section: any) => section._type === "compliance"
  );
  const ctaData = pageBuilder.find((section: any) => section._type === "CTA");
  // console.log(featureData, "integrationData");
  return (
    <div className="mr-0">
      <Hero heroData={heroData} />
      <Features featureData={featureData} />
      <IntegrationComponent integrationData={integrationData} />
      <VideoDemo demoData={demoData} />
      <Compliance complianceData={complianceData} />
      <Bookdemo ctaData={ctaData} />
    </div>
  );
}
