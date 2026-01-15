import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FloatingIcon from "./FloatingIcon";
import PrivateKeyCard from "./PrivateKeyCard";
import RecoveryPhraseCard from "./RecoveryPhraseCard";

import menu from "./menu.png";
import credit from "./credit.png";
import phone from "./phone.png";
import referral from "./referral.png";
import { TargetAndTransition } from "framer-motion";

interface AnimationOneProps {
  onFinished?: () => void;
}

const AnimationOne: React.FC<AnimationOneProps> = ({ onFinished }) => {
  const phoneControls = useAnimation(); // line 18
  const recoveryControls = useAnimation();
  const creditControls = useAnimation();
  const referralControls = useAnimation();
  const menuControls = useAnimation();
  const privateKeyControls = useAnimation();

  useEffect(() => {
    let mounted = true;

    const safeStart = async (
      controls: ReturnType<typeof useAnimation>,
      props: TargetAndTransition
    ) => {
      if (!mounted) return;
      await controls.start(props);
    };

    const run = async () => {
      // INITIAL RESET
      phoneControls.set({ opacity: 0 });
      creditControls.set({ y: -120, opacity: 0 });
      referralControls.set({ y: 120, opacity: 0 });
      menuControls.set({ y: 120, opacity: 0 });
      recoveryControls.set({ y: 0, opacity: 1 });
      privateKeyControls.set({ x: 200, opacity: 0 });

      // STAGE 1 — PHONE SLANTS LEFT
      await safeStart(phoneControls, {
        opacity: 1,
        width: 413.39,
        height: 387.55,
        rotate: -15,
        x: -55,
        y: 27,
        transition: { duration: 1, ease: "easeOut" },
      });

      await new Promise((r) => setTimeout(r, 700));

      // STAGE 2 — PHONE STRAIGHTENS + OTHER ITEMS SLIDE IN
      phoneControls.start({
        rotate: 0,
        x: -60.4,
        y: 38,
        width: 482.13,
        height: 452,
        transition: { duration: 1, ease: "easeOut" },
      });

      creditControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });
      referralControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });
      menuControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });

      await new Promise((r) => setTimeout(r, 1000));

      // STAGE 3 — PHONE SLIDES RIGHT + PRIVATE KEY IN
      safeStart(phoneControls, {
        rotate: 0,
        width: 482.13,
        height: 452,
        opacity: 1,
        x: -18,
        y: 93,
        transition: { duration: 1, ease: "easeOut" },
      });

      safeStart(privateKeyControls, {
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });

      await new Promise((r) => setTimeout(r, 1500));

      // ⭐ FINAL — FADE EVERYTHING OUT SMOOTHLY + TRIGGER NEXT ANIMATION
      const fade = { opacity: 0, transition: { duration: 0.8 } };

      creditControls.start(fade);
      referralControls.start(fade);
      menuControls.start(fade);
      recoveryControls.start(fade);
      privateKeyControls.start(fade);
      phoneControls.start(fade);

      // Trigger next animation immediately for smooth cross-fade
      await new Promise((r) => setTimeout(r, 300)); // line 116
      if (onFinished) onFinished();
    };

    run();

    return () => {
      mounted = false;
    };
  }, [
    phoneControls,
    creditControls,
    referralControls,
    menuControls,
    recoveryControls,
    privateKeyControls,
    onFinished, // line 131
  ]);

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-[1360px] h-[560px] pointer-events-none">
        {/* PHONE */}
        <div className="absolute w-[413px] h-[512px] left-[473px] top-[31px] rounded-[16px] bg-[#E5F9E0] overflow-hidden">
          <FloatingIcon
            src={phone}
            alt="phone"
            className="w-[413px] h-[512px] relative left-[50px]"
            animate={phoneControls}
          />
        </div>

        {/* Recovery + PrivateKey */}
        <div className="absolute top-[31px] left-[907px] bg-[#E5F9E0] w-[413px] h-[189px] rounded-[16px] overflow-hidden">
          <motion.div
            className="absolute top-[14px] left-[34.5px]"
            animate={recoveryControls}
          >
            <RecoveryPhraseCard />
          </motion.div>
          <motion.div
            className="absolute top-[103px] left-[34.5px]"
            animate={privateKeyControls}
          >
            <PrivateKeyCard /> 
          </motion.div>
        </div>

        {/* Credit */}
        <div className="absolute left-[40px] top-[31px]">
          <FloatingIcon
            src={credit}
            className="w-[413px] h-[331px]"
            animate={creditControls}
          />
        </div>

        {/* Referral */}
        <div className="absolute top-[385px] left-[40px] w-[413px] h-[158px]">
          <FloatingIcon
            src={referral}
            className="w-[413px] h-[158px]"
            animate={referralControls}
          />
        </div>

        {/* Menu */}
        <div className="absolute left-[907px] top-[232px]">
          <FloatingIcon
            src={menu}
            className="w-[413px] h-[311px] rounded-[16px]"
            animate={menuControls}
          />
        </div>
      </div>
    </motion.div>
  );
}; // line 197

export default AnimationOne;