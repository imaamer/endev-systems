import Hero from "@/components/site/Hero";
import ServicesGrid from "@/components/site/ServicesGrid";
import WhatWeDoSection from "@/components/site/WhatWeDoSection";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import ConceptToManufacturing from "@/components/site/ConceptToManufacturing";
import ToolsExpertise from "@/components/site/ToolsExpertise";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDoSection />
      <ServicesGrid />
      <ToolsExpertise />
      <ConceptToManufacturing />
      <WhyChooseUs />
    </>
  );
}
