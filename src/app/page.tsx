// src/app/page.tsx
import {
  AudienceSection,
  CTASection,
  Footer,
  HeroSection,
  ServicesSection,
  TestimonialSection,
  WhySection,
  WorkSection
} from "@/components/sections";

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <WorkSection />
      <AudienceSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </main>
  );
}
