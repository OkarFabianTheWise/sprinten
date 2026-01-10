"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

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
    <div className="w-full border border-[#C9E8CC] bg-[#F5FFF2] shadow-sm rounded-[18px] overflow-hidden">
      {/* Image */}
      <div className="relative h-[220px] sm:h-[240px] md:h-[260px] m-4 rounded-[14px] border-4 border-white bg-white overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover rounded-[10px]"
        />
        <div className="absolute bottom-0 inset-x-0 h-[25%] bg-gradient-to-t from-[#F5FFF2] to-transparent" />
      </div>

      {/* Copy */}
      <div className="px-6 py-6">
        <h3 className="font-poly-sans font-normal text-[22px] sm:text-[24px] leading-[32px] text-[#021514]">
          {title}
        </h3>
        <p className="mt-2 font-poly-sans font-normal text-[15px] leading-[22px] tracking-[0.2px] text-[#365B59]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="
        relative
        bg-[#E5F9E0]
        overflow-x-hidden
      "
    >
      {/* Outer constraint */}
      <div className="w-full px-4 sm:px-6 lg:px-0">
        {/* Visual shell - stretches to edges on desktop */}
        <div
          className="
            service-card-shell
            mt-8 mb-8 lg:mt-[54px] lg:mb-8
            bg-[#A2F7B4]
            rounded-[24px] sm:rounded-[20px] lg:rounded-[16px]
            px-4 sm:px-6 md:px-10 xl:px-12
            py-12 sm:py-14 md:py-16
            max-w-[1300px] sm:mx-auto
            lg:max-w-none lg:mx-0 lg:ml-[45px] lg:mr-[45px]
            font-poly-sans
          "
        >
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Left */}
            <div className="w-full lg:max-w-[44rem]">
              <p className="text-sm text-[#858BE3] uppercase font-[14px]">
                OUR SERVICES
              </p>

              <motion.h2
                className="
                  mt-4
                  font-poly-sans
                  font-normal
                  text-[clamp(2.25rem,5vw,3.5rem)]
                  leading-[1.15]
                  tracking-[-0.25px]
                  text-[#021514]
                "
              >
                <motion.span
                  className="block"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  Everything You Need to
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  Launch. Nothing You Don't.
                </motion.span>
              </motion.h2>
            </div>

            {/* Right */}
            <motion.p
              className="
                w-full
                lg:max-w-[28rem]
                font-poly-sans
                font-normal
                text-base
                leading-6
                tracking-[0.5px]
                text-[#365B59]
                pt-0 lg:pt-10
              "
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Sprinten delivers the core design, frontend, and strategy you need to ship a real product fast. Focused execution with streamlined packages and seamless handoffs, built for founders and developers.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
