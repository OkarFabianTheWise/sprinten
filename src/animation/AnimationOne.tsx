// src/animation/AnimatedVideo.tsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FloatingIcon from "./FloatingIcon";

import menu from "./menu.png";
import credit from "./credit.png";
import phone from "./phone.png";
import referral from "./referral.png";
import privatekey from "./privatekey.png";
import recovery from "./recovery.png";

const AnimationOne: React.FC = () => {
  const phoneControls = useAnimation();
  const recoveryControls = useAnimation();
  const creditControls = useAnimation();
  const referralControls = useAnimation();
  const menuControls = useAnimation();
  const privateKeyControls = useAnimation();

  useEffect(() => {
    let mounted = true;
    creditControls.set({ y: -120, opacity: 0 });
    referralControls.set({ y: 120, opacity: 0 });
    menuControls.set({ y: 120, opacity: 0 });
    recoveryControls.set({ y: -80, opacity: 0 });
    privateKeyControls.set({ x: 200, opacity: 0 });

    async function loop() {
      while (mounted) {
        // STAGE 1 — phone slants to the left (NO OTHER ITEMS)
        await phoneControls.start({
          opacity: 1,
          width: 413.3928920035956,
          height: 387.5558248092788,
          rotate: -15,
          x: -55,
          y: 27,
          transition: { duration: 1, ease: "easeOut" },
        });
        await new Promise((r) => setTimeout(r, 700));
        if (!mounted) break;

        // STAGE 2 — straighten + OTHER ITEMS SLIDE IN (except privatekey)
        phoneControls.start({
          rotate: 0,
          x: -60.4,
          y: 38,
          width: 482.13,
          height: 452,
          transition: { duration: 1, ease: "easeOut" },
        });

        // Slide in from top/bottom simultaneously
        creditControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1.0, ease: "easeOut" },
        });

        referralControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1.0, ease: "easeOut" },
        });

        menuControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1.0, ease: "easeOut" },
        });

        recoveryControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1.0, ease: "easeOut" },
        });

        await new Promise((r) => setTimeout(r, 1000));
        if (!mounted) break;

        // STAGE 3 — phone slides right + privatekey slides in from right
        phoneControls.start({
          rotate: 0,
          width: 482.1333312988281,
          height: 452,
          opacity: 1,
          x: -18,
          y: 93,
          transition: { duration: 1, ease: "easeOut" },
        });

        privateKeyControls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeOut" },
        });

        await new Promise((r) => setTimeout(r, 2500));
        if (!mounted) break;

        // RESET ALL
        creditControls.start({ y: -120, opacity: 0, transition: { duration: 0.6 } });
        referralControls.start({ y: 120, opacity: 0, transition: { duration: 0.6 } });
        menuControls.start({ y: 120, opacity: 0, transition: { duration: 0.6 } });
        recoveryControls.start({ y: -80, opacity: 0, transition: { duration: 0.6 } });
        privateKeyControls.start({ x: 200, opacity: 0, transition: { duration: 0.6 } });

        await new Promise((r) => setTimeout(r, 800));
      }
    }

    loop();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <motion.div
      className="hero-logo-card relative flex h-[560px] w-[1360px] rounded-[16px] items-center justify-center bg-white text-[#1F8E87] shadow-inner overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Phone: centered */}
        <div className="absolute w-[413px] h-[512px] left-[473px] top-[31px] rounded-[16px] bg-[#E5F9E0] overflow-hidden">
          <FloatingIcon 
            src={phone} 
            alt="phone" 
            className="w-[413px] h-[513px] relative left-[50px]" 
            animate={phoneControls} 
          />
        </div>

        {/* Recovery + Private Key */}
        <div className="absolute top-[31px] left-[907px] bg-[#E5F9E0] w-[413px] h-[189px] rounded-[16px]">
          <div className="absolute top-[14px] left-[34.5px] w-[344px] h-[162px] gap-[16px]">
            <FloatingIcon 
              src={recovery} 
              className="w-[344px] h-[77px] rounded-[16px] border-[8px] gap-[16px]" 
              animate={recoveryControls} 
            />
            <FloatingIcon 
              src={privatekey} 
              className="w-[344px] h-[77px] rounded-[16px] border-[8px] gap-[16px]" 
              animate={privateKeyControls} 
            />
          </div>
        </div>

        {/* Credit */}
        <div className="absolute left-[40px] top-[31px]">
          <FloatingIcon src={credit} className="w-[413px] h-[331px]" animate={creditControls} />
        </div>

        {/* Referral */}
        <div className="absolute top-[385px] left-[40px] w-[500px] h-[158px]">
          <FloatingIcon src={referral} className="w-[413px] h-[140px]" animate={referralControls} />
        </div>

        {/* Menu */}
        <div className="absolute left-[907px] top-[232px]">
          <FloatingIcon src={menu} className="w-[413px] h-[311px]" animate={menuControls} />
        </div>
      </div>
    </motion.div>
  );
};

export default AnimationOne;
