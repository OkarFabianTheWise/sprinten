"use client";

import { motion } from "framer-motion";
import { heroCopy } from "@/data/content";
import CombinedAnimation from "@/animation/CombinedAnimation";
import { HoverScrollText } from "@/animation/HoverScrollText";

export function HeroSection() {
  return (
    <section id="home" className="px-0 mx-[calc(50%-50vw)]">
      <div className="hero-shell w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden px-8 text-primary-100 flex flex-col justify-start pt-32">
        {/* Centered Container */}
        <div className="max-w-7xl mx-auto w-full">
          {/* Hero Content */}
          <div className="flex h-auto items-start md:items-center justify-between gap-10 mb-8">
            <motion.div 
                className="w-[379px] space-y-2"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <motion.h1 
                  className="font-poly-sans text-5xl leading-tight text-[#A2F7B4]"
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

            <motion.div 
              className="w-[437px] relative flex flex-col items-start justify-start gap-4 text-white"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <motion.p 
                className="text-lg text-[#DFFFE2] font-poly-sans font-normal [&_*]:font-normal"
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

          {/* Animation Section with 32px bottom spacing */}
          <div className="w-full flex justify-center mb-8">
            <CombinedAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}