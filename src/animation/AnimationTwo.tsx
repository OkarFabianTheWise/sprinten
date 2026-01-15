"use client";

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
  const cardControls = useAnimation();

  useEffect(() => {
    let mounted = true;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const safeStart = async (
      controls: ReturnType<typeof useAnimation>,
      props: TargetAndTransition
    ) => {
      if (!mounted) return;
      await controls.start(props);
    };

    const run = async () => {
      /* ---------------- RESET ---------------- */
      cardControls.set({ backgroundColor: "#FFFFFF", opacity: 1 });
      laptopControls.set({ opacity: 0, scale: 1.2 });
      phoneDoubleControls.set({ opacity: 0, x: 0, y: -310, scale: 1.8, rotate: 50 });
      textControls.set({ opacity: 0, fontSize: "292.13px" });

      /* ---------------- STAGE 1 — LAPTOP ---------------- */
      await safeStart(laptopControls, {
        opacity: 1,
        scale: 1.2,
        transition: { duration: 0.8, ease: "easeOut" },
      });

      await wait(1000);

      await safeStart(laptopControls, {
        scale: 1,
        transition: { duration: 1, ease: "easeOut" },
      });

      /* ---------------- STAGE 2 — CROSSFADE LAPTOP → PHONE ---------------- */
      phoneDoubleControls.start({
        opacity: 1,
        x: -50,
        scale: 1.5,
        rotate: 20,
        transition: { duration: 0.6, ease: "easeOut" },
      });

      await wait(1000);

      laptopControls.start({
        opacity: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      });

      /* ---------------- STAGE 3 — PHONE RESOLVE ---------------- */
      await safeStart(phoneDoubleControls, {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { duration: 1, ease: "easeOut" },
      });

      await wait(1500);

      /* ---------------- STAGE 4 — CROSSFADE PHONE → TEXT ---------------- */
      cardControls.start({
        backgroundColor: "#E5F9E0",
        transition: { duration: 0.4, ease: "easeOut" },
      });

      textControls.start({
        opacity: 1,
        fontSize: "292.13px",
        transition: { duration: 0 },
      });

      phoneDoubleControls.start({
        opacity: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      });

      /* ---------------- STAGE 5 — TEXT RESOLUTION ---------------- */
      await wait(1000);

      await safeStart(textControls, {
        fontSize: "83.72px",
        transition: { duration: 1, ease: "easeOut" },
      });

      /* ---------------- FINAL — RESET BACKGROUND (NO VOID) ---------------- */
      await safeStart(cardControls, {
        backgroundColor: "#FFFFFF",
        transition: { duration: 0.4, ease: "easeOut" },
      });

      if (mounted && onFinished) onFinished();
    };

    run();
    return () => {
      mounted = false;
    };
  }, [laptopControls, phoneDoubleControls, textControls, cardControls, onFinished]);

  return (
    <motion.div
      animate={cardControls}
      className="w-full h-full flex items-center justify-center"
      initial={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">

        {/* LAPTOP */}
        <motion.div className="absolute" animate={laptopControls}>
          <Image
            src={laptop}
            alt="laptop"
            width={1360}
            height={560}
            priority
          />
        </motion.div>

        {/* PHONE */}
        <motion.div className="absolute" animate={phoneDoubleControls}>
          <Image
            src={phoneDouble}
            alt="double phone"
            width={1360}
            height={560}
            priority
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="absolute font-poly-sans"
          animate={textControls}
          style={{
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