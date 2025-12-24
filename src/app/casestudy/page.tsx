// CaseStudy
"use client";

import Image from "next/image";
import CombinedAnimation from "@/animation/CombinedAnimation";
import { CTASection, Footer, TestimonialSection } from "@/components/sections";

export default function CaseStudy() {
  return (
    <section className="bg-[#021514] relative overflow-x-hidden">
        {/* Section 1 */}
        <div className="flex flex-col flex-start w-full h-[986px] bg-[#021514] items-start gap-[80px] px-[40px] relative">
            <div className="flex flex-col justify-center items-start p-0 gap-6 w-full h-[346px]">
                {/* Changed from items-end to items-start ↑ */}
                
                {/* Frame 1618868442 - Logo section */}
                <div className="flex flex-col items-end p-0 gap-4 w-[395px] h-[94px] self-end">
                    {/* Added self-end to keep logo on right ↑ */}
                    {/* Logo and completion badge */}
                    <div className="box-border w-[181.43px] h-[50px] bg-white border border-[#A4A4A4] border-[1.42857px] flex items-center justify-center">
                        <span className="font-poppins font-normal text-[22.8571px] leading-[34px] tracking-[0.214286px] text-[#7B7B7B]">Logo</span>
                    </div>
                    <div className="flex flex-row justify-end items-center p-0 gap-2 w-[395px] h-[28px]">
                        <div className="w-6 h-6 relative">
                            <div className="absolute left-[7.81%] right-[7.81%] top-[7.81%] bottom-[7.81%] bg-[#2F9C96]"></div>
                        </div>
                        <span className="w-[224px] h-[28px] font-poly-sans font-normal text-[22px] leading-[28px] text-center text-[#E5F9E0]">Completed in 3 Weeks</span>
                    </div>
                </div>

                {/* Frame 1618868443 - Title section - now aligned to left */}
                <div className="flex flex-col items-start p-0 gap-2 w-[1360px] h-[228px]">
                    <div className="flex flex-col items-start p-0 gap-4 w-[958px] h-[228px]">
                        <span className="w-[379px] h-[20px] font-poly-sans font-semibold text-[14px] leading-[20px] tracking-[0.1px] text-[#858BE3]">Sprinten AI CASE STUDY</span>
                        <h1 className="w-[958px] h-[128px] font-poly-sans font-normal text-[57px] leading-[64px] tracking-[-0.25px] text-[#A2F7B4]">How We Helped [Client Name] Achieve [Key Impact] in Just [X] Days</h1>
                        <p className="w-[958px] h-[48px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#B1BFBF]">A Sprinten design sprint case study for [client industry/product], focused on solving [problem] with clear, fast, and effective execution.</p>
                    </div>
                </div>
            </div>

            <CombinedAnimation />
        </div>

        {/* Section 2 */}
        <div className="w-full h-[637px] bg-[#E5F9E0] relative">
            {/* Text and image side by side */}
            <div className="w-full h-[477px] gap-[55px] px-[58px] py-[80px] flex flex-col md:flex-row items-center">
                {/* left */}
                <div className="w-full md:w-[624px] h-[392px] flex flex-col gap-[40px]">
                    {/* Frame 366 */}
                    <div className="flex flex-col gap-[16px] w-[624px] h-[128px]">
                        {/* Frame 370 */}
                        <div className="flex flex-col gap-[24px] w-[624px] h-[64px]">
                            <h1 className="w-[624px] h-[64px] text-[#021514] font-poly-sans font-normal text-[57px] leading-[64px] tracking-[-0.25px]">Client Overview</h1>
                        </div>
                        <p className="w-[624px] h-[48px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0]">
                            [Client Name] is a [short description: e.g., fintech startup helping SMEs manage cashflow]. They approached Sprinten to solve [core problem].
                        </p>
                    </div>
                    {/* Frame 376 */}
                    <div className="flex flex-col gap-[40px] w-[424px] h-[224px]">
                        {/* Industry */}
                        <div className="flex flex-row gap-[16px] w-[269px] h-[48px]">
                            <div className="flex flex-col justify-center items-center p-[8px] gap-[8px] w-[40px] h-[40px] bg-[#FDFDFD] rounded-[800px]">
                                <div className="w-[24px] h-[24px] relative">
                                    <div className="absolute left-[6.25%] right-[6.25%] top-[9.38%] bottom-[18.75%] bg-[#2F9C96]"></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[8px] w-[213px] h-[48px]">
                                <div className="w-[213px] h-[24px] font-poly-sans font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">Industry</div>
                                <div className="w-[213px] h-[16px] font-poly-sans font-normal text-[12px] leading-[16px] text-[#8CA1A0]">Fintech</div>
                            </div>
                        </div>
                        {/* Location */}
                        <div className="flex flex-row gap-[16px] w-[424px] h-[48px]">
                            <div className="flex flex-col justify-center items-center p-[8px] gap-[8px] w-[40px] h-[40px] bg-[#FDFDFD] rounded-[800px]">
                                <div className="w-[24px] h-[24px] relative">
                                    <div className="absolute left-[15.62%] right-[15.62%] top-[6.25%] bottom-[6.25%] bg-[#858BE3]"></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[8px] w-[368px] h-[48px]">
                                <div className="w-[368px] h-[24px] font-poly-sans font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">Location</div>
                                <div className="w-[368px] h-[16px] font-poly-sans font-normal text-[12px] leading-[16px] text-[#8CA1A0]">Germany</div>
                            </div>
                        </div>
                        {/* Company size */}
                        <div className="flex flex-row gap-[16px] w-[424px] h-[48px]">
                            <div className="flex flex-col justify-center items-center p-[8px] gap-[8px] w-[40px] h-[40px] bg-[#FDFDFD] rounded-[800px]">
                                <div className="w-[24px] h-[24px] relative">
                                    <div className="absolute left-[3.13%] right-[3.13%] top-[18.73%] bottom-[12.5%] bg-[#A2F7B4]"></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[8px] w-[368px] h-[48px]">
                                <div className="w-[368px] h-[24px] font-poly-sans font-semibold text-[16px] leading-[24px] tracking-[0.15px] text-[#021514]">Company size</div>
                                <div className="w-[368px] h-[16px] font-poly-sans font-normal text-[12px] leading-[16px] text-[#8CA1A0]">1-5 Employee</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <Image 
                    src="/client-handshake.jpg" 
                    alt="Satisfied client shaking hands" 
                    width={663} 
                    height={477} 
                    className="w-full md:w-[663px] h-auto rounded-[16px]"
                />
            </div>
        </div>
 
        {/* Section 3 */}
        <div className="w-full h-[637px] bg-[#E5F9E0] relative">
            {/* Sprinten Primary logo (green) */}
            <div
                style={{
                    position: 'absolute',
                    width: '667.67px',
                    height: '539.62px',
                    right: '0.38px',
                    top: 'calc(50% - 539.62px/2 + 31.31px)',
                    backgroundImage: 'url(/Sprinten Primary logo (green).png)'
                }}
            ></div>

            {/* Frame 1618868445 */}
            <div
                style={{
                    position: 'absolute',
                    width: '792px',
                    height: '472px',
                    left: '58px',
                    top: 'calc(50% - 472px/2 + 0.5px)',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '55px'
                }}
            >
                {/* Frame 378 */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0px',
                        gap: '40px',
                        width: '792px',
                        height: '472px'
                    }}
                >
                    {/* Frame 366 */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            padding: '0px',
                            gap: '16px',
                            width: '792px',
                            height: '176px'
                        }}
                    >
                        {/* Frame 370 */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                gap: '24px',
                                width: '792px',
                                height: '64px'
                            }}
                        >
                            <h1
                                style={{
                                    width: '792px',
                                    height: '64px',
                                    fontFamily: 'PolySans Trial',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '57px',
                                    lineHeight: '64px',
                                    letterSpacing: '-0.25px',
                                    color: '#021514'
                                }}
                            >
                                The Challenge
                            </h1>
                        </div>

                        <p
                            style={{
                                width: '792px',
                                height: '96px',
                                fontFamily: 'PolySans Trial',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '0.5px',
                                color: '#8CA1A0'
                            }}
                        >
                            Sprintin AI was building a fast, on-chain AI platform, but their product experience didn’t reflect the speed and intelligence of what was happening under the hood. Their existing interface felt fragmented, unclear, and inconsistent across pages, which made onboarding slow and confused new users.
                        </p>
                    </div>

                    {/* Frame 377 */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0px',
                            gap: '24px',
                            width: '792px',
                            height: '256px'
                        }}
                    >
                        {/* Challenge 1 */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0px',
                                gap: '16px',
                                width: '792px',
                                height: '32px'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '8px',
                                    gap: '8px',
                                    width: '32px',
                                    height: '32px',
                                    background: '#FDFDFD',
                                    borderRadius: '800px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        position: 'relative'
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '6.25%',
                                            right: '3.11%',
                                            top: '17.18%',
                                            bottom: '12.5%',
                                            background: '#41C9A5'
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '8px',
                                    width: '744px',
                                    height: '24px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '744px',
                                        height: '24px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        letterSpacing: '0.15px',
                                        color: '#021514'
                                    }}
                                >
                                    Users didn’t understand the core value immediately
                                </div>
                            </div>
                        </div>

                        {/* Challenge 2 */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0px',
                                gap: '16px',
                                width: '792px',
                                height: '32px'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '8px',
                                    gap: '8px',
                                    width: '32px',
                                    height: '32px',
                                    background: '#FDFDFD',
                                    borderRadius: '800px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        position: 'relative'
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '6.25%',
                                            right: '3.11%',
                                            top: '17.18%',
                                            bottom: '12.5%',
                                            background: '#41C9A5'
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '8px',
                                    width: '744px',
                                    height: '24px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '744px',
                                        height: '24px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        letterSpacing: '0.15px',
                                        color: '#021514'
                                    }}
                                >
                                    Navigation felt heavy and technical
                                </div>
                            </div>
                        </div>

                        {/* Challenge 3 */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0px',
                                gap: '16px',
                                width: '792px',
                                height: '32px'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '8px',
                                    gap: '8px',
                                    width: '32px',
                                    height: '32px',
                                    background: '#FDFDFD',
                                    borderRadius: '800px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        position: 'relative'
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '6.25%',
                                            right: '3.11%',
                                            top: '17.18%',
                                            bottom: '12.5%',
                                            background: '#41C9A5'
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '8px',
                                    width: '744px',
                                    height: '24px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '744px',
                                        height: '24px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        letterSpacing: '0.15px',
                                        color: '#021514'
                                    }}
                                >
                                    The brand looked early-stage and didn’t build trust
                                </div>
                            </div>
                        </div>

                        {/* Challenge 4 */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0px',
                                gap: '16px',
                                width: '792px',
                                height: '32px'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '8px',
                                    gap: '8px',
                                    width: '32px',
                                    height: '32px',
                                    background: '#FDFDFD',
                                    borderRadius: '800px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        position: 'relative'
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '6.25%',
                                            right: '3.11%',
                                            top: '17.18%',
                                            bottom: '12.5%',
                                            background: '#41C9A5'
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '8px',
                                    width: '744px',
                                    height: '24px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '744px',
                                        height: '24px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        letterSpacing: '0.15px',
                                        color: '#021514'
                                    }}
                                >
                                    The team needed a UI that matched the power of the tech
                                </div>
                            </div>
                        </div>

                        {/* Challenge 5 */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0px',
                                gap: '16px',
                                width: '792px',
                                height: '32px'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '8px',
                                    gap: '8px',
                                    width: '32px',
                                    height: '32px',
                                    background: '#FDFDFD',
                                    borderRadius: '800px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        position: 'relative'
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '6.25%',
                                            right: '3.11%',
                                            top: '17.18%',
                                            bottom: '12.5%',
                                            background: '#41C9A5'
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '8px',
                                    width: '744px',
                                    height: '24px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '744px',
                                        height: '24px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        letterSpacing: '0.15px',
                                        color: '#021514'
                                    }}
                                >
                                    And they needed all of this delivered fast so they could focus on shipping features
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 4 */}
        <div className="w-full h-[921px] bg-[#E5F9E0] relative">
            {/* Green box */}
            <div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '825px',
                    left: '0',
                    top: 'calc(50% - 825px/2 + 6px)',
                    background: '#A2F7B4',
                    borderRadius: '16px'
                }}
            >
                {/* Title and description */}
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '128px',
                        left: '57px',
                        top: '81px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '0px',
                        gap: '40px'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            padding: '0px',
                            gap: '16px',
                            width: '1237px',
                            height: '128px'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                gap: '24px',
                                width: '1237px',
                                height: '64px'
                            }}
                        >
                            <h1
                                style={{
                                    width: '1237px',
                                    height: '64px',
                                    fontFamily: 'PolySans Trial',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '57px',
                                    lineHeight: '64px',
                                    letterSpacing: '-0.25px',
                                    color: '#021514'
                                }}
                            >
                                What we did
                            </h1>
                        </div>

                        <p
                            style={{
                                width: '1237px',
                                height: '48px',
                                fontFamily: 'PolySans Trial',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '0.5px',
                                color: '#365B59'
                            }}
                        >
                            Sprintin AI was building a fast, on-chain AI platform, but their product experience didn’t reflect the speed and intelligence of what was happening under the hood. Their existing interface felt fragmented, unclear, and inconsistent across pages, which made onboarding slow and confused new users.
                        </p>
                    </div>
                </div>

                {/* Cards row */}
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '460px',
                        left: '57px',
                        top: '250px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '0px',
                        gap: '16px'
                    }}
                >
                    {/* Card 1: Discovery & Alignment */}
                    <div
                        style={{
                            boxSizing: 'border-box',
                            width: '297.25px',
                            height: '460px',
                            background: '#E5F9E0',
                            border: '1px solid #8CA1A0',
                            borderRadius: '8px',
                            position: 'relative'
                        }}
                    >
                        {/* Blur rectangle */}
                        <div
                            style={{
                                position: 'absolute',
                                width: '652px',
                                height: '155px',
                                left: 'calc(50% - 652px/2 + 93.38px)',
                                top: '266px',
                                background: '#E5F9E0',
                                filter: 'blur(22px)'
                            }}
                        ></div>

                        {/* Ellipse blur */}
                        <div
                            style={{
                                position: 'absolute',
                                width: '197px',
                                height: '162px',
                                left: '264px',
                                top: '-203px',
                                background: '#A2F7B4',
                                filter: 'blur(122px)'
                            }}
                        ></div>

                        {/* Content */}
                        <div
                            style={{
                                position: 'absolute',
                                height: '332px',
                                left: '25px',
                                right: '24.25px',
                                top: '49px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                gap: '40px'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '16px',
                                    width: '248px',
                                    height: '72px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '248px',
                                        height: '72px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '28px',
                                        lineHeight: '36px',
                                        color: '#2F9C96'
                                    }}
                                >
                                    Discovery & Alignment
                                </div>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '24px',
                                    width: '248px',
                                    height: '220px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '248px',
                                        height: '20px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        letterSpacing: '0.25px',
                                        color: '#577674'
                                    }}
                                >
                                    Deliverables:
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '0px',
                                        gap: '24px',
                                        width: '248px',
                                        height: '176px'
                                    }}
                                >
                                    {/* Item 1 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '48px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '48px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '48px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                Stakeholder interview notes
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '32px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '24px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '24px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                UX audit report
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '48px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '48px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '48px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                Priority areas for design sprint
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: UX Design & Flow Optimization */}
                    <div
                        style={{
                            boxSizing: 'border-box',
                            width: '297.25px',
                            height: '460px',
                            background: '#E5F9E0',
                            border: '1px solid #8CA1A0',
                            borderRadius: '8px',
                            position: 'relative'
                        }}
                    >
                        {/* Blur rectangle */}
                        <div
                            style={{
                                position: 'absolute',
                                width: '652px',
                                height: '155px',
                                left: 'calc(50% - 652px/2 + 93.38px)',
                                top: '266px',
                                background: '#E5F9E0',
                                filter: 'blur(22px)'
                            }}
                        ></div>

                        {/* Ellipse blur */}
                        <div
                            style={{
                                position: 'absolute',
                                width: '197px',
                                height: '162px',
                                left: '264px',
                                top: '-203px',
                                background: '#A2F7B4',
                                filter: 'blur(122px)'
                            }}
                        ></div>

                        {/* Content */}
                        <div
                            style={{
                                position: 'absolute',
                                height: '332px',
                                left: '25px',
                                right: '24.25px',
                                top: '49px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                gap: '40px'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '16px',
                                    width: '248px',
                                    height: '72px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '248px',
                                        height: '72px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '28px',
                                        lineHeight: '36px',
                                        color: '#2F9C96'
                                    }}
                                >
                                    UX Design & Flow Optimization
                                </div>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '24px',
                                    width: '248px',
                                    height: '220px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '248px',
                                        height: '20px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        letterSpacing: '0.25px',
                                        color: '#577674'
                                    }}
                                >
                                    Deliverables:
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '0px',
                                        gap: '24px',
                                        width: '248px',
                                        height: '176px'
                                    }}
                                >
                                    {/* Item 1 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '48px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '48px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '48px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                Wireframes for web and mobile
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '48px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '48px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '48px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                Streamlined onboarding flows
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '32px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '24px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '24px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                User journey diagrams
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: UI Design & Branding */}
                    <div
                        style={{
                            boxSizing: 'border-box',
                            width: '297.25px',
                            height: '460px',
                            background: '#E5F9E0',
                            border: '1px solid #8CA1A0',
                            borderRadius: '8px',
                            position: 'relative'
                        }}
                    >
                        {/* Blur rectangle */}
                        <div
                            style={{
                                position: 'absolute',
                                width: '652px',
                                height: '155px',
                                left: 'calc(50% - 652px/2 + 93.38px)',
                                top: '266px',
                                background: '#E5F9E0',
                                filter: 'blur(22px)'
                            }}
                        ></div>

                        {/* Ellipse blur */}
                        <div
                            style={{
                                position: 'absolute',
                                width: '197px',
                                height: '162px',
                                left: '264px',
                                top: '-203px',
                                background: '#A2F7B4',
                                filter: 'blur(122px)'
                            }}
                        ></div>

                        {/* Content */}
                        <div
                            style={{
                                position: 'absolute',
                                height: '332px',
                                left: '25px',
                                right: '24.25px',
                                top: '49px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                gap: '40px'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '16px',
                                    width: '248px',
                                    height: '72px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '248px',
                                        height: '72px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '28px',
                                        lineHeight: '36px',
                                        color: '#2F9C96'
                                    }}
                                >
                                    UI Design & Branding
                                </div>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '24px',
                                    width: '248px',
                                    height: '220px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '248px',
                                        height: '20px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        letterSpacing: '0.25px',
                                        color: '#577674'
                                    }}
                                >
                                    Deliverables:
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '0px',
                                        gap: '24px',
                                        width: '248px',
                                        height: '176px'
                                    }}
                                >
                                    {/* Item 1 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '48px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '48px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '48px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                High-fidelity screens (web + mobile)
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '48px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '48px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '48px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                Component library & design system
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '48px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '48px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '48px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                Branded interactive elements and dashboards
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Prototype & Delivery */}
                    <div
                        style={{
                            boxSizing: 'border-box',
                            width: '297.25px',
                            height: '460px',
                            background: '#E5F9E0',
                            border: '1px solid #8CA1A0',
                            borderRadius: '8px',
                            position: 'relative'
                        }}
                    >
                        {/* Blur rectangle */}
                        <div
                            style={{
                                position: 'absolute',
                                width: '652px',
                                height: '155px',
                                left: 'calc(50% - 652px/2 + 93.38px)',
                                top: '266px',
                                background: '#E5F9E0',
                                filter: 'blur(22px)'
                            }}
                        ></div>

                        {/* Ellipse blur */}
                        <div
                            style={{
                                position: 'absolute',
                                width: '197px',
                                height: '162px',
                                left: '264px',
                                top: '-203px',
                                background: '#A2F7B4',
                                filter: 'blur(122px)'
                            }}
                        ></div>

                        {/* Content */}
                        <div
                            style={{
                                position: 'absolute',
                                height: '332px',
                                left: '25px',
                                right: '24.25px',
                                top: '49px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                gap: '40px'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '16px',
                                    width: '248px',
                                    height: '72px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '248px',
                                        height: '72px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '28px',
                                        lineHeight: '36px',
                                        color: '#2F9C96'
                                    }}
                                >
                                    Prototype & Delivery
                                </div>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '0px',
                                    gap: '24px',
                                    width: '248px',
                                    height: '220px'
                                }}
                            >
                                <div
                                    style={{
                                        width: '248px',
                                        height: '20px',
                                        fontFamily: 'PolySans Trial',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        letterSpacing: '0.25px',
                                        color: '#577674'
                                    }}
                                >
                                    Deliverables:
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '0px',
                                        gap: '24px',
                                        width: '248px',
                                        height: '176px'
                                    }}
                                >
                                    {/* Item 1 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '32px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '24px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '24px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                Clickable prototype
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '48px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '48px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '48px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                Usability test feedback summary
                                            </div>
                                        </div>
                                    </div>

                                    {/* Item 3 */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            padding: '0px',
                                            gap: '16px',
                                            width: '248px',
                                            height: '48px'
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '8px',
                                                gap: '8px',
                                                width: '32px',
                                                height: '32px',
                                                background: '#FDFDFD',
                                                borderRadius: '800px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        left: '6.25%',
                                                        right: '3.11%',
                                                        top: '17.18%',
                                                        bottom: '12.5%',
                                                        background: '#41C9A5'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-start',
                                                padding: '0px',
                                                gap: '8px',
                                                width: '200px',
                                                height: '48px'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '200px',
                                                    height: '48px',
                                                    fontFamily: 'PolySans Trial',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '16px',
                                                    lineHeight: '24px',
                                                    letterSpacing: '0.15px',
                                                    color: '#021514'
                                                }}
                                            >
                                                Final assets ready for frontend implementation
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Section 5 */}
        <div className="w-full h-[921px] bg-[#E5F9E0] relative">
            {/* Title */}
            <div
                style={{
                    position: 'absolute',
                    width: '1237px',
                    height: '64px',
                    left: '58px',
                    top: '56px'
                }}
            >
                <h1
                    style={{
                        fontFamily: 'PolySans Trial',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '57px',
                        lineHeight: '64px',
                        letterSpacing: '-0.25px',
                        color: '#021514'
                    }}
                >
                    Design screens
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
                            left: 'calc(50% - 1440px/2 + 435.5px)',
                            top: 'calc(50% - 1041px/2 - 57px)',
                            backgroundImage: 'url(/aiplatform.png)',
                            backgroundSize: 'cover'
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
                                width: '1440px',
                                height: '1041px',
                                left: 'calc(50% - 1440px/2 + 435.5px)',
                                top: 'calc(50% - 1041px/2 + 99px)',
                                backgroundImage: 'url(/aiplatform.png)',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                    </div>

                    {/* Bottom half - Frame 1618868452 */}
                    <div
                        style={{
                            width: '489px',
                            height: '296px',
                            background: '#FFFFFF',
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
                                height: '1041px',
                                left: 'calc(50% - 1440px/2 + 435.5px)',
                                top: 'calc(50% - 1041px/2 + 148.5px)',
                                backgroundImage: 'url(/aiplatform.png)',
                                backgroundSize: 'cover'
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
                            width: '1440px',
                            height: '1041px',
                            left: 'calc(50% - 1440px/2 + 435.5px)',
                            top: 'calc(50% - 1041px/2 - 57px)',
                            backgroundImage: 'url(/aiplatform.png)',
                            backgroundSize: 'cover'
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
                            backgroundImage: 'url(/aiplatform.png)',
                            backgroundSize: 'cover'
                        }}
                    ></div>
                </div>
            </div>
        </div>

        {/* Section 6 */}
        <div className="w-full h-[501px] bg-[#E5F9E0] relative">
            {/* Frame 254 - Outer Container */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '40px',
                    position: 'absolute',
                    width: '1439px',
                    height: '316px',
                    left: 'calc(50% - 1439px/2 - 0.5px)',
                    top: '80px'
                }}
            >
                {/* Frame 252 - Row Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: '0px',
                        gap: '321px',
                        width: 'full',
                        height: '316px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0
                    }}
                >
                    {/* Frame 248 - Left Column */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            padding: '0px 40px',
                            gap: '16px',
                            width: '584px',
                            height: '316px',
                            flex: 'none',
                            order: 0,
                            flexGrow: 0
                        }}
                    >
                        {/* THE RESULTS */}
                        <div
                            style={{
                                width: '379px',
                                height: '20px',
                                fontFamily: 'PolySans Trial',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '20px',
                                letterSpacing: '0.1px',
                                color: '#858BE3',
                                flex: 'none',
                                order: 0,
                                flexGrow: 0
                            }}
                        >
                            THE RESULTS
                        </div>

                        {/* Title */}
                        <h1
                            style={{
                                width: '584px',
                                height: '192px',
                                fontFamily: 'PolySans Trial',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '57px',
                                lineHeight: '64px',
                                letterSpacing: '-0.25px',
                                color: '#021514',
                                flex: 'none',
                                order: 1,
                                alignSelf: 'stretch',
                                flexGrow: 0
                            }}
                        >
                            Fast, Clear, and Market-Ready Outcomes.
                        </h1>

                        {/* Frame 5 - Description Container */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px 40px',
                                gap: '16px',
                                width: '584px',
                                height: '72px',
                                flex: 'none',
                                order: 2,
                                alignSelf: 'stretch',
                                flexGrow: 0
                            }}
                        >
                            <p
                                style={{
                                    width: '584px',
                                    height: '72px',
                                    fontFamily: 'PolySans Trial',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    letterSpacing: '0.5px',
                                    color: '#8CA1A0',
                                    flex: 'none',
                                    order: 0,
                                    alignSelf: 'stretch',
                                    flexGrow: 0
                                }}
                            >
                                Sprinten's sprint delivered tangible improvements that empowered Sprintin AI to ship smarter and faster, building trust with users and showcasing the platform's AI-onchain power.
                            </p>
                        </div>
                    </div>

                    {/* Frame 251 - Right Column */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            padding: '0px',
                            gap: '40px',
                            width: '654px',
                            height: '312px',
                            flex: 'none',
                            order: 1,
                            flexGrow: 0
                        }}
                    >
                        {/* Frame 249 - Result 1 */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                gap: '16px',
                                width: '654px',
                                height: '64px',
                                flex: 'none',
                                order: 0,
                                alignSelf: 'stretch',
                                flexGrow: 0
                            }}
                        >
                            <div
                                style={{
                                    width: '654px',
                                    height: '28px',
                                    fontFamily: 'PolySans Trial',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '22px',
                                    lineHeight: '28px',
                                    color: '#021514',
                                    flex: 'none',
                                    order: 0,
                                    alignSelf: 'stretch',
                                    flexGrow: 0
                                }}
                            >
                                Smooth Onboarding & Engagement
                            </div>

                            <div
                                style={{
                                    width: '654px',
                                    height: '20px',
                                    fontFamily: 'PolySans Trial',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    letterSpacing: '0.25px',
                                    color: '#8CA1A0',
                                    flex: 'none',
                                    order: 1,
                                    alignSelf: 'stretch',
                                    flexGrow: 0
                                }}
                            >
                                New flows reduced friction, helping first-time users quickly understand and adopt the platform.
                            </div>
                        </div>

                        {/* Frame 250 - Result 2 */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                gap: '16px',
                                width: '654px',
                                height: '84px',
                                flex: 'none',
                                order: 1,
                                alignSelf: 'stretch',
                                flexGrow: 0
                            }}
                        >
                            <div
                                style={{
                                    width: '654px',
                                    height: '28px',
                                    fontFamily: 'PolySans Trial',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '22px',
                                    lineHeight: '28px',
                                    color: '#021514',
                                    flex: 'none',
                                    order: 0,
                                    alignSelf: 'stretch',
                                    flexGrow: 0
                                }}
                            >
                                Cohesive, Premium UI
                            </div>

                            <div
                                style={{
                                    width: '654px',
                                    height: '40px',
                                    fontFamily: 'PolySans Trial',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    letterSpacing: '0.25px',
                                    color: '#8CA1A0',
                                    flex: 'none',
                                    order: 1,
                                    alignSelf: 'stretch',
                                    flexGrow: 0
                                }}
                            >
                                Consistent design and a component library created a scalable, high-quality experience that strengthens trust.
                            </div>
                        </div>

                        {/* Frame 251 - Result 3 */}
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '0px',
                                gap: '16px',
                                width: '654px',
                                height: '84px',
                                flex: 'none',
                                order: 2,
                                alignSelf: 'stretch',
                                flexGrow: 0
                            }}
                        >
                            <div
                                style={{
                                    width: '654px',
                                    height: '28px',
                                    fontFamily: 'PolySans Trial',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '22px',
                                    lineHeight: '28px',
                                    color: '#021514',
                                    flex: 'none',
                                    order: 0,
                                    alignSelf: 'stretch',
                                    flexGrow: 0
                                }}
                            >
                                Measurable Business Impact
                            </div>

                            <div
                                style={{
                                    width: '654px',
                                    height: '40px',
                                    fontFamily: 'PolySans Trial',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    letterSpacing: '0.25px',
                                    color: '#8CA1A0',
                                    flex: 'none',
                                    order: 1,
                                    alignSelf: 'stretch',
                                    flexGrow: 0
                                }}
                            >
                                Faster launch and improved clarity drove higher early adoption, increased engagement, and positioned Sprintin AI as a credible, professional product in the market.
                            </div>
                        </div>
                    </div>
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