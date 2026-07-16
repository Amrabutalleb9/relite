import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTA from "@/components/home/CTA";
import PageTransition from "@/components/layout/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <ServicesPreview />
      <CTA />
    </PageTransition>
  );
}
