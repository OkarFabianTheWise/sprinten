// HeroSection
"use client";

import { motion } from "framer-motion";
import { heroCopy } from "@/data/content";
import CombinedAnimation from "@/animation/CombinedAnimation";
import { HoverScrollText } from "@/animation/HoverScrollText";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full bg-[#021514] px-4 sm:px-6 lg:px-0"
      style={{
        minHeight: '932px',
        paddingTop: '92px' // top: 92px from Figma
      }}
    >
      {/* Content wrapper matching Figma: width 1360, left 40px, top 196px */}
      {/* move to the top */}
      <div
        id="main-content"
        className="
          text-primary-100
          flex flex-col
          max-w-[1300px] sm:mx-auto
          lg:max-w-none lg:mx-0 lg:ml-[40px] lg:mr-[40px]
          gap-8
          2xl:gap-12
          top-[196px]
          height-[788px]
          pb-8
        "
      >
        {/* Text content area */}
        <div className="w-full">
          <div className="
            flex flex-col
            lg:flex-row
            items-start lg:items-center
            justify-between
            gap-10 xl:gap-16
          ">
            {/* LEFT */}
            <motion.div
              className="w-full lg:max-w-[420px] space-y-2 text-center lg:text-left"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
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
                initial={{ y: 50, opacity: 0 }}
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
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
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
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {heroCopy.body}
              </motion.p>

              <motion.div
                className="w-fit"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <HoverScrollText />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Animation card */}
        <CombinedAnimation />
      </div>
    </section>
  );
}