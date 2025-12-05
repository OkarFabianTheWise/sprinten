import React, { useEffect, useState } from "react";
import AnimationTwo from "./AnimationTwo";
import AnimationOne from "./AnimationOne";

const CombinedAnimation: React.FC = () => {
  const [showAnimationTwo, setShowAnimationTwo] = useState(false);

  useEffect(() => {
    // AnimationOne plays first (roughly 4 seconds for one full cycle)
    // Then show AnimationTwo
    const timer = setInterval(() => {
      setShowAnimationTwo((prev) => !prev);
    }, 4000); // Adjust timing based on AnimationOne's cycle time
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {!showAnimationTwo ? (
        <AnimationOne key="video" />
      ) : (
        <AnimationTwo key="two" />
      )}
    </div>
  );
};

export default CombinedAnimation;
