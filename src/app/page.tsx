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
    <main className="mx-auto my-8 max-w-[1360px] space-y-0 px-4 sm:px-6 lg:px-8">
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

