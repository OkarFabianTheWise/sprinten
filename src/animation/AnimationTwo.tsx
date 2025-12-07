import React, { useEffect } from "react";
import { motion, TargetAndTransition, useAnimation } from "framer-motion";
import Image from "next/image";
import laptop from "./laptop.png";
import phoneDouble from "./phoneDouble.png";

interface AnimationTwoProps {
  onFinished?: () => void;
}

const AnimationTwo: React.FC<AnimationTwoProps> = ({ onFinished }) => {
  const laptopControls = useAnimation();
  const phoneDoubleControls = useAnimation();
  const textControls = useAnimation();
  const cardControls = useAnimation(); // NEW

  useEffect(() => {
    let mounted = true;

    const safeStart = async (controls: ReturnType<typeof useAnimation>, props: TargetAndTransition) => {
      if (!mounted) return;
      await controls.start(props);
    };

    const run = async () => {
      // RESET EVERYTHING
      cardControls.set({ backgroundColor: "#FFFFFF" }); // NEW RESET
      laptopControls.set({ opacity: 0, scale: 1 });
      phoneDoubleControls.set({ opacity: 0, x: -450, y: -160, scale: 2.1, rotate: 50 });
      textControls.set({ opacity: 0, fontSize: "292.13px" });

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
      await safeStart(phoneDoubleControls, { opacity: 1, x: -50, scale: 1.2 });
      await new Promise((r) => setTimeout(r, 500));

      await safeStart(phoneDoubleControls, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { duration: 1, ease: "easeOut" },
      });
      await new Promise((r) => setTimeout(r, 300));

      await safeStart(phoneDoubleControls, {
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      });

      // -------------------------
      // STAGE 3 — TEXT (Sprinten)
      // -------------------------

      // CHANGE BACKGROUND HERE
      await safeStart(cardControls, {
        backgroundColor: "#E5F9E0",
        transition: { duration: 0.4, ease: "easeOut" }
      });

      await safeStart(textControls, {
        opacity: 1,
        fontSize: "292.13px",
        transition: { duration: 0.2, ease: "easeOut" },
      });
      await new Promise((r) => setTimeout(r, 1000));

      await safeStart(textControls, {
        fontSize: "83.72px",
        transition: { duration: 1.5, ease: "easeOut" },
      });
      await new Promise((r) => setTimeout(r, 1000));

      // Hold final state
      await new Promise((r) => setTimeout(r, 3500));

      // OPTIONAL: RETURN BACKGROUND TO WHITE
      await safeStart(cardControls, {
        backgroundColor: "#FFFFFF",
        transition: { duration: 0.4, ease: "easeOut" }
      });

      if (onFinished) onFinished();
    };

    run();

    return () => {
      mounted = false;
    };
  }, [laptopControls, phoneDoubleControls, textControls, cardControls, onFinished]);

  return (
    <motion.div
      animate={{
        ...cardControls.mount(),   // 👈 merge card background animation
        opacity: 1,              // 👈 fade in on mount
      }}
      className="hero-logo-card relative flex h-[560px] w-[1360px] rounded-[16px] items-center justify-center text-[#1F8E87] shadow-inner overflow-hidden"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">

        {/* LAPTOP */}
        <motion.div className="absolute" animate={laptopControls}>
          <Image src={laptop} alt="laptop" width={1360} height={560} className="object-cover" />
        </motion.div>

        {/* PHONE */}
        <motion.div className="absolute" animate={phoneDoubleControls}>
          <Image src={phoneDouble} width={1360} height={560} alt="double phone" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="absolute font-poly-sans"
          animate={textControls}
          style={{
            position: "absolute",
            color: "#2F9C96",
            fontWeight: 400,
            fontSize: "292.13px",
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
