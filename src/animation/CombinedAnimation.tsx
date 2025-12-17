// src/animation/CombinedAnimation.tsx
import React, { useState, useEffect, useRef } from "react";
import AnimationTwo from "./AnimationTwo";
import AnimationOne from "./AnimationOne";

const CombinedAnimation: React.FC = () => {
  const [current, setCurrent] = useState<"one" | "two">("one");
  const [scale, setScale] = useState(1);
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
        const newScale = Math.min(scaleX, scaleY, 1);
        
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    const timer = setTimeout(updateScale, 100);
    
    return () => {
      window.removeEventListener('resize', updateScale);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="hero-logo-card relative w-full rounded-[16px] bg-white text-[#1F8E87] shadow-inner overflow-hidden"
      style={{ paddingBottom: '41.18%' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative"
          style={{
            width: '1360px',
            height: '560px',
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
          }}
        >
          {current === "one" ? (
            <AnimationOne key="anim1" onFinished={handleFinished} />
          ) : (
            <AnimationTwo key="anim2" onFinished={handleFinished} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CombinedAnimation;