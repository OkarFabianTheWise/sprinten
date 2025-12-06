"use client";

import { motion } from "framer-motion";
import { heroCopy } from "@/data/content";
import CombinedAnimation from "@/animation/CombinedAnimation";

export function HeroSection() {
  return (
    <section className="space-y-6 px-0 h-[932px] mx-[calc(50%-50vw)]">
      <div className="hero-shell w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[192px] overflow-hidden px-8 text-primary-100">
        <div className="flex h-full items-center justify-between gap-10">
            <motion.div 
                className="w-[379px] h-[192px] space-y-2"
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
            className="flex flex-col gap-8"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            >
            <motion.div 
                className="w-[437px] relative flex flex-col items-start justify-center space-y-4 text-white"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false, amount: 0.5 }}
            >
                <motion.p 
                className="text-lg text-[#DFFFE2]"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
                >
                {heroCopy.body}
                </motion.p>
                <motion.button
                className="
                    relative flex items-center 
                    w-[200px] h-[40px]
                    rounded-[8px]
                    gap-[24px]
                    px-[12px]
                    transition-all 
                    duration-500 
                    ease-out 
                    hover:translate-y-[-1px]
                "
                aria-label="Start a Sprint"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: false, amount: 0.5 }}
                whileHover={{ scale: 1.05 }}
                >
                <span
                    className="
                    flex items-center justify-center 
                    w-[40px] h-[40px] 
                    rounded-full 
                    bg-[#1F7E77]
                    "
                >
                    <span
                    className="
                        text-white 
                        leading-none
                        font-bold
                        text-[16px]
                        select-none
                        pointer-events-none
                    "
                    aria-hidden="true"
                    >
                    →
                    </span>
                </span>
                <span className="text-white text-sm font-semibold whitespace-nowrap">
                    Start a Sprint
                </span>
                </motion.button>
            </motion.div>
            </motion.div>
        </div>
        <motion.div 
          className="mt-10 w-full flex justify-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <CombinedAnimation />
        </motion.div>
      </div>
    </section>
  );
}
