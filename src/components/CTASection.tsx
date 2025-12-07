"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section 
      id="contact"
      className="relative flex items-center justify-center w-full"
      style={{
        height: '510px',
        backgroundColor: '#021514'
      }}
    >
      {/* Inner green container - centered */}
      <div 
        className="flex flex-col items-center justify-center text-center"
        style={{
          width: '100%',
          maxWidth: '1350px',
          height: '356px',
          backgroundColor: '#A2F7B4',
          borderRadius: '16px',
          padding: '60px 80px',
        }}
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
        >
          Ready to Ship Faster?
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          className="font-poly-sans font-normal"
          style={{
            fontSize: '18px',
            lineHeight: '28px',
            color: '#034A3D',
            maxWidth: '700px',
            marginBottom: '32px'
          }}
        >
          Let's turn your idea, prototype, or draft UI into a real product, designed, built, and ready for users.
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-4">

          {/* BOOK A CALL */}
          <a 
            href="https://cal.com/sprinten/introcall" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button 
              className="transition-all hover:opacity-90 font-poly-sans font-normal"
              style={{
                backgroundColor: '#2E8B7D',
                color: '#FFFFFF',
                padding: '14px 32px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Book a call
            </button>
          </a>

          {/* START A SPRINT */}
          <a 
            href="https://nifty-possum-71c.notion.site/6650f5b8165e431a9926bec2eaf3bed7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button 
              className="transition-all hover:bg-white/10 font-poly-sans font-normal"
              style={{
                backgroundColor: 'transparent',
                color: '#2E8B7D',
                padding: '14px 32px',
                borderRadius: '8px',
                border: '2px solid #2E8B7D',
                cursor: 'pointer'
              }}
            >
              Start a sprint
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}
