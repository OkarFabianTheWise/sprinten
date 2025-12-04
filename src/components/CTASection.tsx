"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section 
      className="relative flex items-center justify-center"
      style={{
        width: '1440px',
        height: '510px',
        backgroundColor: '#021514'
      }}
    >
      {/* Inner green container */}
      <motion.div 
        className="flex flex-col items-center justify-center text-center"
        style={{
          width: '1350px',
          height: '356px',
          backgroundColor: '#A2F7B4',
          borderRadius: '16px',
          padding: '60px 80px'
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Heading */}
        <motion.h2 
          style={{
            fontSize: '56px',
            lineHeight: '64px',
            fontWeight: 400,
            color: '#021514',
            marginBottom: '16px',
            letterSpacing: '-0.5px'
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Ready to Ship Faster?
        </motion.h2>
        {/* Subheading */}
        <motion.p 
          style={{
            fontSize: '18px',
            lineHeight: '28px',
            color: '#034A3D',
            maxWidth: '700px',
            marginBottom: '32px'
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Let's turn your idea, prototype, or draft UI into a real product , designed, built, and ready for users.
        </motion.p>
        {/* Buttons */}
        <motion.div 
          className="flex gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.button 
            className="transition-all hover:opacity-90"
            style={{
              backgroundColor: '#2E8B7D',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a call
          </motion.button>
          <motion.button 
            className="transition-all hover:bg-white/10"
            style={{
              backgroundColor: 'transparent',
              color: '#2E8B7D',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              border: '2px solid #2E8B7D',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a sprint
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
