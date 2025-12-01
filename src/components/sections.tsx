"use client";

import { motion } from "framer-motion";
import {
  // audiences,
  heroCopy,
  // navLinks,
  pillars,
  // projects,
  // testimonial,
  whySprinten
} from "@/data/content";
import { ServicesSection as ServicesSectionComponent } from "./services";

// const shimmer =
//   "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-60%] before:animate-[shine_6s_linear_infinite]";

export function HeroSection() {
  return (
    <section className="space-y-6 px-0 mx-[calc(50%-50vw)]">

      <div className="hero-shell w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[192px] overflow-hidden px-8 text-primary-100">
        <div className="flex h-full items-center justify-between gap-10">
          <motion.div 
            className="w-[379px] h-[192px] space-y-2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.h1 
              className="font-poly-sans text-5xl leading-tight text-[#A2F7B4]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Ship Faster.
              <br />
              Build Better.
              <br />
              Onchain.
            </motion.h1>
          </motion.div>

          {/* right column — made relative so the arrow box can be absolutely positioned */}
          <motion.div 
            className="w-[437px] relative flex flex-col items-start justify-center space-y-4 text-white"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.p 
              className="text-lg text-[#DFFFE2]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {heroCopy.body}
            </motion.p>

            {/* positioned arrow box with text and hover animation */}
            <motion.button
              className="
                relative flex items-center 
                w-[200px] h-[40px]
                rounded-[8px]
                gap-[24px]
                px-[12px]
                transition-all 
                duration-500 
                ease-out 
                hover:translate-y-[-1px]
              "
              aria-label="Start a Sprint"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Left circular arrow container — use flex centering, remove padding */}
              <span
                className="
                  flex items-center justify-center 
                  w-[40px] h-[40px] 
                  rounded-full 
                  bg-[#1F7E77]
                "
              >
                {/* Bold Arrow — centered via parent flex */}
                <span
                  className="
                    text-white 
                    leading-none
                    font-bold
                    text-[16px]
                    select-none
                    pointer-events-none
                  "
                  aria-hidden="true"
                >
                  →
                </span>
              </span>

              {/* Text */}
              <span className="text-white text-sm font-semibold whitespace-nowrap">
                Start a Sprint
              </span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className="mt-10 w-full"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <HeroLogoCard />
        </motion.div>
      </div>
    </section>
  );
}

function HeroLogoCard() {
  return (
    <motion.div 
      className="hero-logo-card flex h-[312px] w-full items-center justify-center rounded-[16px] bg-[#E5F9E0] text-[#1F8E87] shadow-inner"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span 
        className="font-display text-[250px] leading-none tracking-tight"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Sprinten
      </motion.span>
    </motion.div>
  );
}

