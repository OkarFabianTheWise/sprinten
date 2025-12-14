"use client";

import { motion } from "framer-motion";
import { whySprinten, pillars } from "@/data/content";
import { HoverScrollText } from "@/animation/HoverScrollText";

export function WhySection() {
  return (
    <section
      className="
        relative
        bg-[#E5F9E0]
        px-0
        overflow-x-clip
        min-h-[780px]
      "
    >
      {/* Content */}
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-4 sm:px-6 md:px-8 xl:px-12
          py-16
          grid
          gap-12
          lg:grid-cols-[1.1fr_0.9fr]
          relative
          z-10
        "
      >
        {/* LEFT */}
        <div>
          <p className="text-sm text-[#858BE3] uppercase font-[14px]">
            {whySprinten.label}
          </p>

          <motion.h2
            className="
              mt-6
              font-poly-sans
              text-[clamp(2.25rem,5vw,3.5rem)]
              leading-[1.15]
              tracking-[-0.25px]
              text-[#021514]
              max-w-[40rem]
            "
          >
            {[
              "Built for Builders.",
              "Optimized for Speed.",
              "Trusted for Quality.",
            ].map((text, idx) => (
              <motion.span
                key={text}
                className="block"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {text}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="
              mt-6
              font-poly-sans
              text-base
              leading-6
              text-[#8CA1A0]
              max-w-prose
            "
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Sprinten gives Solana founders and developers the perfect mix of speed,
            clarity, and execution. No long cycles. No agency fluff.
          </motion.p>

          <motion.div
            className="w-fit mt-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <HoverScrollText />
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-10 pt-4">
          {pillars.map((pillar, index) => (
            <div key={pillar.title}>
              <motion.h3
                className="
                  font-poly-sans
                  text-lg sm:text-xl
                  leading-7
                  text-[#021514]
                  max-w-[36rem]
                "
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {pillar.title}
              </motion.h3>

              <motion.p
                className="
                  mt-2
                  font-poly-sans
                  text-base
                  leading-6
                  text-[#6C837F]
                  max-w-[36rem]
                "
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {pillar.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      {/* BACKGROUND OUTLINE TEXT */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
        <span
          className="
            block
            mx-auto
            text-center
            font-poly-sans
            text-[clamp(6rem,18vw,12.5rem)]
            leading-none
            tracking-[-0.88px]
            whitespace-nowrap
          "
          style={{
            color: "transparent",
            WebkitTextStroke: "0.97px #A2F7B4",
            paintOrder: "stroke",
          }}
        >
          Sprinten Studio
        </span>
      </div>
    </section>
  );
}
