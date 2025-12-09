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
        mx-[calc(50%-50vw)] 
        h-[780px] 
      "
    >
      {/* Main content container */}
      <div className="mx-auto max-w-7xl px-8 py-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] relative z-10 h-full">

        {/* LEFT COLUMN */}
        <div className="overflow-hidden">

          {/* Label */}
          <motion.p
            className="text-sm tracking-[0.5em] text-[#5FA089] uppercase overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {whySprinten.label}
          </motion.p>

          {/* Main Headings */}
          <motion.h2 className="mt-6 font-poly-sans font-normal text-[57px] leading-[64px] tracking-[-0.25px] text-[#021514] w-[603px]">
            {["Built for Builders.", "Optimized for Speed.", "Trusted for Quality."].map((text, idx) => (
              <motion.span
                key={text}
                className="block overflow-hidden"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + idx * 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {text}
              </motion.span>
            ))}
          </motion.h2>

          {/* Body Text */}
          <motion.p
            className="mt-6 font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#8CA1A0] w-[603px] overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Sprinten gives Solana founders and developers the perfect mix of speed,
            clarity, and execution. No long cycles. No agency fluff. Just fast,
            high-quality product design and frontend shipping built for real users.
          </motion.p>

          {/* CTA */}
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

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-12 pt-6">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="overflow-hidden">
              <motion.h3
                className="font-poly-sans font-normal text-[22px] leading-[28px] text-[#021514] w-[559px] overflow-hidden"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {pillar.title}
              </motion.h3>

              <motion.p
                className="mt-2 font-poly-sans font-normal text-[16px] leading-[24px] text-[#6C837F] w-[559px] overflow-hidden"
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
      <div
        className="pointer-events-none absolute inset-0 flex items-end justify-center overflow-visible"
        style={{ zIndex: 0, bottom: "0" }}
      >
        <span
          className="block font-poly-sans text-[180px] md:text-[200px] leading-[224px] tracking-[-0.88px] whitespace-nowrap"
          style={{
            fontWeight: 400,
            color: "transparent",
            WebkitTextStroke: "0.97px #A2F7B4",
            paintOrder: "stroke",
            width: "1399px",
            textAlign: "center",
          }}
        >
          Sprinten Studio
        </span>
      </div>
    </section>
  );
}
