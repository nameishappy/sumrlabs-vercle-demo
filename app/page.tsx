"use client";
import Hero from "@/components/Home/Hero";
import IntegrationComponent from "@/components/Integrations/Integration";
import Compliance from "@/components/Compliance/Compliance";
import Bookdemo from "@/components/BookDemo/Bookdemo";
import Demo from "@/components/Features/Demo";
import VideoDemo from "@/components/VideoDemo/VideoDemo";
import { getHomePage } from "@/sanity/lib/queries";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageData, setPageData] = useState({});
  const [title, setTitle] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const homecontent = await getHomePage();
      console.log(homecontent[0].pageBuilder[0].heading);
      setTitle(homecontent[0].pageBuilder[0].heading);
      setPageData(homecontent);
    };
    fetchData();
  }, []);

  return (
    <div className="mr-0">
      <Hero />
      {/* <Features /> */}
      <Demo />
      <IntegrationComponent />
      <VideoDemo />
      <Compliance />
      <Bookdemo />
    </div>
  );
}
