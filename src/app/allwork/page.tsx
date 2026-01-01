"use client";

import { motion, Variants } from "framer-motion";
import { TestimonialSection } from "../../components/TestimonialSection";
import { CTASection } from "../../components/CTASection";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import arrowl from '../../icons/b-ar-left.svg';
import arrowr from '../../icons/b-ar-right.svg';

const WORK_ITEMS = [
  { title: "Airbills pay", img: "/airbills.png", duration: "3 weeks" },
  { title: "AI platform for Sprinten", img: "/aiplatform.png", duration: "3 weeks" },
  { title: "Airbills pay", img: "/airbills.png", duration: "3 weeks" },
  { title: "AI platform for Sprinten", img: "/aiplatform.png", duration: "3 weeks" },
  { title: "Airbills pay", img: "/airbills.png", duration: "3 weeks" },
  { title: "AI platform for Sprinten", img: "/aiplatform.png", duration: "3 weeks" },
  { title: "Airbills pay", img: "/airbills.png", duration: "3 weeks" },
  { title: "AI platform for Sprinten", img: "/aiplatform.png", duration: "3 weeks" },
];

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

  return (
    <>
      <div className="absolute h-[64px] w-[792px] gap-[55px] top-[124px] left-[50px] px-4 flex flex-col">
        <h1
          className="
            font-normal
            text-[57px]
            leading-[64px]
            tracking-[-0.25px]
            text-[#021514]
            text-start
            w-[792px]
            h-[64px]
          "
        >
          Our Work
        </h1>

        {/* Frame 1618868473 */}
        <div className="flex flex-row items-center gap-4 w-[203px] h-[36px]">
          
          {/* Frame 1618868474 – Case Study */}
          <button
            onClick={() => setViewMode("case-study")}
            className={`
              flex justify-center items-center px-4 py-2 gap-2 w-[109px] h-[36px] rounded-[8px]
              ${viewMode === "case-study" ? "bg-[#2F9C96]" : "border border-[#A4A4A4]"}
            `}
          >
            <span
              className={`
                font-semibold
                text-[14px]
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
              flex justify-center items-center px-4 py-2 gap-2 w-[78px] h-[36px] rounded-[8px]
              ${viewMode === "gallery" ? "bg-[#2F9C96]" : "border border-[#A4A4A4]"}
            `}
          >
            <span
              className={`
                font-semibold
                text-[14px]
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
          px-[32px]
          overflow-x-clip
          max-w-full
          gap-[40px]
          mt-[150.64px]
        "
      >
        <div
          className="
            max-w-[1300px] mx-auto
            px-4 sm:px-6
            lg:max-w-none lg:mx-0 lg:ml-[40px] lg:mr-[40px] lg:px-0
            py-14 sm:py-16
          "
        >
          
        
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {WORK_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`bg-[#E5F9E0] overflow-hidden rounded-[8px] ${
                  viewMode === "gallery" ? "cursor-pointer" : ""
                }`}
                onClick={() => {
                  if (viewMode === "gallery") {
                    setSelectedImage({ title: item.title, img: item.img, index: idx });
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
                  <div className="py-3">
                    <h3 className="text-[16px] leading-[24px] font-semibold tracking-[0.15px] text-[#021514] mb-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center text-[14px] leading-[24px] text-gray-500">
                      <svg
                        className="w-4 h-4 mr-2 text-teal-500"
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
              flex flex-col items-start p-10 gap-2 
              w-[970.33px] h-[747.75px]
              rounded-lg
              absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            "
            style={{ 
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="flex flex-col items-start p-0 gap-2 w-[890.33px] h-[667.75px] bg-white rounded-lg">
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="w-[890.33px] h-[667.75px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute w-10 h-10 right-10 top-20 z-10"
          >
            <svg className="w-10 h-10 text-[#EBEBEB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9l-6 6M9 9l6 6" />
            </svg>
          </button>

          {/* Bottom Bar with Navigation */}
          <div 
            className="absolute w-full h-[81px] bottom-0 left-0 bg-[#E5F9E0] flex items-center justify-between px-10"
          >
            {/* Counter - Left */}
            <div className="w-[60px] h-9 flex items-center justify-start">
              <span className="font-normal text-[28px] leading-9 text-[#3A3A3A] text-right">
                {selectedImage.index + 1}/{WORK_ITEMS.length}
              </span>
            </div>

            {/* Image Title - Center */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="font-normal text-[28px] leading-9 text-[#3A3A3A]">
                {selectedImage.title}
              </span>
            </div>

            {/* Navigation Arrows - Right */}
            <div className="flex flex-row items-center gap-12">
              {/* Previous Button */}
              <button
                onClick={() => {
                  const prevIndex = selectedImage.index > 0 ? selectedImage.index - 1 : WORK_ITEMS.length - 1;
                  setSelectedImage({ ...WORK_ITEMS[prevIndex], index: prevIndex });
                }}
                className="w-14 h-14 flex items-center justify-center"
              >
                <img src={arrowl.src}
                 className="w-14 h-14" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => {
                  const nextIndex = selectedImage.index < WORK_ITEMS.length - 1 ? selectedImage.index + 1 : 0;
                  setSelectedImage({ ...WORK_ITEMS[nextIndex], index: nextIndex });
                }}
                className="w-14 h-14 flex items-center justify-center"
              >
                <img src={arrowr.src}
                className="w-14 h-14" />
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