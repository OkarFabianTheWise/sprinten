// CaseStudy
"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { CTASection, Footer, TestimonialSection } from "@/components/sections";
import hardhat from "../../icons/hardhat.svg";
import location from "../../icons/location.svg";
import user from "../../icons/user.svg";
import mark from "../../icons/mark.svg";
import clock from "../../icons/clock.svg";
import { caseStudyData } from "../../data/caseStudies";

export default function CaseStudy() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') || '[Client Name]';

  const data = caseStudyData[title] || {
    shortDescription: '[short description]',
    coreProblem: '[core problem]',
    industry: 'Fintech',
    location: 'Germany',
    companySize: '50-100 employees',
    challenge: {
      summary: 'Sprintin AI was building a fast, on-chain AI platform, but their product experience didn\'t reflect the speed and intelligence of what was happening under the hood. Their existing interface felt fragmented, unclear, and inconsistent across pages, which made onboarding slow and confused new users.',
      bullets: [
        'Fragmented interface across core payment flows',
        'Confusing onboarding experience for first-time users',
        'Visual design that didn\'t reflect fintech speed or trust',
      ],
    },
    whatWeDid: {
      summary: 'Sprintin AI was building a fast, on-chain AI platform, but their product experience didn\'t reflect the speed and intelligence of what was happening under the hood. Their existing interface felt fragmented, unclear, and inconsistent across pages, which made onboarding slow and confused new users.',
      bullets: [
        'UX audit and flow simplification across payment workflows',
        'Design system creation for consistency and scalability',
        'High-fidelity prototype delivered in just 3 weeks',
      ],
    },
    keyImpact: '[Key Impact]',
    caseStudySubtitle: '[Case Study Subtitle]',
    whatWeDidSteps: [
      {
        title: 'Discovery & Alignment',
        bullets: [
          'Conducted comprehensive UX audit to identify pain points and opportunities',
          'Analyzed competitive landscape to understand market positioning',
          'Performed user research to validate assumptions and gather insights',
        ],
      },
      {
        title: 'UX Design & Flow Optimization',
        bullets: [
          'Mapped out user journeys to eliminate friction',
          'Designed intuitive interfaces for complex workflows',
          'Optimized information architecture for better findability',
        ],
      },
      {
        title: 'UI Design & Branding',
        bullets: [
          'Created a cohesive design system with reusable components',
          'Developed a visual identity that conveys trust and professionalism',
          'Ensured accessibility and inclusive design principles',
        ],
      },
      {
        title: 'Prototype & Delivery',
        bullets: [
          'Built interactive prototypes for user testing',
          'Delivered production-ready designs with detailed specifications',
          'Provided design handoff documentation for seamless development',
        ],
      },
    ],
    resultsDescription: 'Sprinten\'s sprint delivered tangible improvements that empowered the client to ship smarter and faster, building trust with users.',
    resultsTitle: '[Results Title]',
    results: [
      { title: 'Smooth Onboarding & Engagement', description: 'New flows reduced friction, helping first-time users quickly understand and adopt the platform.' },
      { title: 'Cohesive, Premium UI', description: 'Consistent design and a component library created a scalable, high-quality experience that strengthens trust.' },
      { title: 'Measurable Business Impact', description: 'Faster launch and improved clarity drove higher early adoption, increased engagement, and positioned the client as a credible, professional product in the market.' }
    ],
    media: {
      hero: { type: 'image', src: '/client-handshake.jpg' },
      clientOverview: { type: 'image', src: '/client-handshake.jpg' },
    },
  };

  // Extract values from data or use defaults
  const duration = data.duration || '[X] Days';
  const img = data.media.clientOverview.src;
  const icon = data.icon || '/default-icon.svg';

  return (
    <section className="bg-[#021514] relative overflow-x-hidden font-poly-sans">
        {/* Section 1 */}
        <div className="flex flex-col flex-start w-full min-h-[986px] bg-[#021514] items-start gap-[80px] top-[32px] px-[40px] relative mb-16">
            <div className="flex flex-col justify-center items-start p-0 gap-6 w-full h-[346px]">
                
                {/* Frame 1618868442 - Logo section */}
                <div className="flex flex-col items-end p-0 gap-4 w-[395px] h-[94px] self-end">
                    {/* Added self-end to keep logo on right ↑ */}
                    {/* Logo and completion badge */}
                    <div className="box-border w-[181.43px] h-[50px] flex items-center justify-end overflow-hidden">
                      <img
                        src={icon}
                        alt={`${title} Logo`}
                        className="h-full object-contain"
                      />
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
                    <div className="flex flex-col items-start p-0 gap-6 w-[958px] h-[228px]">
                        <span className="w-[379px] h-[20px] font-poly-sans font-semibold text-[14px] leading-[20px] tracking-[0.1px] text-[#858BE3]">
                            Sprinten AI CASE STUDY
                        </span>

                        <h1 className="w-[958px] h-[128px] font-poly-sans font-normal text-[57px] leading-[64px] tracking-[-0.25px] text-[#A2F7B4]">
                            How We Helped {title} Achieve {data.keyImpact} in Just {duration}
                        </h1>

                        {/* explicit vertical spacing below h1 */}
                        <p className="mt-12 w-[958px] h-[48px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#B1BFBF]">
                            {data.caseStudySubtitle ||
                                `A Sprinten design sprint case study for ${title}, focused on solving ${data.coreProblem} with clear, fast, and effective execution.`}
                        </p>
                    </div>
                </div>
            </div>

            {data.media.hero.type === 'image' ? (
              <Image
                src={data.media.hero.src}
                alt={`${title} Hero Image`}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            ) : data.media.hero.type === 'video' ? (
              <video
                src={data.media.hero.src}
                poster={data.media.hero.poster}
                autoPlay
                muted
                loop
                className="w-full h-auto object-cover rounded-2xl"
              >
                Your browser does not support the video tag.
              </video>
            ) : null}
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
                            <div className="flex flex-col gap-1 lg:gap-2">
                                <div className="font-semibold text-base leading-6 tracking-[0.15px] text-[#021514]">
                                    Industry
                                </div>
                                <div className="font-normal text-xs leading-4 text-[#8CA1A0]">
                                    {data.industry}
                                </div>
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
                            <div className="flex flex-col gap-1 lg:gap-2">
                                <div className="font-semibold text-base leading-6 tracking-[0.15px] text-[#021514]">
                                    Location
                                </div>
                                <div className="font-normal text-xs leading-4 text-[#8CA1A0]">
                                    {data.location}
                                </div>
                            </div>
                        </div>

                        {/* Company size */}
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
                            <div className="flex flex-col gap-1 lg:gap-2">
                                <div className="font-semibold text-base leading-6 tracking-[0.15px] text-[#021514]">
                                    Company size
                                </div>
                                <div className="font-normal text-xs leading-4 text-[#8CA1A0]">
                                    {data.companySize}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="w-full lg:w-[54%] lg:flex-1 self-end">
                    <img 
                        src={img} 
                        alt="Satisfied client shaking hands" 
                        className="w-full h-auto aspect-[663/477] object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>
 
        {/* Section 3 */}
        <div className="w-full h-[637px] bg-[#E5F9E0] relative overflow-hidden">
            {/* Sprinten Primary logo (green) - Background */}
            <Image
                src="/section3-logo.png"
                alt="Sprinten Primary Logo"
                width={3600}
                height={1944}
                className="absolute object-cover right-[-1350px] opacity-80 w-[3600px] h-[1944px]"
                style={{
                    top: 'calc(50% - 1944px / 2 + 40px)', // 👈 pushes image DOWN
                }}
            />


            {/* Content Container */}
            <div className="absolute left-[58px] w-[792px]" style={{ top: 'calc(50% - 472px/2 + 0.5px)' }}>
                <div className="flex flex-col gap-10">
                    {/* Header Section */}
                    <div className="flex flex-col gap-4">
                        <h1 className="font-normal text-[57px] leading-[64px] tracking-[-0.25px] text-[#021514]">
                            The Challenge
                        </h1>

                        <p className="font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0]">
                            {data.challenge?.summary}
                        </p>
                    </div>

                    {/* Challenges List */}
                    <div className="flex flex-col gap-6">
                        {data.challenge?.bullets?.map((bullet, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="w-4 h-4 relative">
                                        <img
                                            src={mark.src}
                                            alt="Mark icon"
                                            className="w-full h-full"
                                        />
                                    </div>
                                </div>
                                <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                    {bullet}
                                </div>
                            </div>
                        )) || []}
                    </div>
                </div>
            </div>
        </div>

        {/* Section 4 */}
        <div className="w-full h-[921px] bg-[#E5F9E0] relative">
            {/* Green box */}
            <div className="absolute bg-[#A2F7B4] rounded-[16px] left-[45px] right-[45px]" style={{ height: '825px', top: 'calc(50% - 825px/2 + 6px)' }}>
                {/* Title and description */}
                <div className="absolute left-[57px] right-[57px] top-[81px] flex flex-col gap-4">
                    <h1 className="font-normal text-[57px] leading-[64px] tracking-[-0.25px] text-[#021514]">
                        What we did
                    </h1>

                    <p className="font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#365B59]">
                        {data.whatWeDid?.summary}
                    </p>
                </div>

                {/* Cards row */}
                <div className="absolute left-[57px] right-[57px] top-[250px] flex flex-row gap-4">
                    {/* Card 1: Discovery & Alignment */}
                    <div className="flex-1 h-[520px] bg-[#E5F9E0] border border-[#8CA1A0] rounded-lg relative p-6">
                        {/* Blur effects */}
                        <div className="absolute w-[652px] h-[155px] left-1/2 -translate-x-1/2 translate-x-[93px] top-[266px] bg-[#E5F9E0] blur-[22px] pointer-events-none"></div>
                        <div className="absolute w-[197px] h-[162px] left-[264px] -top-[203px] bg-[#A2F7B4] blur-[122px] pointer-events-none"></div>

                        {/* Content */}
                        <div className="relative flex flex-col gap-10 pt-6">
                            <h3 className="font-normal text-[28px] leading-[36px] text-[#2F9C96]">
                                {data.whatWeDidSteps?.[0]?.title || 'Discovery & Alignment'}
                            </h3>

                            <div className="flex flex-col gap-6">
                                <div className="font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#577674]">
                                    Deliverables:
                                </div>

                                <div className="flex flex-col gap-6">
                                    {/* Item 1 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[0]?.bullets?.[0] || 'Conducted comprehensive brand strategy analysis'}
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[0]?.bullets?.[1] || 'Analyzed competitive landscape for positioning'}
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[0]?.bullets?.[2] || 'Performed user research to understand local needs'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: UX Design & Flow Optimization */}
                    <div className="flex-1 h-[520px] bg-[#E5F9E0] border border-[#8CA1A0] rounded-lg relative p-6">
                        {/* Blur effects */}
                        <div className="absolute w-[652px] h-[155px] left-1/2 -translate-x-1/2 translate-x-[93px] top-[266px] bg-[#E5F9E0] blur-[22px] pointer-events-none"></div>
                        <div className="absolute w-[197px] h-[162px] left-[264px] -top-[203px] bg-[#A2F7B4] blur-[122px] pointer-events-none"></div>

                        {/* Content */}
                        <div className="relative flex flex-col gap-10 pt-6">
                            <h3 className="font-normal text-[28px] leading-[36px] text-[#2F9C96]">
                                {data.whatWeDidSteps?.[1]?.title || 'UX Design & Flow Optimization'}
                            </h3>

                            <div className="flex flex-col gap-6">
                                <div className="font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#577674]">
                                    Deliverables:
                                </div>

                                <div className="flex flex-col gap-6">
                                    {/* Item 1 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[1]?.bullets?.[0] || 'Unified user experience across service types'}
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[1]?.bullets?.[1] || 'Designed intuitive interfaces for local commerce'}
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[1]?.bullets?.[2] || 'Optimized flows for mobility and delivery'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: UI Design & Branding */}
                    <div className="flex-1 h-[520px] bg-[#E5F9E0] border border-[#8CA1A0] rounded-lg relative p-6">
                        {/* Blur effects */}
                        <div className="absolute w-[652px] h-[155px] left-1/2 -translate-x-1/2 translate-x-[93px] top-[266px] bg-[#E5F9E0] blur-[22px] pointer-events-none"></div>
                        <div className="absolute w-[197px] h-[162px] left-[264px] -top-[203px] bg-[#A2F7B4] blur-[122px] pointer-events-none"></div>

                        {/* Content */}
                        <div className="relative flex flex-col gap-10 pt-6">
                            <h3 className="font-normal text-[28px] leading-[36px] text-[#2F9C96]">
                                {data.whatWeDidSteps?.[2]?.title || 'UI Design & Branding'}
                            </h3>

                            <div className="flex flex-col gap-6">
                                <div className="font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#577674]">
                                    Deliverables:
                                </div>

                                <div className="flex flex-col gap-6">
                                    {/* Item 1 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[2]?.bullets?.[0] || 'Created a cohesive design system for scalability'}
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[2]?.bullets?.[1] || 'Developed a friendly brand identity that builds trust'}
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[2]?.bullets?.[2] || 'Ensured consistent visual design across markets'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Prototype & Delivery */}
                    <div className="flex-1 h-[520px] bg-[#E5F9E0] border border-[#8CA1A0] rounded-lg relative p-6">
                        {/* Blur effects */}
                        <div className="absolute w-[652px] h-[155px] left-1/2 -translate-x-1/2 translate-x-[93px] top-[266px] bg-[#E5F9E0] blur-[22px] pointer-events-none"></div>
                        <div className="absolute w-[197px] h-[162px] left-[264px] -top-[203px] bg-[#A2F7B4] blur-[122px] pointer-events-none"></div>

                        {/* Content */}
                        <div className="relative flex flex-col gap-10 pt-6">
                            <h3 className="font-normal text-[28px] leading-[36px] text-[#2F9C96]">
                                {data.whatWeDidSteps?.[3]?.title || 'Prototype & Delivery'}
                            </h3>

                            <div className="flex flex-col gap-6">
                                <div className="font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#577674]">
                                    Deliverables:
                                </div>

                                <div className="flex flex-col gap-6">
                                    {/* Item 1 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[3]?.bullets?.[0] || 'Built interactive prototypes for testing'}
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[3]?.bullets?.[1] || 'Delivered production-ready designs'}
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                            <div className="w-4 h-4 relative">
                                                <img
                                                    src={mark.src}
                                                    alt="Mark icon"
                                                    className="w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">
                                            {data.whatWeDidSteps?.[3]?.bullets?.[2] || 'Provided documentation for rapid replication'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 5 - Visuals */}
        <div className="w-full h-[921px] bg-[#E5F9E0] relative">
            {/* Title */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '24px',
                    position: 'absolute',
                    width: '1237px',
                    height: '64px',
                    left: '58px',
                    top: '56px'
                }}
            >
                <h1
                    style={{
                        fontFamily: "'PolySans Trial', sans-serif",
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '57px',
                        lineHeight: '64px',
                        letterSpacing: '-0.25px',
                        color: '#021514',
                        flex: 'none',
                        order: 0,
                        alignSelf: 'stretch',
                        flexGrow: 0,
                        margin: 0
                    }}
                >
                    Visuals
                </h1>
            </div>

            {/* Screens row - Frame 1618868454 */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '16px',
                    position: 'absolute',
                    width: '2004px',
                    height: '707px',
                    left: '58px',
                    top: '168px'
                }}
            >
                {/* Screen 1 - Frame 1618868450 */}
                <div
                    style={{
                        width: '489px',
                        height: '707px',
                        background: '#FFFFFF',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            width: '1440px',
                            height: '1041px',
                            left: 'calc(50% - 1440px/2 + 10px)',
                            top: 'calc(50% - 1041px/2 + 64px)',
                            backgroundImage: 'url(/screen1-photo.png)',
                            backgroundSize: '90%',
                            backgroundPosition: 'center'
                        }}
                    ></div>
                </div>

                {/* Screen 2 - Frame 1618868453 (Split) */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        gap: '16px',
                        width: '489px',
                        height: '707px',
                        flex: 'none',
                        order: 1,
                        alignSelf: 'stretch',
                        flexGrow: 0
                    }}
                >
                    {/* Top half - Frame 1618868451 */}
                    <div
                        style={{
                            width: '489px',
                            height: '395px',
                            background: '#FFFFFF',
                            flex: 'none',
                            order: 0,
                            alignSelf: 'stretch',
                            flexGrow: 0,
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                width: '1114px',
                                height: '805px',
                                left: 'calc(50% - 1114px/2 + 0px)',
                                top: 'calc(50% - 805px/2 - 0px)',
                                backgroundImage: 'url(/screen2-split-top.jpg)',
                                backgroundSize: '55%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        ></div>
                    </div>

                    {/* Bottom half - Frame 1618868452 */}
                    <div
                        style={{
                            width: '489px',
                            height: '296px',
                            background: '#246BFD',
                            flex: 'none',
                            order: 1,
                            alignSelf: 'stretch',
                            flexGrow: 1,
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                width: '1440px',
                                height: '296px',
                                left: 'calc(50% - 1440px/2 + 0px)',
                                top: 'calc(50% - 296px/2 + 0px)',
                                backgroundImage: 'url(/buttom-half.png)',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '20%',
                                backgroundPosition: 'center'
                            }}
                        ></div>
                    </div>
                </div>

                {/* Screen 3 - Frame 1618868455 */}
                <div
                    style={{
                        width: '489px',
                        height: '707px',
                        background: '#FFFFFF',
                        flex: 'none',
                        order: 2,
                        flexGrow: 0,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            width: '713px',
                            height: '713px',
                            left: 'calc(50% - 713px/2 - 0px)',
                            top: 'calc(50% - 713px/2 - 3px)',
                            backgroundImage: 'url(/lastimage.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center'
                        }}
                    ></div>
                </div>

                {/* Screen 4 - Frame 1618868454 */}
                <div
                    style={{
                        width: '489px',
                        height: '707px',
                        background: '#FFFFFF',
                        flex: 'none',
                        order: 3,
                        flexGrow: 0,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            width: '1440px',
                            height: '1041px',
                            left: 'calc(50% - 1440px/2 + 435.5px)',
                            top: 'calc(50% - 1041px/2 - 57px)',
                            backgroundImage: 'url(/lastimage.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    ></div>
                </div>
            </div>
        </div>

        {/* Section 6 */}
        <div className="w-full h-[501px] bg-[#E5F9E0] relative">
            <div className="absolute left-[45px] right-[45px] top-[80px] flex justify-between gap-[80px]">
                {/* Left Column */}
                <div className="flex flex-col gap-4 w-[584px]">
                    {/* THE RESULTS */}
                    <div className="font-semibold text-[14px] leading-[20px] tracking-[0.1px] text-[#858BE3]">
                        THE RESULTS
                    </div>

                    {/* Title */}
                    <h1 className="font-normal text-[57px] leading-[64px] tracking-[-0.25px] text-[#021514]">
                        {data.resultsTitle || 'Fast, Clear, and Market-Ready Outcomes.'}
                    </h1>

                    {/* Description */}
                    <p className="font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0] mt-4">
                        {data.resultsDescription}
                    </p>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-10 w-[654px]">
                    {data.results.map((result, index) => (
                      <div key={index} className="flex flex-col gap-4">
                        <h3 className="font-normal text-[22px] leading-[28px] text-[#021514]">
                          {result.title}
                        </h3>
                        <p className="font-normal text-[14px] leading-[20px] tracking-[0.25px] text-[#8CA1A0]">
                          {result.description}
                        </p>
                      </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Testimonial Section */}
        <TestimonialSection />
        <CTASection />
        <Footer />
    </section>
  );
}