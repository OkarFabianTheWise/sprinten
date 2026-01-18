"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import arrowleft from "../icons/arrowleft.png";
import arrowright from "../icons/arrowright.png";
import { testimonials } from "../data/testimonials";
import Image from 'next/image';

const WORD_LIMIT = 17;

const countWords = (text: string): number => {
  return text.trim().split(/\s+/).length;
};

const truncateQuote = (text: string): string => {
  const words = text.trim().split(/\s+/);
  if (words.length > WORD_LIMIT) {
    return words.slice(0, WORD_LIMIT).join(" ") + "...";
  }
  return text;
};

const shouldShowViewMore = (text: string): boolean => {
  return countWords(text) > WORD_LIMIT;
};

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const currentTestimonial = testimonials[currentIndex];
  const isExpanded = expandedIndex === currentIndex;
  const hasMoreText = shouldShowViewMore(currentTestimonial.quote);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setExpandedIndex(null);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setExpandedIndex(null);
  };

  const toggleExpanded = () => {
    setExpandedIndex(isExpanded ? null : currentIndex);
  };
  
  return (
    <section className="w-full bg-[#021514] relative py-10 md:py-0" style={{ minHeight: '598px', height: 'auto', paddingBottom: '46px' }}>
      
      {/* Label */}
      <div
        className="uppercase tracking-[0.15em] text-[#8B9FFF] text-[12px] px-6 md:px-0 md:absolute"
        style={{ 
          top: 'clamp(40px, 10vw, 135px)',
          left: 'clamp(24px, 7vw, 106px)'
        }}
      >
        TESTIMONIAL
      </div>

      {/* Centered div */}
      <div 
        className="px-6 md:px-0 md:absolute flex flex-col md:flex-row items-start gap-8 md:gap-0"
        style={{ 
          marginTop: '44px',
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
          <div className="flex-1 md:pr-8 lg:pr-16 w-full pr-6 md:pr-0">
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
                {isExpanded ? currentTestimonial.quote : truncateQuote(currentTestimonial.quote)}
              </motion.blockquote>
            </AnimatePresence>

            {/* View More Button */}
            {hasMoreText && (
              <motion.button
                onClick={toggleExpanded}
                className="text-[#2F9C96] text-[14px] md:text-[16px] font-medium mt-3 md:mt-4 hover:opacity-80 transition-opacity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {isExpanded ? "View Less" : "View More"}
              </motion.button>
            )}

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${currentIndex}`}
                className="mt-4 md:mt-6 lg:mt-8"
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
          <div className="absolute bottom-8 md:bottom-auto right-6 md:right-auto md:static flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-[20px] w-auto md:w-auto justify-end md:justify-start">
            
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