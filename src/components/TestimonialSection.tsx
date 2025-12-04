"use client";

import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section 
      className="relative flex items-center justify-center"
      style={{
        width: '1440px',
        height: '598px',
        backgroundColor: '#021514'
      }}
    >
      <div className="max-w-[1200px] px-12 w-full">
        {/* Testimonial Label */}
        <motion.p 
          className="uppercase tracking-widest mb-8"
          style={{
            color: '#8B9FFF',
            fontSize: '12px',
            letterSpacing: '0.15em',
            fontWeight: 500
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          TESTIMONIAL
        </motion.p>
        {/* Main Quote */}
        <div className="flex items-start justify-between gap-8">
          <motion.blockquote 
            className="max-w-[901px]"
            style={{
              fontSize: '57px',
              lineHeight: '64px',
              letterSpacing: '-0.25px',
              color: '#FFFFFF',
              fontWeight: 400
            }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Sprinten delivered our MVP in record time. Clean UX, clean code, zero back-and-forth drama
          </motion.blockquote>
          {/* Quote Icon */}
          <motion.svg 
            width="60" 
            height="60" 
            viewBox="0 0 60 60" 
            fill="none"
            style={{ flexShrink: 0, marginTop: '8px' }}
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <path 
              d="M15 25L15 15L25 15M45 25L45 15L35 15" 
              stroke="#4FFFB0" 
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.svg>
        </div>
        {/* Author Info */}
        <motion.div 
          className="mt-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p 
            style={{
              fontSize: '18px',
              color: '#FFFFFF',
              fontWeight: 500,
              marginBottom: '4px'
            }}
          >
            Edem vee
          </p>
          <p 
            style={{
              fontSize: '14px',
              color: '#8B9FFF',
              letterSpacing: '0.05em'
            }}
          >
            Co-founder- Paykin
          </p>
        </motion.div>
        {/* Navigation Arrows */}
        <motion.div 
          className="absolute bottom-12 right-12 flex gap-8"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.button 
            className="hover:opacity-70 transition-opacity"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path 
                d="M25 10L15 20L25 30" 
                stroke="#FFFFFF" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          <motion.button 
            className="hover:opacity-70 transition-opacity"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path 
                d="M15 10L25 20L15 30" 
                stroke="#FFFFFF" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
