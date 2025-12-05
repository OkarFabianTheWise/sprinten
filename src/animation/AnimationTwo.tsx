import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import laptop from "./laptop.png";
import phoneDouble from "./phoneDouble.png";

const AnimationTwo: React.FC = () => {
    const laptopControls = useAnimation();
    const phoneDoubleControls = useAnimation();
    const textControls = useAnimation();

    useEffect(() => {
        let mounted = true;

        async function animate() {
            while (mounted) {
                // Reset animations
                laptopControls.set({ opacity: 0, scale: 1 });

                phoneDoubleControls.set({
                    opacity: 0,
                    x: -450,
                    y: -160,
                    scale: 2.1,
                    rotate: 50
                });

                textControls.set({
                    opacity: 0,
                    fontSize: "292.13px"
                });

                // -------------------------
                // STAGE 1 — LAPTOP
                // -------------------------
                await laptopControls.start({
                    opacity: 1,
                    scale: 1.2,
                    transition: { duration: 0 }
                });

                await new Promise((r) => setTimeout(r, 1000));

                await laptopControls.start({
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 1, ease: "easeOut" }
                });

                // Start laptop fade-out without waiting
                laptopControls.start({
                    opacity: 0,
                    transition: { duration: 0.6, ease: "easeOut" }
                });

                await new Promise((r) => setTimeout(r, 350));
                if (!mounted) break;

                // -------------------------
                // STAGE 2 — PHONE ENTRY
                // -------------------------

                // Phone enters zoomed + rotated like the Sprinten text
                await phoneDoubleControls.start({
                    opacity: 1,
                    x: -50,
                    scale: 1.2,
                    // rotate: -10,
                    // transition: { duration: 0.45, ease: "easeOut" }
                });

                

                // Phone eases into its final resting position
                await phoneDoubleControls.start({
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    transition: { duration: 1, ease: "easeOut" }
                });

                // Subtle “settle” effect
                // await phoneDoubleControls.start({
                //     scale: 1.03,
                //     transition: { duration: 0.25, ease: "easeOut" }
                // });
                await new Promise((r) => setTimeout(r, 300));
                if (!mounted) break;

                await phoneDoubleControls.start({
                    opacity: 0,
                    scale: 1,
                    transition: { duration: 0.3, ease: "easeOut" }
                });

                if (!mounted) break;

                // -------------------------
                // STAGE 3 — TEXT
                // -------------------------
                await textControls.start({
                    opacity: 1,
                    fontSize: "292.13px",
                    transition: { duration: 0.2, ease: "easeOut" }
                });

                await new Promise((r) => setTimeout(r, 1000));

                await textControls.start({
                    fontSize: "83.72px",
                    transition: { duration: 1.5, ease: "easeOut" }
                });

                await new Promise((r) => setTimeout(r, 1000));
            }
        }

        animate();
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
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">

                {/* LAPTOP */}
                <motion.div className="absolute" animate={laptopControls}>
                    <Image
                        src={laptop}
                        alt="laptop"
                        width={1360}
                        height={560}
                        className="object-cover"
                    />
                </motion.div>

                {/* PHONE (FULLY PATCHED BEHAVIOR) */}
                <motion.div className="absolute" animate={phoneDoubleControls}>
                    <Image
                        src={phoneDouble}
                        width={1360}
                        height={560}
                        alt="double phone"
                    />
                </motion.div>

                {/* TEXT */}
                <motion.div
                    className="absolute font-normal"
                    animate={textControls}
                    style={{
                        position: "absolute",
                        color: "#2F9C96",
                        fontFamily: "PolySans Trial",
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
