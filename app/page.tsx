import Hero from "@/components/site/Hero";
import ServicesGrid from "@/components/site/ServicesGrid";
import CaseStudiesPreview from "@/components/site/CaseStudiesPreview";
import CTASection from "@/components/site/CTASection";
import Navbar from "@/components/site/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <ServicesGrid />
      <CaseStudiesPreview />
      <CTASection />
    </>
  );
}
