"use client";
// src/app/casestudy/CaseStudyContent.tsx
import { useSearchParams } from "next/navigation";
import CombinedAnimation from "@/animation/CombinedAnimation";
import { CTASection, Footer, TestimonialSection } from "@/components/sections";
import { CaseStudyNarrativeSection } from "@/components/CaseStudyNarrativeSection";
import { MediaBlock } from "@/components/MediaBlock";
import hardhat from "../../icons/hardhat.svg";
import location from "../../icons/location.svg";
import user from "../../icons/user.svg";
import mark from "../../icons/mark.svg";
import clock from "../../icons/clock.svg";
import { caseStudyData, type CaseStudyEntry } from "../../data/caseStudies";

function CaseStudy404() {
  return (
    <div className="w-full min-h-screen bg-[#021514] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-[#A2F7B4] mb-4">Case Study Not Found</h1>
        <p className="text-[#B1BFBF] text-lg mb-8">
          The case study you're looking for doesn't exist. Please visit our work page to explore other projects.
        </p>
        <a
          href="/allwork"
          className="inline-block bg-[#A2F7B4] text-[#021514] px-8 py-3 rounded font-semibold hover:bg-[#85E89D] transition"
        >
          Back to Work
        </a>
      </div>
    </div>
  );
}

export default function CaseStudyContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const duration = searchParams.get("duration") || "3 weeks";

  // If no title provided or title doesn't exist in data, show 404
  if (!title || !caseStudyData[title]) {
    return <CaseStudy404 />;
  }

  const data: CaseStudyEntry = caseStudyData[title];
  const icon = searchParams.get("icon") || "/default-icon.svg";

  return (
    <section className="bg-[#021514] relative overflow-x-hidden font-poly-sans">
      {/* Section 1 - Hero */}
      <div className="flex flex-col w-full min-h-screen bg-[#021514] items-start gap-12 md:gap-16 lg:gap-20 pt-8 pb-16 px-4 md:px-8 lg:px-10 relative">
        <div className="flex flex-col justify-center items-start p-0 gap-4 md:gap-6 w-full max-w-7xl mx-auto">
          {/* Logo and completion badge */}
          <div className="flex flex-col items-start md:items-end p-0 gap-2 md:gap-4 w-full md:w-auto self-start md:self-end">
            <div className="box-border w-32 md:w-40 lg:w-44 h-10 md:h-12 lg:h-14 bg-white border border-[#A4A4A4] border-2 flex items-center justify-center">
              <img src={icon} alt={`${title} Logo`} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-row justify-start md:justify-end items-center p-0 gap-2 w-full md:w-auto">
              <div className="w-5 h-5 md:w-6 md:h-6 relative flex-shrink-0">
                <img src={clock.src} alt="clock" />
              </div>
              <span className="font-poly-sans font-normal text-lg md:text-xl lg:text-2xl leading-tight text-center text-[#E5F9E0]">
                Completed in {duration}
              </span>
            </div>
          </div>

          {/* Title section */}
          <div className="flex flex-col items-start p-0 gap-2 md:gap-4 w-full">
            <div className="flex flex-col items-start p-0 gap-3 md:gap-4 w-full max-w-4xl">
              <span className="font-poly-sans font-semibold text-xs md:text-sm leading-tight tracking-wide text-[#858BE3]">
                CASE STUDY
              </span>
              <h1 className="font-poly-sans font-normal text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-[#A2F7B4]">
                {title}
              </h1>
              <p className="font-poly-sans font-normal text-sm md:text-base leading-relaxed tracking-wide text-[#B1BFBF]">
                {data.shortDescription}. We helped them solve {data.coreProblem} with clear, fast, and effective execution.
              </p>
            </div>
          </div>
        </div>

        <CombinedAnimation />
      </div>

      {/* Section 2 - Client Overview */}
      <div className="w-full bg-[#E5F9E0] relative py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
        <div className="w-full mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-[46%] self-start flex flex-col gap-6 md:gap-8 lg:gap-10">
            <div className="flex flex-col gap-3 lg:gap-4">
              <h2 className="font-normal text-4xl md:text-5xl lg:text-[57px] leading-tight lg:leading-[64px] tracking-[-0.25px] text-[#021514]">
                Client Overview
              </h2>
              <p className="font-normal text-sm md:text-base leading-relaxed tracking-[0.5px] text-[#8CA1A0]">
                {title} is a {data.shortDescription}. They approached us to solve {data.coreProblem}.
              </p>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-8 lg:gap-10">
              {/* Industry */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 relative">
                    <img src={hardhat.src} alt="Hardhat icon" className="w-full h-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm text-[#021514]">Industry</span>
                  <span className="font-normal text-sm text-[#8CA1A0]">{data.industry}</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 relative">
                    <img src={location.src} alt="Location icon" className="w-full h-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm text-[#021514]">Location</span>
                  <span className="font-normal text-sm text-[#8CA1A0]">{data.location}</span>
                </div>
              </div>

              {/* Company Size */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 relative">
                    <img src={user.src} alt="User icon" className="w-full h-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-sm text-[#021514]">Company Size</span>
                  <span className="font-normal text-sm text-[#8CA1A0]">{data.companySize}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-[54%] self-start">
            <div className="w-full h-[400px] lg:h-[500px] relative rounded-lg overflow-hidden">
              <MediaBlock media={data.media.clientOverview} alt={`${title} Overview`} />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Challenge */}
      <CaseStudyNarrativeSection
        title="The Challenge"
        theme="dark"
        section={data.challenge}
        imagePosition="right"
      />

      {/* Section 4 - What We Did */}
      <CaseStudyNarrativeSection
        title="What We Did"
        theme="light"
        section={data.whatWeDid}
        imagePosition="left"
      />

      {/* Section 5 - Results */}
      <div className="w-full bg-[#021514] py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
        <div className="w-full mx-auto">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10 lg:mb-12">
            <h2 className="font-normal text-4xl md:text-5xl lg:text-[57px] leading-tight lg:leading-[64px] tracking-[-0.25px] text-[#A2F7B4]">
              Results
            </h2>
            <p className="font-normal text-sm md:text-base leading-relaxed tracking-[0.5px] text-[#B1BFBF] max-w-2xl">
              {data.resultsDescription}
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.results.map((result, index) => (
              <div key={index} className="bg-[#E5F9E0] rounded-lg p-6 lg:p-8 flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#021514] rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-6 h-6 relative">
                    <img src={mark.src} alt="Check mark" className="w-full h-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg text-[#021514]">{result.title}</h3>
                  <p className="font-normal text-sm text-[#8CA1A0] leading-relaxed">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
      <TestimonialSection />
      <Footer />
    </section>
  );
}