import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import laptop from "./laptop.png";
import phoneSingle from "./phoneSingle.png";
import phoneDouble from "./phoneDouble.png";

const AnimationTwo: React.FC = () => {
    const laptopControls = useAnimation();
    const phoneSingleControls = useAnimation();
    const phoneDoubleControls = useAnimation();
    const textControls = useAnimation();

    useEffect(() => {
        let mounted = true;

        async function animate() {
            while (mounted) {
                // --- RESET EVERYTHING at loop start ---
                laptopControls.set({ opacity: 0, scale: 1 });
                phoneSingleControls.set({ opacity: 0 });
                phoneDoubleControls.set({ opacity: 0, x: 0, rotate: 0 });
                textControls.set({ opacity: 0, x: "124.44px", y: "116px", fontSize: "292.13px" });

                // ---------------------------------
                // STAGE 1: Laptop zoomed-in start
                // ---------------------------------
                await laptopControls.start({
                    opacity: 1,
                    scale: 1.2,
                    transition: { duration: 0 }
                });

                // Hold zoom: cinematic "hold frame"
                await new Promise((r) => setTimeout(r, 1000));

                // ---------------------------------
                // STAGE 2: Laptop smooth ease-out
                // ---------------------------------
                await laptopControls.start({
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 1, ease: "easeOut" },
                });

                // ---------------------------------
                // Laptop fade-out (fast cut, 0.3s)
                // ---------------------------------
                await laptopControls.start({
                    opacity: 0,
                    transition: { duration: 0.3, ease: "easeOut" }
                });

                // ---------------------------------
                // STAGE 3: Single phone fade-in
                // ---------------------------------
                await phoneSingleControls.start({
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    rotate: 0,
                    transition: { duration: 0.2, ease: "easeOut" },
                });

                // Hold single phone
                await new Promise((r) => setTimeout(r, 900));

                // ---------------------------------
                // STAGE 4: CROSSFADE to double phone
                // ---------------------------------

                // Start double phone fade BEFORE single fades out
                await phoneDoubleControls.start({
                    opacity: 1,
                    x: 40,
                    rotate: -5,
                    scale: 1,
                    transition: { duration: 2, ease: "easeOut" }
                });

                // Fade out single phone slightly AFTER
                await phoneSingleControls.start({
                    opacity: 0,
                    transition: { duration: 0 }
                });

                // Hold double phone longer before loop restarts
                await new Promise((r) => setTimeout(r, 3000));

                // ---------------------------------
                // STAGE 1: Text fade-in (large)
                // ---------------------------------
                await textControls.start({
                    opacity: 1,
                    x: "124.44px",
                    y: "116px",
                    fontSize: "292.13px",
                    transition: { duration: 0.2, ease: "easeOut" }
                });

                // Hold text at large size
                await new Promise((r) => setTimeout(r, 1000));

                // ---------------------------------
                // STAGE 2: Text shrink and reposition
                // ---------------------------------
                await textControls.start({
                    x: "521px",
                    y: "233px",
                    fontSize: "83.72px",
                    transition: { duration: 1.5, ease: "easeOut" }
                });

                // Hold text at small size before loop restarts
                await new Promise((r) => setTimeout(r, 1000));
            }
        }

        animate();
        return () => { mounted = false };
    }, []);

    return (
        <motion.div
            className="hero-logo-card relative flex h-[560px] w-[1360px] rounded-[16px] items-center justify-center bg-white text-[#1F8E87] shadow-inner overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">

                {/* Laptop */}
                <motion.div className="absolute" animate={laptopControls}>
                    <Image
                        src={laptop}
                        alt="laptop"
                        width={1360}
                        height={560}
                        className="object-cover"
                    />
                </motion.div>

                {/* Single phone */}
                <motion.div className="absolute" animate={phoneSingleControls}>
                    <Image
                        src={phoneSingle}
                        width={1360}
                        height={560}
                        alt="single phone"
                    />
                </motion.div>

                {/* Double phone */}
                <motion.div className="absolute" animate={phoneDoubleControls}>
                    <Image
                        src={phoneDouble}
                        width={1360}
                        height={560}
                        alt="double phone"
                    />
                </motion.div>

                {/* Sprintin Text */}
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
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "nowrap",
                    }}
                >
                    Sprintin
                </motion.div>

            </div>
        </motion.div>
    );
};

export default AnimationTwo;
