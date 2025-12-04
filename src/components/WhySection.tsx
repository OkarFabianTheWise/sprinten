"use client";

import { motion } from "framer-motion";
import { whySprinten, pillars } from "@/data/content";

export function WhySection() {
  return (
    <section
      className="
        relative 
        bg-[#E5F9E0] 
        px-0 
        mx-[calc(50%-50vw)] 
        h-[730px] 
        overflow-hidden
      "
    >
      {/* Main content container */}
      <div className="mx-auto max-w-7xl px-8 py-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] relative z-10 h-full">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Label */}
          <motion.p 
            className="text-sm tracking-[0.5em] text-[#5FA089] uppercase"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {whySprinten.label}
          </motion.p>
          {/* MAIN HEADINGS */}
          <motion.h2
            className="
              mt-6
              font-poly-sans 
              font-normal 
              text-[57px] 
              leading-[64px] 
              tracking-[-0.25px]
              text-[#021514]
              w-[603px]
            "
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.span 
              className="block"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Built for Builders.
            </motion.span>
            <motion.span 
              className="block"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Optimized for Speed.
            </motion.span>
            <motion.span 
              className="block"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Trusted for Quality.
            </motion.span>
          </motion.h2>
          {/* BODY TEXT */}
          <motion.p
            className="
              mt-6 
              font-poly-sans 
              font-normal
              text-[16px]
              leading-[24px]
              tracking-[0.5px]
              text-[#8CA1A0]
              w-[603px]
            "
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
            className="mt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.button
              className="
                relative flex items-center 
                w-[220px] h-[46px] 
                gap-4 
                transition-all 
                duration-300 
                ease-out 
                hover:-translate-y-[1px]
              "
              whileHover={{ scale: 1.05 }}
            >
              <span className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#1F7E77]">
                <span className="text-white font-bold text-[18px]">→</span>
              </span>
              <span className="text-[15px] font-semibold text-[#00423d]">
                Start a Sprint
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
        {/* RIGHT COLUMN */}
        <motion.div 
          className="flex flex-col gap-12 pt-6"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {/* PILLAR TITLE */}
              <motion.h3
                className="
                  font-poly-sans 
                  font-normal
                  text-[22px]
                  leading-[28px]
                  tracking-[0px]
                  text-[#021514]
                  w-[559px]
                "
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {pillar.title}
              </motion.h3>
              {/* PILLAR DESCRIPTION */}
              <motion.p 
                className="mt-2 text-[16px] leading-[24px] text-[#6C837F] w-[559px]"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.4 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {pillar.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* BACKGROUND OUTLINE TEXT */}
      <motion.div 
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div
          className="
            relative 
            w-[1399px] 
            h-[225px] 
            overflow-visible
          "
        >
          <span
            className="
              block
              text-[200.14px]
              leading-[224.72px]
              tracking-[-0.88px]
              whitespace-nowrap
            "
            style={{
              fontFamily: 'PolySans Trial, sans-serif',
              fontWeight: 400,
              color: 'transparent',
              WebkitTextStroke: '0.97px #A2F7B4',
              paintOrder: 'stroke'
            }}
          >
            Sprinten\u00A0Studio
          </span>
        </div>
      </motion.div>
    </section>
  );
}
