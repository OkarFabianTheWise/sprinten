"use client";

import { useSearchParams } from "next/navigation";
import CombinedAnimation from "@/animation/CombinedAnimation";
import { CTASection, Footer, TestimonialSection } from "@/components/sections";
import hardhat from "../../icons/hardhat.svg";
import location from "../../icons/location.svg";
import user from "../../icons/user.svg";
import mark from "../../icons/mark.svg";
import clock from "../../icons/clock.svg";
import { caseStudyData } from "../../data/caseStudies";

export default function CaseStudyContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '[Client Name]';
  const duration = searchParams.get('duration') || '[X] Days';
  const img = searchParams.get('img') || '/client-handshake.jpg';
  const icon = searchParams.get('icon') || '/default-icon.svg';

  const data = caseStudyData[title] || {
    shortDescription: '[short description]',
    coreProblem: '[core problem]',
    industry: 'Fintech',
    location: 'Germany',
    companySize: '50-100 employees',
    challengeDescription: 'Sprintin AI was building a fast, on-chain AI platform, but their product experience didn\'t reflect the speed and intelligence of what was happening under the hood. Their existing interface felt fragmented, unclear, and inconsistent across pages, which made onboarding slow and confused new users.',
    whatWeDidDescription: 'Sprintin AI was building a fast, on-chain AI platform, but their product experience didn\'t reflect the speed and intelligence of what was happening under the hood. Their existing interface felt fragmented, unclear, and inconsistent across pages, which made onboarding slow and confused new users.',
    resultsDescription: 'Sprinten\'s sprint delivered tangible improvements that empowered the client to ship smarter and faster, building trust with users.',
    results: [
      { title: 'Smooth Onboarding & Engagement', description: 'New flows reduced friction, helping first-time users quickly understand and adopt the platform.' },
      { title: 'Cohesive, Premium UI', description: 'Consistent design and a component library created a scalable, high-quality experience that strengthens trust.' },
      { title: 'Measurable Business Impact', description: 'Faster launch and improved clarity drove higher early adoption, increased engagement, and positioned the client as a credible, professional product in the market.' }
    ]
  };

  return (
    <section className="bg-[#021514] relative overflow-x-hidden font-poly-sans">
        {/* Section 1 */}
        <div className="flex flex-col flex-start w-full min-h-[986px] bg-[#021514] items-start gap-[80px] top-[32px] px-[40px] relative mb-16">
            <div className="flex flex-col justify-center items-start p-0 gap-6 w-full h-[346px]">
                
                {/* Frame 1618868442 - Logo section */}
                <div className="flex flex-col items-end p-0 gap-4 w-[395px] h-[94px] self-end">
                    {/* Added self-end to keep logo on right ↑ */}
                    {/* Logo and completion badge */}
                    <div className="box-border w-[181.43px] h-[50px] bg-white border border-[#A4A4A4] border-[1.42857px] flex items-center justify-center">
                        <img src={icon} alt={`${title} Logo`} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-row justify-end items-center p-0 gap-2 w-[395px] h-[28px]">
                        <div className="w-6 h-6 relative">
                            <img src={clock.src}
                            alt="" />
                        </div>
                        <span className="w-[224px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-center text-[#E5F9E0]">Completed in {duration}</span>
                    </div>
                </div>

                {/* Frame 1618868443 - Title section - now aligned to left */}
                <div className="flex flex-col items-start p-0 gap-2 w-[1360px] h-[228px]">
                    <div className="flex flex-col items-start p-0 gap-4 w-[958px] h-[228px]">
                        <span className="w-[379px] h-[20px] font-poly-sans font-semibold text-[14px] leading-[20px] tracking-[0.1px] text-[#858BE3]">Sprinten AI CASE STUDY</span>
                        <h1 className="w-[958px] h-[128px] font-poly-sans font-normal text-[57px] leading-[64px] tracking-[-0.25px] text-[#A2F7B4]">How We Helped {title} Achieve [Key Impact] in Just {duration}</h1>
                        <p className="w-[958px] h-[48px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#B1BFBF]">A Sprinten design sprint case study for {title}, focused on solving {data.coreProblem} with clear, fast, and effective execution.</p>
                    </div>
                </div>
            </div>

            <CombinedAnimation />
        </div>

        {/* Section 2 */}
        <div className="w-full min-h-[637px] bg-[#E5F9E0] relative py-20 px-6 md:px-12 lg:px-[45px]">
            {/* Content Container */}
            <div className="w-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[55px] items-start">
                {/* Left Column - Text Content */}
                <div className="w-full lg:w-[46%] self-start flex flex-col gap-8 lg:gap-10">
                    {/* Header Section */}
                    <div className="flex flex-col gap-3 lg:gap-4">
                        <h1 className="font-normal text-4xl md:text-5xl lg:text-[57px] leading-tight lg:leading-[64px] tracking-[-0.25px] text-[#021514]">
                            Client Overview
                        </h1>
                        <p className="font-normal text-sm md:text-base leading-relaxed tracking-[0.5px] text-[#8CA1A0]">
                            {title} is a {data.shortDescription}. They approached Sprinten to solve {data.coreProblem}.
                        </p>
                    </div>

                    {/* Info Cards */}
                    <div className="flex flex-col gap-8 lg:gap-10">
                        {/* Industry */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                <div className="w-6 h-6 relative">
                                    {/* add svg icon icons/hardhat */}
                                    <img
                                        src={hardhat.src}
                                        alt="Hardhat icon"
                                        className="w-full h-full"
                                    />
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
                                    <img
                                        src={location.src}
                                        alt="Location icon"
                                        className="w-full h-full"
                                    />
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
                                    <img
                                        src={user.src}
                                        alt="User icon"
                                        className="w-full h-full"
                                    />
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
                        <img 
                            src={img} 
                            alt={`${title} case study image`} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Section 3 - Challenge */}
        <div className="w-full bg-[#021514] py-20 px-6 md:px-12 lg:px-[45px]">
            <div className="w-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[55px] items-start">
                {/* Left Column - Text */}
                <div className="w-full lg:w-[46%] flex flex-col gap-8 lg:gap-10">
                    <div className="flex flex-col gap-3 lg:gap-4">
                        <h1 className="font-normal text-4xl md:text-5xl lg:text-[57px] leading-tight lg:leading-[64px] tracking-[-0.25px] text-[#A2F7B4]">
                            The Challenge
                        </h1>
                        <p className="font-normal text-sm md:text-base leading-relaxed tracking-[0.5px] text-[#B1BFBF]">
                            {data.challengeDescription}
                        </p>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="w-full lg:w-[54%]">
                    <div className="w-full h-[400px] lg:h-[500px] relative rounded-lg overflow-hidden bg-[#E5F9E0]">
                        {/* Placeholder for challenge image */}
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-[#021514] text-lg">Challenge Visual</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 4 - What We Did */}
        <div className="w-full bg-[#E5F9E0] py-20 px-6 md:px-12 lg:px-[45px]">
            <div className="w-full mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[55px] items-start">
                {/* Left Column - Image */}
                <div className="w-full lg:w-[54%] order-2 lg:order-1">
                    <div className="w-full h-[400px] lg:h-[500px] relative rounded-lg overflow-hidden bg-[#021514]">
                        {/* Placeholder for what we did image */}
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-[#A2F7B4] text-lg">What We Did Visual</span>
                        </div>
                    </div>
                </div>

                {/* Right Column - Text */}
                <div className="w-full lg:w-[46%] order-1 lg:order-2 flex flex-col gap-8 lg:gap-10">
                    <div className="flex flex-col gap-3 lg:gap-4">
                        <h1 className="font-normal text-4xl md:text-5xl lg:text-[57px] leading-tight lg:leading-[64px] tracking-[-0.25px] text-[#021514]">
                            What We Did
                        </h1>
                        <p className="font-normal text-sm md:text-base leading-relaxed tracking-[0.5px] text-[#8CA1A0]">
                            {data.whatWeDidDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 5 - Results */}
        <div className="w-full bg-[#021514] py-20 px-6 md:px-12 lg:px-[45px]">
            <div className="w-full mx-auto">
                <div className="flex flex-col gap-8 lg:gap-10 mb-12 lg:mb-16">
                    <h1 className="font-normal text-4xl md:text-5xl lg:text-[57px] leading-tight lg:leading-[64px] tracking-[-0.25px] text-[#A2F7B4]">
                        Results
                    </h1>
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
                                    <img
                                        src={mark.src}
                                        alt="Check mark"
                                        className="w-full h-full"
                                    />
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