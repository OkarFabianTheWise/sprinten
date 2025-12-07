import React, { useEffect } from "react";
import { motion, useAnimation, TargetAndTransition } from "framer-motion";
import Image from "next/image";
import laptop from "./laptop.png";
import phoneDouble from "./phoneDouble.png";

interface AnimationTwoProps {
  onFinished?: () => void;
}

const AnimationTwo: React.FC<AnimationTwoProps> = ({ onFinished }) => {
  const laptopControls = useAnimation();
  const phoneControls = useAnimation();
  const textControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    let mounted = true;

    const safeStart = async (controls: ReturnType<typeof useAnimation>, props: TargetAndTransition) => {
      if (!mounted) return;
      await controls.start(props);
    };

    const run = async () => {
      // RESET
      laptopControls.set({ opacity: 0, scale: 1 });
      phoneControls.set({ opacity: 0, x: -450, y: -160, scale: 2.1, rotate: 50 });
      textControls.set({ opacity: 0, fontSize: "292.13px" });
      cardControls.set({ backgroundColor: "#FFFFFF" });

      // -------------------------
      // STAGE 1 — LAPTOP
      // -------------------------
      await safeStart(laptopControls, { opacity: 1, scale: 1.2, transition: { duration: 0 } });
      await new Promise((r) => setTimeout(r, 1000));

      await safeStart(laptopControls, { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } });
      if (!mounted) return;
      laptopControls.start({ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } });
      await new Promise((r) => setTimeout(r, 350));

      // -------------------------
      // STAGE 2 — PHONE ENTRY
      // -------------------------
      await safeStart(phoneControls, { opacity: 1, x: -50, scale: 1.2 });
      await new Promise((r) => setTimeout(r, 500));

      await safeStart(phoneControls, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
      await new Promise((r) => setTimeout(r, 300));

      await safeStart(phoneControls, {
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      });

      // -------------------------
      // STAGE 3 — TEXT
      // -------------------------
      await safeStart(cardControls, { backgroundColor: "#E5F9E0", transition: { duration: 0.4, ease: "easeOut" } });

      await safeStart(textControls, {
        opacity: 1,
        fontSize: "292.13px",
        transition: { duration: 0.2, ease: "easeOut" },
      });
      await new Promise((r) => setTimeout(r, 1000));

      await safeStart(textControls, { fontSize: "83.72px", transition: { duration: 1.5, ease: "easeOut" } });
      await new Promise((r) => setTimeout(r, 1000));

      // Hold final state
      await new Promise((r) => setTimeout(r, 1900));

      // OPTIONAL: RETURN BACKGROUND TO WHITE
      await safeStart(cardControls, { backgroundColor: "#FFFFFF", transition: { duration: 0.4, ease: "easeOut" } });

      if (onFinished) onFinished();
    };

    run();

    return () => {
      mounted = false;
    };
  }, [laptopControls, phoneControls, textControls, cardControls, onFinished]);

  return (
    <motion.div
      animate={cardControls}
      initial={{ opacity: 0, backgroundColor: "#FFFFFF" }}
      className="hero-logo-card relative flex h-[560px] w-[1360px] rounded-[16px] items-center justify-center text-[#1F8E87] shadow-inner overflow-hidden"
    >
      {/* All content masked by rounded container */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* LAPTOP */}
        <motion.div className="absolute" animate={laptopControls}>
          <Image src={laptop} alt="laptop" fill className="object-cover" />
        </motion.div>

        {/* PHONE - wrapped in overflow-hidden to preserve mask */}
        <div className="absolute inset-0 overflow-hidden rounded-[16px]">
          <motion.div animate={phoneControls}>
            <Image src={phoneDouble} fill className="object-cover" alt="double phone" />
          </motion.div>
        </div>

        {/* TEXT */}
        <motion.div
          className="absolute font-poly-sans"
          animate={textControls}
          style={{
            color: "#2F9C96",
            fontWeight: 400,
            letterSpacing: "-1.28px",
            lineHeight: "328px",
            whiteSpace: "nowrap",
          }}
        >
          Sprinten
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimationTwo;
