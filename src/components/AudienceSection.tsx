"use client";

import CombinedAnimation from "@/animation/CombinedAnimation";
import { HoverScrollCall } from "@/animation/HoverScrollCall";
import { motion } from "framer-motion";

export function AudienceSection() {
  return (
    <section className="w-screen bg-[#E5F9E0] py-16 overflow-x-hidden">
      {/* Shared horizontal gutter */}
      <div style={{ paddingLeft: '40px', paddingRight: '40px' }}>
        {/* Main Content */}
        <div className="flex gap-10 mb-32 w-full h-[348px]">
          {/* Left Column */}
          <div className="w-[50%] h-[348px] flex flex-col gap-4">
            <motion.div
              className="flex-1 overflow-hidden"
              initial={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p className="text-[#858BE3] text-sm font-medium tracking-wider mb-6">
                WHO WE SERVE
              </p>

              <motion.h1
                className="text-[57px] leading-[72px] tracking-[-0.25px] font-normal text-[#021514] mb-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Built for Founders. Designed
                <br />
                for Developers. Ready for
                <br />
                Anyone Shipping Onchain.
              </motion.h1>

              <motion.p
                className="text-[#7A9490] text-lg leading-[28px] mb-8"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Sprinten supports the people building the next generation of
                Solana products — whether you're writing smart contracts,
                shaping a new startup, or taking an idea to market.
              </motion.p>
            </motion.div>

            <motion.button
              className="
                relative flex items-center
                w-[200px] h-[40px]
                rounded-[8px]
                gap-[24px]
                px-[12px]
                text-white
                font-medium
                transition-all
                duration-500
                ease-out
                hover:translate-y-[-1px]
              "
              aria-label="Book a Call"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <HoverScrollCall />
            </motion.button>
          </div>

          {/* Right Column */}
          <div className="w-[50%] h-[332px] grid gap-10">
            {[
              {
                title: "For Developers",
                text: (
                    <>
                      You build the logic, we handle the design and frontend. No more bottlenecks, no more waiting on UI. Plug us in and keep shipping.
                    </>
                  ),
              },
              {
                title: "For Founders & Startups",
                text:
                  (
                    <>
                      Turn your idea into a real, usable product in weeks. Fast design, fast frontend, clear strategy, all aligned with your vision.
                    </>
                  ),
              },
              {
                title: "For Teams Entering Blockchain",
                text:
                  (
                    <>
                      SMEs and enterprises looking to explore blockchain get a clear, guided path with clean UX, rapid prototyping, and confident execution.
                    </>
                  ),
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 + i * 0.12 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <motion.h3
                  className="text-2xl font-normal mb-3 text-[#021514]"
                  initial={{ y: 8, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.95 + i * 0.12 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {card.title}
                </motion.h3>

                <motion.p
                  className="text-[#7A9490] leading-[26px]"
                  initial={{ y: 6, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 + i * 0.12 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {card.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animation aligned to same gutters */}
        <CombinedAnimation />
      </div>
    </section>
  );
}