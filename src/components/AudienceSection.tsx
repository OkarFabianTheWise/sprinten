"use client";

import { HoverScrollCall } from "@/animation/HoverScrollCall";
import { motion } from "framer-motion";

export function AudienceSection() {
  return (
    <div className="min-h-screen bg-[#E5F9E0] px-4 md:px-8 lg:px-12 py-16 mx-[calc(50%-50vw)]">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Content - Side by Side */}
        <div className="flex gap-10 mb-32">
          {/* Left Column - Header */}
          <div className="flex-1">
            <motion.p
              className="text-[#5B9C96] text-sm font-medium tracking-wider mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              WHO WE SERVE
            </motion.p>
            <motion.h1
              className="text-[57px] leading-[72px] tracking-[-0.25px] font-normal text-[#021514] mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Built for Founders. Designed for Developers. Ready for Anyone Shipping Onchain.
            </motion.h1>
            <motion.p 
              className="text-[#7A9490] text-lg leading-[28px] mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Sprinten supports the people building the next generation of Solana products — whether you're writing smart contracts, shaping a new startup, or taking an idea to market.
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
              <HoverScrollCall />
            </motion.button>
          </div>
          {/* Right Column - Audience Cards */}
          <div className="flex-1 grid gap-12">
            {[
              {
                title: "For Developers",
                text: "You build the logic, we handle the design and frontend. No more bottlenecks, no more waiting on UI. Plug us in and keep shipping."
              },
              {
                title: "For Founders & Startups",
                text: "Turn your idea into a real, usable product in weeks. Fast design, fast frontend, clear strategy, all aligned with your vision."
              },
              {
                title: "For Teams Entering Blockchain",
                text: "SMEs and enterprises looking to explore blockchain get a clear, guided path with clean UX, rapid prototyping, and confident execution."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <motion.h3 
                  className="text-2xl font-normal mb-3 text-[#021514]"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {card.title}
                </motion.h3>
                <motion.p 
                  className="text-[#7A9490] leading-[26px]"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {card.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Giant Sprinten Text */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.h2 
            className="text-[#5B9C96] font-normal text-[12rem] md:text-[16rem] lg:text-[20rem] leading-none tracking-tight opacity-40"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Sprinten
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
}
