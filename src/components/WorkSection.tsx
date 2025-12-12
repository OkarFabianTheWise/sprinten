"use client";

import { motion, Variants } from "framer-motion";

const WORK_ITEMS = [
  {
    title: "Airbills pay",
    img: "/airbills.png",
    duration: "3 weeks",
  },
  {
    title: "AI platform for Sprinten",
    img: "/aiplatform.png",
    duration: "3 weeks",
  },
  {
    title: "Airbills pay",
    img: "/airbills.png",
    duration: "3 weeks",
  },
  {
    title: "AI platform for Sprinten",
    img: "/aiplatform.png",
    duration: "3 weeks",
  },
];

const imageVariants: Variants = {
  hidden: { scale: 1.08, opacity: 0 },
  Variant4: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.33, 0.01, 0.68, 0.99], delay: 0.001 },
  },
};

export function WorkSection() {
  return (
    <section id="work" className="min-h-screen bg-[#E5F9E0] py-16 px-8 mx-[calc(50%-50vw)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#858BE3] text-sm font-medium tracking-[0.2em] mb-4 uppercase"
          >
            OUR WORK
          </p>
          <motion.h1 
            className="font-[400] text-[57px] leading-[64px] tracking-[-0.25px] text-center text-[#021514] overflow-hidden"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Products We've Shipped, Fast.
          </motion.h1>
          <motion.p 
            className="font-[400] text-[16px] leading-[24px] tracking-[0.5px] text-center text-[#8CA1A0] max-w-3xl mx-auto overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            A look at the real products, MVPs, dashboards, and frontends we've
            delivered for founders and developers across the Solana ecosystem.
          </motion.p>
        </div>
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {WORK_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#E5F9E0] overflow-hidden h-[443px]"
            >
              {/* Image */}
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-[371px] object-cover bg-gray-100"
                variants={imageVariants}
                initial="hidden"
                whileInView="Variant4"
                viewport={{ once: false, amount: 0.5 }}
              />
              {/* Text block – 56px height */}
              <div className="p-0 py-2 h-[56px]">
                  <h3 
                    className="text-[16px] leading-[24px] font-semibold tracking-[0.15px] text-[#021514] mb-[8px]"
                  >
                  {item.title}
                  </h3>
                  <div 
                  className="flex items-center text-gray-500 text-[14px] leading-[24px]"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-teal-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeWidth="2" d="M12 6v6l4 2" />
                  </svg>
                  <span>{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Button */}
        <div 
          className="px-8 py-3 border-2 border-teal-500 text-teal-700 rounded-lg font-medium hover:bg-teal-50 transition-colors mx-auto w-fit"
        >
          See all work
        </div>
      </div>
    </section>
  );
}
