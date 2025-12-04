import React, { useEffect, useState } from "react";
import AnimatedVideo from "./AnimatedVideo";
import AnimationTwo from "./AnimationTwo";

const CombinedAnimation: React.FC = () => {
  const [showAnimationTwo, setShowAnimationTwo] = useState(false);

  useEffect(() => {
    // AnimatedVideo plays first (roughly 4 seconds for one full cycle)
    // Then show AnimationTwo
    const timer = setInterval(() => {
      setShowAnimationTwo((prev) => !prev);
    }, 4000); // Adjust timing based on AnimatedVideo's cycle time

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {!showAnimationTwo ? <AnimatedVideo /> : <AnimationTwo />}
    </div>
  );
};

export default CombinedAnimation;
