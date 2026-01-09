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
    <section className="w-full bg-[#021514] relative py-12 md:py-20 lg:py-28 overflow-hidden">

      {/* Decorative ellipses (background) */}
      <div className="absolute -left-[1026px] -top-[146px] w-[1846.87px] h-[1284.01px] bg-white rounded-full opacity-5 pointer-events-none" />
      <div className="absolute left-[201.59px] -top-[168px] w-[1846.87px] h-[1284.01px] bg-white rounded-full opacity-5 pointer-events-none" />

      {/* Mobile: Centered testimonial card */}
      <div className="lg:hidden w-full flex justify-center">
        <div className="relative">
          <div className="bg-[#021514] w-full max-w-[440px] h-[592px] p-6 md:p-8 flex flex-col justify-between">

            {/* Top label */}
            <motion.p
              className="uppercase tracking-[0.1em] text-[#858BE3] text-[14px]"
              initial={{ y: 8, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              TESTIMONIAL
            </motion.p>

            {/* Quote area */}
            <div className="flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentIndex}
                  className="text-[#E5F9E0] font-normal tracking-[-0.25px]"
                  style={{ fontSize: 'clamp(28px, 4.5vw, 45px)', lineHeight: '52px' }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  {currentTestimonial.quote}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Footer: author + arrows */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex flex-col">
                <p className="text-[#A2F7B4] font-semibold text-[16px]">{currentTestimonial.author}</p>
                <p className="text-[#8CA1A0] text-[14px]">{currentTestimonial.title}</p>
              </div>

              <div className="flex items-center gap-4">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-full bg-[#E5F9E0] flex items-center justify-center"
                >
                  <img src={arrowleft.src} alt="prev" className="w-4 h-4 transform" />
                </motion.button>

                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-full bg-[#E5F9E0] flex items-center justify-center"
                >
                  <img src={arrowright.src} alt="next" className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Desktop: Wide layout */}
      <div className="hidden lg:block w-full max-w-[1440px] mx-auto px-6">
        {/* Top label */}
        <motion.p
          className="uppercase tracking-[0.1em] text-[#858BE3] text-[14px] mb-12"
          initial={{ y: 8, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          TESTIMONIAL
        </motion.p>

        {/* Main content row */}
        <div className="flex items-center justify-between gap-8">
          {/* Quote */}
          <div className="flex-1 max-w-[901px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentIndex}
                className="text-[#E5F9E0] font-normal tracking-[-0.25px] text-[57px] leading-[64px]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.45 }}
              >
                {currentTestimonial.quote}
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Author and arrows */}
          <div className="flex flex-col items-end gap-4">
            {/* Quote mark */}
            <div className="text-[#2F9C96] text-[153px] leading-[172px] font-normal">
              "
            </div>

            {/* Author */}
            <div className="flex flex-col items-end">
              <p className="text-[#A2F7B4] font-semibold text-[16px]">{currentTestimonial.author}</p>
              <p className="text-[#8CA1A0] text-[14px]">{currentTestimonial.title}</p>
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-12">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous testimonial"
                className="w-14 h-14 rounded-full bg-[#E5F9E0] flex items-center justify-center"
              >
                <img src={arrowleft.src} alt="prev" className="w-6 h-6 transform" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next testimonial"
                className="w-14 h-14 rounded-full bg-[#E5F9E0] flex items-center justify-center"
              >
                <img src={arrowright.src} alt="next" className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}