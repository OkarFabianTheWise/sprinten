"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import arrowleft from "../icons/arrowleft.png";
import arrowright from "../icons/arrowright.png";
import { testimonials } from "../data/testimonials";

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <section className="w-full bg-[#021514] relative" style={{ height: '598px' }}>
      
      {/* Label */}
      <motion.p
        className="absolute uppercase tracking-[0.15em] text-[#8B9FFF] text-[12px]"
        style={{ top: '135px', left: '106px' }}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        TESTIMONIAL
      </motion.p>

      {/* Centered div */}
      <div className="absolute flex items-start" style={{ top: '195px', left: '106px', width: 'calc(95% - 106px)', height: '268px', justifyContent: 'space-between' }}>

        {/* Main Content */}
        <div className="flex items-start">
          
          {/* LEFT: Quote + Author */}
          <div className="flex-1 pr-16">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentIndex}
                className="text-white font-normal tracking-[-0.25px]"
                style={{
                  fontSize: "clamp(32px, 4vw, 57px)",
                  lineHeight: "1.12",
                }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentTestimonial.quote}
              </motion.blockquote>
            </AnimatePresence>

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${currentIndex}`}
                className="mt-[80px]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    className="w-[23px] h-[24px] rounded-full"
                  />
                  <p className="text-white text-[18px] font-medium">
                    {currentTestimonial.author}
                  </p>
                </div>
                <p className="text-[#8B9FFF] text-[14px] tracking-[0.05em]">
                  {currentTestimonial.title}
                </p>
              </motion.div>
            </AnimatePresence>
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.5 }}
            >
              "
            </motion.div>

            {/* Arrows */}
            <div className="flex gap-[48px]">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <img src={arrowleft.src} width={56} height={56} />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
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