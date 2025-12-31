import Hero from "@/components/site/Hero";
import ServicesGrid from "@/components/site/ServicesGrid";
import WhatWeDoSection from "@/components/site/WhatWeDoSection";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import ToolsExpertise from "@/components/site/ToolsExpertise";
import DevelopmentProcess from "@/components/site/DevelopmentProcess";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDoSection />
      <ServicesGrid />
      <DevelopmentProcess />
      <ToolsExpertise />
      <WhyChooseUs />
    </>
  );
}
