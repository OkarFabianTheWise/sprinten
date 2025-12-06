"use client";

import { motion, useAnimation } from "framer-motion";
import { useCallback } from "react";

export function HoverScrollText() {
  const topText = useAnimation();
  const bottomText = useAnimation();

  const trigger = useCallback(() => {
    topText.set({ y: 0, opacity: 1 });
    bottomText.set({ y: 16, opacity: 0 });

    topText.start({
      y: -16,
      opacity: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    });

    bottomText.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    });
  }, []);

  return (
    <div 
    className="flex items-center gap-[10px]">
      {/* Circle Arrow */}
      <div
        className="
          w-[40px] h-[40px]
          rounded-full
          bg-[#2F9C96]
          flex items-center justify-center
          p-[12px]
        "
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </div>

      {/* Text Scroll Area */}
      <div
        onMouseEnter={trigger}
        className="relative overflow-hidden h-[16px] w-[99px]"
      >
        {/* Top text */}
        <motion.span
          animate={topText}
          className="
            absolute left-0 top-0
            font-poly-sans font-semibold
            text-[12px] leading-[16px] tracking-[0.5px]
            text-[#2F9C96]
            flex items-center
          "
        >
          Start a Sprint
        </motion.span>

        {/* Bottom text */}
        <motion.span
          animate={bottomText}
          className="
            absolute left-0 top-0
            font-poly-sans font-normal
            text-[12px] leading-[16px] tracking-[0.5px]
            text-[#2F9C96]
            flex items-center
          "
        >
          Start a Sprint
        </motion.span>
      </div>
    </div>
  );
}
