"use client";

import { motion } from "framer-motion";
import arrowleft from "../icons/arrowleft.png";
import arrowright from "../icons/arrowright.png";
import usericon from "../icons/usericon.png";

export function TestimonialSection() {
  return (
    <section className="w-full bg-[#021514] py-[80px]">
      
      {/* 1440px Desktop Container */}
      <div className="max-w-[1440px] mx-auto px-16">
        
        {/* Label */}
        <motion.p
          className="uppercase tracking-[0.15em] text-[#8B9FFF] text-[12px] mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          TESTIMONIAL
        </motion.p>

        {/* Main Content */}
        <div className="flex items-start">
          
          {/* LEFT: Quote + Author */}
          <div className="flex-1 pr-16">
            <motion.blockquote
              className="text-white font-normal tracking-[-0.25px]"
              style={{
                fontSize: "clamp(32px, 4vw, 57px)",
                lineHeight: "1.12",
              }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Sprinten delivered our MVP in record time. Clean UX, clean code,
              zero back-and-forth drama
            </motion.blockquote>

            {/* Author */}
            <motion.div
              className="mt-[80px]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={usericon.src}
                  alt="Edem vee"
                  className="w-[23px] h-[24px] rounded-full"
                />
                <p className="text-white text-[18px] font-medium">
                  Edem vee
                </p>
              </div>
              <p className="text-[#8B9FFF] text-[14px] tracking-[0.05em]">
                Co-founder – Paykin
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Quote mark + Arrows */}
          <div className="flex flex-col items-end gap-[20px]">
            
            {/* Quote Mark */}
            <motion.div
              className="text-[#2F9C96] font-normal"
              style={{
                fontSize: "153.41px",
                lineHeight: "172.25px",
                letterSpacing: "-0.67px",
              }}
              initial={{ rotate: -90, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              "
            </motion.div>

            {/* Arrows */}
            <div className="flex gap-[48px]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <img src={arrowleft.src} width={56} height={56} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <img src={arrowright.src} width={52} height={52} />
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
