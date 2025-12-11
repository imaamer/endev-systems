import Hero from "@/components/site/Hero";
import ServicesGrid from "@/components/site/ServicesGrid";
import CTASection from "@/components/site/CTASection";
import WhatWeDoSection from "@/components/site/WhatWeDoSection";
import CaseStudiesGrid from "@/components/site/CaseStudiesGrid";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import ConceptToManufacturing from "@/components/site/ConceptToManufacturing";
import EndevSystemEdge from "@/components/site/EndevEdge";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDoSection />
      <ServicesGrid />
      <CaseStudiesGrid />
      <ConceptToManufacturing />
      <WhyChooseUs />
      <EndevSystemEdge />
    </>
  );
}
