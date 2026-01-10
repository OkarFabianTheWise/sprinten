"use client";

import { motion, Variants } from "framer-motion";
import { TestimonialSection } from "../../components/TestimonialSection";
import { CTASection } from "../../components/CTASection";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import arrowl from '../../icons/b-ar-left.svg';
import arrowr from '../../icons/b-ar-right.svg';

const WORK_ITEMS = [
  { title: "Airbills pay", img: "/airbills.png", duration: "3 weeks", icon: "/airbills-icon.svg" },
  { title: "Veloo", img: "/veloo-hero.png", duration: "4 weeks", icon: "/veloo-icon.svg" },
  { title: "AI platform for Sprinten", img: "/aiplatform.png", duration: "3 weeks", icon: "/aiplatform-icon.svg" },
  { title: "DeFi Protocol", img: "/aiplatform.png", duration: "5 weeks", icon: "/defi-icon.svg" },
  { title: "NFT Marketplace", img: "/design.png", duration: "4 weeks", icon: "/nft-icon.svg" },
  { title: "Blockchain Analytics", img: "/aiplatform.png", duration: "6 weeks", icon: "/analytics-icon.svg" },
  { title: "Crypto Wallet", img: "/airbills.png", duration: "3 weeks", icon: "/wallet-icon.svg" },
  { title: "Smart Contract Tool", img: "/strategy.png", duration: "2 weeks", icon: "/contract-icon.svg" },
];

const getCaseStudyUrl = (title: string) => {
  return `/casestudy?title=${encodeURIComponent(title)}`;
};

const imageVariants: Variants = {
  hidden: { scale: 1.08, opacity: 0 },
  Variant4: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.33, 0.01, 0.68, 0.99] },
  },
};

