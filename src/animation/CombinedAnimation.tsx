import React, { useState } from "react";
import AnimationTwo from "./AnimationTwo";
import AnimationOne from "./AnimationOne";

const CombinedAnimation: React.FC = () => {
  const [current, setCurrent] = useState<"one" | "two">("one");

  const handleFinished = () => {
    // Switch to the other animation
    setCurrent((prev) => (prev === "one" ? "two" : "one"));
  };

  return (
    <div className="relative">
      {current === "one" ? (
        <AnimationOne key="anim1" onFinished={handleFinished} />
      ) : (
        <AnimationTwo key="anim2" onFinished={handleFinished} />
      )}
    </div>
  );
};

export default CombinedAnimation;