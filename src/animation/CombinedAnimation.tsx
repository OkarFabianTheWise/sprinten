// src/animation/CombinedAnimation.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimationTwo from "./AnimationTwo";
import AnimationOne from "./AnimationOne";

const CombinedAnimation: React.FC = () => {
  const [current, setCurrent] = useState<"one" | "two">("one");
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const [isMobile, setIsMobile] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFinished = () => {
    setCurrent((prev) => (prev === "one" ? "two" : "one"));
  };

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = containerRef.current.offsetHeight;
        
        const scaleX = containerWidth / 1360;
        const scaleY = containerHeight / 560;
        
        setScale({ x: scaleX, y: scaleY });
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateScale();
    checkMobile();
    window.addEventListener('resize', updateScale);
    window.addEventListener('resize', checkMobile);
    const timer = setTimeout(updateScale, 100);
    
    return () => {
      window.removeEventListener('resize', updateScale);
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="hero-logo-card relative w-full rounded-[16px] bg-white text-[#1F8E87] shadow-inner overflow-hidden"
      style={{ paddingBottom: isMobile ? '100%' : '41.18%' }}
    >
      {isMobile ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            style={{
              color: "#2F9C96",
              fontWeight: 400,
              fontSize: "clamp(48px, 12vw, 80px)",
              letterSpacing: "-1.28px",
              lineHeight: "1.2",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-poly-sans, sans-serif)",
            }}
          >
            Sprinten
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="relative"
            style={{
              width: '1360px',
              height: '560px',
              transform: `scaleX(${scale.x}) scaleY(${scale.y})`,
              transformOrigin: 'center center',
            }}
          >
            <AnimatePresence>
              {current === "one" && (
                <motion.div
                  key="one"
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <AnimationOne onFinished={handleFinished} />
                </motion.div>
              )}

              {current === "two" && (
                <motion.div
                  key="two"
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <AnimationTwo onFinished={handleFinished} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default CombinedAnimation;