export function WhySection() {
  return (
    <section
      className="
        relative 
        bg-[#E5F9E0] 
        px-0 
        mx-[calc(50%-50vw)] 
        h-[730px] 
        overflow-hidden
      "
    >
      {/* Main content container */}
      <div className="mx-auto max-w-7xl px-8 py-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] relative z-10 h-full">

        {/* LEFT COLUMN */}
        <div>
          {/* Label */}
          <motion.p 
            className="text-sm tracking-[0.5em] text-[#5FA089] uppercase"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {whySprinten.label}
          </motion.p>

          {/* MAIN HEADINGS */}
          <motion.h2
            className="
              mt-6
              font-poly-sans 
              font-normal 
              text-[57px] 
              leading-[64px] 
              tracking-[-0.25px]
              text-[#021514]
              w-[603px]
            "
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.span 
              className="block"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Built for Builders.
            </motion.span>
            <motion.span 
              className="block"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Optimized for Speed.
            </motion.span>
            <motion.span 
              className="block"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Trusted for Quality.
            </motion.span>
          </motion.h2>

          {/* BODY TEXT */}
          <motion.p
            className="
              mt-6 
              font-poly-sans 
              font-normal
              text-[16px]
              leading-[24px]
              tracking-[0.5px]
              text-[#8CA1A0]
              w-[603px]
            "
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Sprinten gives Solana founders and developers the perfect mix of speed,
            clarity, and execution. No long cycles. No agency fluff. Just fast,
            high-quality product design and frontend shipping built for real users.
          </motion.p>

          {/* CTA */}
          <motion.div 
            className="mt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.button
              className="
                relative flex items-center 
                w-[220px] h-[46px] 
                gap-4 
                transition-all 
                duration-300 
                ease-out 
                hover:-translate-y-[1px]
              "
              whileHover={{ scale: 1.05 }}
            >
              <span className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#1F7E77]">
                <span className="text-white font-bold text-[18px]">→</span>
              </span>
              <span className="text-[15px] font-semibold text-[#00423d]">
                Start a Sprint
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-12 pt-6">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={pillar.title}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {/* PILLAR TITLE */}
              <motion.h3
                className="
                  font-poly-sans 
                  font-normal
                  text-[22px]
                  leading-[28px]
                  tracking-[0px]
                  text-[#021514]
                  w-[559px]
                "
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {pillar.title}
              </motion.h3>

              {/* PILLAR DESCRIPTION */}
              <motion.p 
                className="mt-2 text-[16px] leading-[24px] text-[#6C837F] w-[559px]"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {pillar.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND OUTLINE TEXT */}
      <motion.div 
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div
          className="
            relative 
            w-[1399px] 
            h-[225px] 
            overflow-visible
          "
        >
          <span
            className="
              block
              text-[200.14px]
              leading-[224.72px]
              tracking-[-0.88px]
              whitespace-nowrap
            "
            style={{
              fontFamily: 'PolySans Trial, sans-serif',
              fontWeight: 400,
              color: 'transparent',
              WebkitTextStroke: '0.97px #A2F7B4',
              paintOrder: 'stroke'
            }}
          >
            Sprinten&nbsp;Studio
          </span>
        </div>
      </motion.div>
    </section>
  );
}

// /design.png
// /development.png
// /strategy.png
export function ServicesSection() {
  return <ServicesSectionComponent />;
}


// /airbills.png
// /aiplatform.png

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

export function WorkSection() {
  return (
    <section className="min-h-screen bg-[#E5F9E0] py-16 px-8 mx-[calc(50%-50vw)]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            className="text-[#7b8fda] text-sm font-medium tracking-[0.2em] mb-4 uppercase"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            OUR WORK
          </motion.p>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Products We've Shipped, Fast.
          </motion.h1>

          <motion.p 
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            A look at the real products, MVPs, dashboards, and frontends we've
            delivered for founders and developers across the Solana ecosystem.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {WORK_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[#E5F9E0] overflow-hidden shadow-sm h-[443px]"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[371px] object-cover bg-gray-100"
              />

              {/* Text block – 56px height */}
              <div className="p-0 py-2 h-[56px]">
                <motion.h3 
                  className="text-[16px] leading-[24px] font-semibold tracking-[0.15px] text-[#021514] mb-[8px]"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {item.title}
                </motion.h3>

                <motion.div 
                  className="flex items-center text-gray-500 text-[14px] leading-[24px]"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                  viewport={{ once: false, amount: 0.5 }}
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
                </motion.div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Button */}
        <motion.div 
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.button 
            className="px-8 py-3 border-2 border-teal-500 text-teal-700 rounded-lg font-medium hover:bg-teal-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See all work
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <div className="min-h-screen bg-[#DFE8D4] px-4 md:px-8 lg:px-12 py-16 mx-[calc(50%-50vw)]">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Content - Side by Side */}
        <div className="flex gap-10 mb-32">
          {/* Left Column - Header */}
          <div className="flex-1">
            <motion.p
              className="text-[#5B9C96] text-sm font-medium tracking-wider mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              WHO WE SERVE
            </motion.p>
            <motion.h1
              className="text-[57px] leading-[72px] tracking-[-0.25px] font-normal text-[#021514] mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Built for Founders. Designed for Developers. Ready for Anyone Shipping Onchain.
            </motion.h1>
            <motion.p 
              className="text-[#7A9490] text-lg leading-[28px] mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Sprinten supports the people building the next generation of Solana products — whether you're writing smart contracts, shaping a new startup, or taking an idea to market.
            </motion.p>
            <motion.button 
              className="flex items-center gap-2 bg-[#5B9C96] text-white px-6 py-3 rounded-full hover:bg-[#4A8B85] transition-colors"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">→</span>
              <span className="font-medium">Book a call</span>
            </motion.button>
          </div>

          {/* Right Column - Audience Cards */}
          <div className="flex-1 grid gap-12">
            {[
              {
                title: "For Developers",
                text: "You build the logic, we handle the design and frontend. No more bottlenecks, no more waiting on UI. Plug us in and keep shipping."
              },
              {
                title: "For Founders & Startups",
                text: "Turn your idea into a real, usable product in weeks. Fast design, fast frontend, clear strategy, all aligned with your vision."
              },
              {
                title: "For Teams Entering Blockchain",
                text: "SMEs and enterprises looking to explore blockchain get a clear, guided path with clean UX, rapid prototyping, and confident execution."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <motion.h3 
                  className="text-2xl font-normal mb-3 text-[#021514]"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {card.title}
                </motion.h3>
                <motion.p 
                  className="text-[#7A9490] leading-[26px]"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + i * 0.15 }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {card.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Giant Sprinten Text */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.h2 
            className="text-[#5B9C96] font-normal text-[12rem] md:text-[16rem] lg:text-[20rem] leading-none tracking-tight opacity-40"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Sprinten
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
}

export function TestimonialSection() {
  return (
    <section 
      className="relative flex items-center justify-center"
      style={{
        width: '1440px',
        height: '598px',
        backgroundColor: '#021514'
      }}
    >
      <div className="max-w-[1200px] px-12 w-full">
        {/* Testimonial Label */}
        <motion.p 
          className="uppercase tracking-widest mb-8"
          style={{
            color: '#8B9FFF',
            fontSize: '12px',
            letterSpacing: '0.15em',
            fontWeight: 500
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          TESTIMONIAL
        </motion.p>

        {/* Main Quote */}
        <div className="flex items-start justify-between gap-8">
          <motion.blockquote 
            className="max-w-[901px]"
            style={{
              fontSize: '57px',
              lineHeight: '64px',
              letterSpacing: '-0.25px',
              color: '#FFFFFF',
              fontWeight: 400
            }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Sprinten delivered our MVP in record time. Clean UX, clean code, zero back-and-forth drama
          </motion.blockquote>

          {/* Quote Icon */}
          <motion.svg 
            width="60" 
            height="60" 
            viewBox="0 0 60 60" 
            fill="none"
            style={{ flexShrink: 0, marginTop: '8px' }}
            initial={{ rotate: -90, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <path 
              d="M15 25L15 15L25 15M45 25L45 15L35 15" 
              stroke="#4FFFB0" 
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.svg>
        </div>

        {/* Author Info */}
        <motion.div 
          className="mt-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p 
            style={{
              fontSize: '18px',
              color: '#FFFFFF',
              fontWeight: 500,
              marginBottom: '4px'
            }}
          >
            Edem vee
          </p>
          <p 
            style={{
              fontSize: '14px',
              color: '#8B9FFF',
              letterSpacing: '0.05em'
            }}
          >
            Co-founder- Paykin
          </p>
        </motion.div>

        {/* Navigation Arrows */}
        <motion.div 
          className="absolute bottom-12 right-12 flex gap-8"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.button 
            className="hover:opacity-70 transition-opacity"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path 
                d="M25 10L15 20L25 30" 
                stroke="#FFFFFF" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          <motion.button 
            className="hover:opacity-70 transition-opacity"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path 
                d="M15 10L25 20L15 30" 
                stroke="#FFFFFF" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section 
      className="relative flex items-center justify-center"
      style={{
        width: '1440px',
        height: '510px',
        backgroundColor: '#021514'
      }}
    >
      {/* Inner green container */}
      <motion.div 
        className="flex flex-col items-center justify-center text-center"
        style={{
          width: '1350px',
          height: '356px',
          backgroundColor: '#A2F7B4',
          borderRadius: '16px',
          padding: '60px 80px'
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Heading */}
        <motion.h2 
          style={{
            fontSize: '56px',
            lineHeight: '64px',
            fontWeight: 400,
            color: '#021514',
            marginBottom: '16px',
            letterSpacing: '-0.5px'
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Ready to Ship Faster?
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          style={{
            fontSize: '18px',
            lineHeight: '28px',
            color: '#034A3D',
            maxWidth: '700px',
            marginBottom: '32px'
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Let's turn your idea, prototype, or draft UI into a real product , designed, built, and ready for users.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.button 
            className="transition-all hover:opacity-90"
            style={{
              backgroundColor: '#2E8B7D',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a call
          </motion.button>
          
          <motion.button 
            className="transition-all hover:bg-white/10"
            style={{
              backgroundColor: 'transparent',
              color: '#2E8B7D',
              padding: '14px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 600,
              border: '2px solid #2E8B7D',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a sprint
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer 
      className="relative"
      style={{
        width: '1440px',
        height: '384px',
        backgroundColor: '#021514'
      }}
    >
      {/* Main footer content */}
      <div 
        className="absolute flex justify-between"
        style={{
          width: '1320px',
          height: '148px',
          top: '80px',
          left: '60px'
        }}
      >
        {/* Left side - Logo and tagline */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.img 
            src="/logo.png" 
            alt="Sprinten" 
            style={{
              width: '175.35px',
              height: '90px',
              marginBottom: '16px'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          />
          <motion.p 
            style={{
              fontSize: '16px',
              color: '#8B9FFF',
              marginTop: '12px'
            }}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Ship Faster. Build Better. Onchain.
          </motion.p>
        </motion.div>

        {/* Quick link */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '16px'
            }}
          >
            Quick link
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#home" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Home
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#services" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Services
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="#work" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Work
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#contact" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Connect */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '16px'
            }}
          >
            Connect
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="https://twitter.com" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Twitter
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="https://linkedin.com" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Linkidin
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="https://instagram.com" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="mailto:contact@sprinten.com" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Email
              </a>
            </motion.li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h3 
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '16px'
            }}
          >
            Legal
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#terms" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Terms
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#privacy" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Privacy
              </a>
            </motion.li>
            <motion.li 
              style={{ marginBottom: '12px' }}
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#work" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Work
              </a>
            </motion.li>
            <motion.li
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <a 
                href="#contact" 
                style={{ 
                  fontSize: '14px', 
                  color: '#8B9FFF',
                  textDecoration: 'none'
                }}
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom copyright with divider */}
      <motion.div 
        className="absolute"
        style={{
          bottom: '40px',
          left: '60px',
          right: '60px'
        }}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div 
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#8B9FFF',
            opacity: 0.2,
            marginBottom: '24px'
          }}
        />
        <p 
          style={{
            fontSize: '14px',
            color: '#8B9FFF',
            textAlign: 'center'
          }}
        >
          © 2025 Sprinten- All right reserved
        </p>
      </motion.div>
    </footer>
  );
}
