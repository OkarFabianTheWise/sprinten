"use client";

import { motion } from "framer-motion";
import { heroCopy } from "@/data/content";
import CombinedAnimation from "@/animation/CombinedAnimation";
import { HoverScrollText } from "@/animation/HoverScrollText";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#021514]"
    >
      {/* Full-bleed wrapper (SAFE on iOS) */}
      <div
        className="
          hero-shell
          relative
          overflow-visible
          w-screen left-1/2 -translate-x-1/2
          px-4 sm:px-6 md:px-8 xl:px-12
          text-primary-100
          flex flex-col
          pt-24 sm:pt-28 md:pt-32
        "
      >
        {/* Centered content container */}
        <div className="mx-auto max-w-[1440px] w-full">
          <div className="
            flex flex-col
            lg:flex-row
            items-start lg:items-center
            justify-between
            gap-10 xl:gap-16
            mb-10
          ">
            {/* LEFT */}
            <motion.div
              className="w-full lg:max-w-[420px] space-y-2 text-center lg:text-left"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <motion.h1
                className="
                  font-poly-sans
                  text-[clamp(2.25rem,5vw,3.5rem)]
                  leading-tight
                  text-[#A2F7B4]
                "
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                Ship Faster.
                <br />
                Build Better.
                <br />
                Onchain.
              </motion.h1>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="
                w-full
                lg:max-w-[480px]
                flex flex-col
                items-center lg:items-start
                gap-4
                text-white
                text-center lg:text-left
              "
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <motion.p
                className="
                  text-base sm:text-lg
                  text-[#DFFFE2]
                  font-poly-sans
                  max-w-prose
                  [&_*]:font-normal
                "
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {heroCopy.body}
              </motion.p>

              <motion.div
                className="w-fit"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <HoverScrollText />
              </motion.div>
            </motion.div>
          </div>

          {/* Animation */}
          <div className="w-screen left-1/2 -translate-x-1/2 relative flex justify-center mb-10">
            <CombinedAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