export default function AllWorkPage() {
  const [viewMode, setViewMode] = useState<"case-study" | "gallery">("case-study");
  const [selectedImage, setSelectedImage] = useState<{ title: string; img: string; index: number } | null>(null);
  const router = useRouter();

  return (
    <>
      <div className="absolute top-20 md:top-24 lg:top-[124px] left-4 md:left-8 lg:left-[50px] px-4 flex flex-col gap-4 md:gap-6 lg:gap-[55px]">
        <h1
          className="
            font-normal
            text-3xl md:text-4xl lg:text-5xl xl:text-[57px]
            leading-tight md:leading-[64px]
            tracking-[-0.25px]
            text-[#021514]
            text-start
            w-full max-w-xs md:max-w-md lg:max-w-2xl xl:w-[792px]
          "
        >
          Our Work
        </h1>

        {/* Frame 1618868473 */}
        <div className="flex flex-row items-center gap-2 md:gap-4 w-full max-w-[203px]">
          
          {/* Frame 1618868474 – Case Study */}
          <button
            onClick={() => setViewMode("case-study")}
            className={`
              flex justify-center items-center px-3 md:px-4 py-2 gap-2 w-full max-w-[109px] h-9 md:h-[36px] rounded-[8px]
              ${viewMode === "case-study" ? "bg-[#2F9C96]" : "border border-[#A4A4A4]"}
            `}
          >
            <span
              className={`
                font-semibold
                text-sm md:text-[14px]
                leading-[20px]
                tracking-[0.1px]
                whitespace-nowrap
                ${viewMode === "case-study" ? "text-[#E5F9E0]" : "text-[#A4A4A4]"}
              `}
            >
              Case Study
            </span>
          </button>

          {/* Frame 1618868475 – Gallery */}
          <button
            onClick={() => setViewMode("gallery")}
            className={`
              flex justify-center items-center px-3 md:px-4 py-2 gap-2 w-full max-w-[78px] h-9 md:h-[36px] rounded-[8px]
              ${viewMode === "gallery" ? "bg-[#2F9C96]" : "border border-[#A4A4A4]"}
            `}
          >
            <span
              className={`
                font-semibold
                text-sm md:text-[14px]
                leading-[20px]
                tracking-[0.1px]
                whitespace-nowrap
                ${viewMode === "gallery" ? "text-[#E5F9E0]" : "text-[#A4A4A4]"}
              `}
            >
              Gallery
            </span>
          </button>

        </div>
      </div>

      <section
        id="allwork"
        className="
          bg-[#E5F9E0]
          px-4 md:px-8 lg:px-[32px]
          overflow-x-clip
          max-w-full
          gap-6 md:gap-8 lg:gap-[40px]
          mt-32 md:mt-36 lg:mt-[150.64px]
        "
      >
        <div
          className="
            max-w-[1300px] mx-auto
            px-4 sm:px-6
            lg:max-w-none lg:mx-0 lg:ml-[40px] lg:mr-[40px] lg:px-0
            py-8 md:py-12 lg:py-14
          "
        >
          
        
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {WORK_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`bg-[#E5F9E0] overflow-hidden rounded-[8px] ${
                  viewMode === "gallery" || viewMode === "case-study" ? "cursor-pointer" : ""
                }`}
                onClick={() => {
                  if (viewMode === "gallery") {
                    setSelectedImage({ title: item.title, img: item.img, index: idx });
                  } else if (viewMode === "case-study") {
                    router.push(getCaseStudyUrl(item.title));
                  }
                }}
              >
                {/* Image */}
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full
                    aspect-[16/9]
                    object-cover
                    bg-gray-100
                  "
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="Variant4"
                  viewport={{ once: false, amount: 0.5 }}
                />

                {/* Text block - only show in case study mode */}
                {viewMode === "case-study" && (
                  <div className="py-3 px-2 md:px-3">
                    <h3 className="text-sm md:text-base lg:text-[16px] leading-tight md:leading-[24px] font-semibold tracking-[0.15px] text-[#021514] mb-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center text-xs md:text-sm lg:text-[14px] leading-tight md:leading-[24px] text-gray-500">
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 mr-2 text-teal-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path strokeWidth="2" d="M12 6v6l4 2" />
                      </svg>
                      <span>{item.duration}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedImage && viewMode === "gallery" && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          {/* Main Modal Card */}
          <div
            className="
              flex flex-col items-start p-4 md:p-6 lg:p-10 gap-2 
              w-full max-w-[970.33px] h-auto max-h-[90vh]
              rounded-lg
              absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            "
            style={{ 
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="flex flex-col items-start p-0 gap-2 w-full h-auto bg-white rounded-lg overflow-hidden">
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute w-8 h-8 md:w-10 md:h-10 right-4 md:right-10 top-16 md:top-20 z-10"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10 text-[#EBEBEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9l-6 6M9 9l6 6" />
            </svg>
          </button>

          {/* Bottom Bar with Navigation */}
          <div 
            className="absolute w-full h-16 md:h-[81px] bottom-0 left-0 bg-[#E5F9E0] flex items-center justify-between px-4 md:px-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Counter - Left */}
            <div className="flex items-center justify-start">
              <span className="font-normal text-lg md:text-[28px] leading-tight md:leading-9 text-[#3A3A3A]">
                {selectedImage.index + 1}/{WORK_ITEMS.length}
              </span>
            </div>

            {/* Image Title - Center */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="font-normal text-lg md:text-[28px] leading-tight md:leading-9 text-[#3A3A3A] text-center max-w-[200px] md:max-w-none truncate">
                {selectedImage.title}
              </span>
            </div>

            {/* Navigation Arrows - Right */}
            <div className="flex flex-row items-center gap-4 md:gap-12">
              {/* Previous Button */}
              <button
                onClick={() => {
                  const prevIndex = selectedImage.index > 0 ? selectedImage.index - 1 : WORK_ITEMS.length - 1;
                  setSelectedImage({ ...WORK_ITEMS[prevIndex], index: prevIndex });
                }}
                className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center"
              >
                <img src={arrowl.src}
                 className="w-10 h-10 md:w-14 md:h-14" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => {
                  const nextIndex = selectedImage.index < WORK_ITEMS.length - 1 ? selectedImage.index + 1 : 0;
                  setSelectedImage({ ...WORK_ITEMS[nextIndex], index: nextIndex });
                }}
                className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center"
              >
                <img src={arrowr.src}
                className="w-10 h-10 md:w-14 md:h-14" />
              </button>
            </div>
          </div>
        </div>
      )}

      <TestimonialSection />
      <CTASection />
      <Footer />
    </>
  );
}