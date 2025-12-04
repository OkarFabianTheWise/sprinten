import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { StaticImageData } from "next/image";

type Props = {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
} & Record<string, any>;

const FloatingIcon: React.FC<Props> = ({ src, alt = "icon", className = "", ...rest }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const imgSrc = typeof src === "string" ? src : (src as StaticImageData).src;

  return (
    <motion.img
      src={imgSrc}
      alt={alt}
      className={className}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
      dragElastic={0.2}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    />
  );
};

export default FloatingIcon;
