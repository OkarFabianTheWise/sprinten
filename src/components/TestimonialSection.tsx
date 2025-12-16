"use client";

import { motion } from "framer-motion";
import arrowleft from "../icons/arrowleft.png";
import arrowright from "../icons/arrowright.png";

export function TestimonialSection() {
  return (
    <section 
      className="relative"
      style={{
        width: '1440px',
        height: '598px',
        backgroundColor: '#021514'
      }}
    >
      {/* Text Section Container */}
      <div 
        style={{
          position: 'absolute',
          top: '195px',
          left: '106px',
          width: '1229px',
          height: '268px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '0'
        }}
      >
        {/* Left Side: Quote Text and Author */}
        <div>
          {/* Main Quote Text */}
          <motion.blockquote 
            style={{
              width: '901px',
              height: '192px',
              fontSize: '57px',
              lineHeight: '64px',
              letterSpacing: '-0.25px',
              color: '#FFFFFF',
              fontWeight: 400,
              margin: 0,
              padding: 0
            }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Sprinten delivered our MVP in record time. Clean UX, clean code, zero back-and-forth drama
          </motion.blockquote>
          
          {/* Author Info */}
          <motion.div 
            style={{ marginTop: '80px' }}
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
        </div>

        {/* Right Side: Quote Mark and Arrows */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '20px', marginLeft: '20px' }}>
          {/* Quote Mark */}
          <motion.div 
            style={{ 
              width: '104.03px',
              height: '173px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              fontSize: '153.41px',
              lineHeight: '172.25px',
              letterSpacing: '-0.67px',
              color: '#2F9C96',
              fontWeight: 400,
              textAlign: 'right'
            }}
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            "
          </motion.div>

          {/* Navigation Arrows */}
          <div 
            className="flex"
            style={{
              width: '160px',
              height: '56px',
              gap: '48px'
            }}
          >
            <motion.button 
              className="hover:opacity-70 transition-opacity"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            >
              <img src={arrowleft.src} alt="Previous" width={56} height={56} />
            </motion.button>
            <motion.button 
              className="hover:opacity-70 transition-opacity"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            >
              <img src={arrowright.src} alt="Next" width={52} height={52} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Testimonial Label - positioned separately */}
      <motion.p 
        className="uppercase tracking-widest"
        style={{
          position: 'absolute',
          top: '80px',
          left: '106px',
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
    </section>
  );
}
