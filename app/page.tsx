import Hero from "@/components/site/Hero";
import ServicesGrid from "@/components/site/ServicesGrid";
import CaseStudiesPreview from "@/components/site/CaseStudiesPreview";
import CTASection from "@/components/site/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <CaseStudiesPreview />
      <CTASection />
    </>
  );
}
