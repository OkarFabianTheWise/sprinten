"use client";

import { motion, Variants } from "framer-motion";
import { TestimonialSection } from "../../components/TestimonialSection";
import { CTASection } from "../../components/CTASection";
import { Footer } from "../../components/Footer";

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
          
          {/* Frame 1618868474 – Case Study (Primary) */}
          <div className="flex justify-center items-center px-4 py-2 gap-2 w-[109px] h-[36px] bg-[#2F9C96] rounded-[8px]">
            <span
              className="
                font-semibold
                text-[14px]
                leading-[20px]
                tracking-[0.1px]
                text-[#E5F9E0]
                whitespace-nowrap
              "
            >
              Case Study
            </span>
          </div>

          {/* Frame 1618868475 – Gallery (Outlined) */}
          <div className="flex justify-center items-center px-4 py-2 gap-2 w-[78px] h-[36px] border border-[#A4A4A4] rounded-[8px] box-border">
            <span
              className="
                font-semibold
                text-[14px]
                leading-[20px]
                tracking-[0.1px]
                text-[#A4A4A4]
                whitespace-nowrap
              "
            >
              Gallery
            </span>
          </div>

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
                className="bg-[#E5F9E0] overflow-hidden rounded-[8px]"
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

                {/* Text block */}
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
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialSection />
      <CTASection />
      <Footer />
    </>
  );
}