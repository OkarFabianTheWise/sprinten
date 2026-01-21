"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section 
      id="contact"
      className="relative flex items-center justify-center w-full bg-[#021514] py-16 md:py-20 lg:py-24"
    >
      {/* Inner green container - responsive margins */}
      <div
        className="
          flex flex-col items-center justify-center text-center 
          w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-32px)] md:max-w-[calc(100%-64px)] lg:max-w-[calc(100%-90px)]
          mx-auto 
          rounded-[16px] 
          bg-[#A2F7B4]
          min-h-[300px] md:min-h-[356px]
          px-3 sm:px-4 md:px-6 lg:px-8
          py-8 md:py-10 lg:py-12
        "
      >
        {/* Heading */}
        <motion.h2 
          className="text-[56px] leading-[64px] font-normal text-[#021514] mb-4 tracking-[-0.5px]"
        >
          Ready to Ship Faster?
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          className="text-[16px] leading-[28px] text-[#034A3D] max-w-[700px] mb-8"
        >
          Let's turn your idea, prototype, or draft UI into a real<br /> product, designed, built, and ready for users.
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-4 w-full max-w-[calc(100%-16px)] px-4">
          {/* BOOK A CALL */}
          <a href="https://cal.com/sprinten/introcall" target="_blank" rel="noopener noreferrer" className="flex-1">
            <button 
              className="h-[52px] w-full rounded-[8px] border-none bg-[#2E8B7D] text-white font-normal transition-all hover:opacity-90"
            >
              Book a call
            </button>
          </a>

          {/* START A SPRINT */}
          <a href="https://nifty-possum-71c.notion.site/6650f5b8165e431a9926bec2eaf3bed7" target="_blank" rel="noopener noreferrer" className="flex-1">
            <button 
              className="h-[52px] w-full rounded-[8px] border-2 border-[#2E8B7D] bg-transparent text-[#2E8B7D] font-normal transition-all hover:bg-white/10"
            >
              Start a sprint
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
