"use client";

import { motion } from "framer-motion";

export interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
}

const SERVICES: ServiceCardProps[] = [
  {
    img: "/design.png",
    title: "Design",
    description:
      "UI/UX design, product flows, component systems, and brand identity that make your product usable and market-ready.",
  },
  {
    img: "/strategy.png",
    title: "Development",
    description:
      "Fast frontend builds using React, Next.js, Tailwind, and Solana onchain integrations. Clean, scalable, and ready to ship.",
  },
  {
    img: "/development.png",
    title: "Strategy",
    description:
      "Product direction, market-fit validation, content strategy, and launch assets to help you enter the market with confidence.",
  },
];

export function ServiceCard({ img, title, description }: ServiceCardProps) {
  return (
    <motion.div 
      className="w-full border border-[#C9E8CC] bg-[#F5FFF2] overflow-hidden shadow-sm"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Image container with white outline */}
      <div className="relative h-[260px] w-full overflow-hidden m-4 rounded-[12px] border-4 border-white bg-white">
        <img
          src={img}
          alt={title}
          className="absolute inset-0 h-full w-[341px] object-cover rounded-[8px]"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#F5FFF2] to-transparent" />
      </div>
      <motion.div 
        className="px-6 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h3 
          className="font-poly-sans font-normal text-[26px] leading-[32px] text-[#021514]"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="mt-2 font-poly-sans font-normal text-[15px] leading-[22px] tracking-[0.2px] text-[#365B59]"
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="relative bg-[#E5F9E0] px-0 mx-[calc(50%-50vw)] overflow-hidden">
      <motion.div 
        className="service-card-shell mt-8 mb-8 bg-[#A2F7B4] rounded-[16px] px-12 py-16 w-full max-w-[1300px] mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="flex justify-between w-full">
          <div className="w-[703px]">
            <motion.p 
              className="text-sm tracking-[0.5em] text-[#5FA089] uppercase"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              OUR SERVICES
            </motion.p>

            <motion.h2 
              className="mt-4 font-poly-sans font-normal text-[57px] leading-[64px] tracking-[-0.25px] text-[#021514] w-[703px]"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Everything You Need to
              <br />
              Launch. Nothing You Don't.
            </motion.h2>
          </div>

          <motion.p 
            className="w-[447px] font-poly-sans font-normal text-[16px] leading-[24px] tracking-[0.5px] text-[#365B59] pt-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Sprinten delivers the core design, frontend, and strategy you need to ship a real product—fast. No bloated packages. No slow handoffs. Just focused execution built for founders and developers.
          </motion.p>
        </div>

        <motion.div 
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {SERVICES.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
