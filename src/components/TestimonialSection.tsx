"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import arrowleft from "../icons/arrowleft.png";
import arrowright from "../icons/arrowright.png";
import { testimonials } from "../data/testimonials";
import Image from 'next/image';

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
    <section className="w-full bg-[#021514] relative py-10 md:py-0" style={{ minHeight: '598px', height: 'auto' }}>
      
      {/* Label */}
      <motion.p
        className="uppercase tracking-[0.15em] text-[#8B9FFF] text-[12px] px-6 md:px-0 md:absolute"
        style={{ 
          top: 'clamp(40px, 10vw, 135px)',
          left: 'clamp(24px, 7vw, 106px)'
        }}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        TESTIMONIAL
      </motion.p>

      {/* Centered div */}
      <div 
        className="px-6 md:px-0 md:absolute flex flex-col md:flex-row items-start gap-8 md:gap-0"
        style={{ 
          top: 'clamp(80px, 15vw, 195px)',
          left: 'clamp(24px, 7vw, 106px)',
          width: 'calc(100% - 48px)',
          maxWidth: 'calc(95% - 106px)',
          paddingBottom: 'clamp(40px, 10vw, 0px)'
        }}
      >

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-start w-full gap-8 md:gap-0">
          
          {/* LEFT: Quote + Author */}
          <div className="flex-1 md:pr-8 lg:pr-16 w-full">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentIndex}
                className="text-white font-normal tracking-[-0.25px]"
                style={{
                  fontSize: "clamp(24px, 5vw, 57px)",
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
                className="mt-8 md:mt-12 lg:mt-[80px]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    width={23}
                    height={24}
                    className="rounded-full"
                  />
                  <p className="text-white text-[16px] md:text-[18px] font-medium">
                    {currentTestimonial.author}
                  </p>
                </div>
                <p className="text-[#8B9FFF] text-[12px] md:text-[14px] tracking-[0.05em]">
                  {currentTestimonial.title}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Quote mark + Arrows */}
          <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-[20px] w-full md:w-auto justify-end md:justify-start">
            
            {/* Quote Mark - Hidden on mobile */}
            <motion.div
              className="text-[#2F9C96] font-normal hidden md:block"
              style={{
                fontSize: "clamp(80px, 15vw, 153.41px)",
                lineHeight: "1.12",
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
            <div className="flex gap-6 md:gap-8 lg:gap-[48px]">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              >
                <Image 
                  src={arrowleft} 
                  width={56} 
                  height={56} 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              >
                <Image 
                  src={arrowright} 
                  width={52} 
                  height={52} 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}