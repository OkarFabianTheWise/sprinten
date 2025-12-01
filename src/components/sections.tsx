import {
  audiences,
  heroCopy,
  navLinks,
  pillars,
  projects,
  testimonial,
  whySprinten
} from "@/data/content";
import { ServicesSection as ServicesSectionComponent } from "./services";
import { useEffect, useState } from "react";

const shimmer =
  "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-60%] before:animate-[shine_6s_linear_infinite]";

export function HeroSection() {
  return (
    <section className="space-y-6 px-0 mx-[calc(50%-50vw)]">

      <div className="hero-shell w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[192px] overflow-hidden px-8 text-primary-100">
        <div className="flex h-full items-center justify-between gap-10">
          <div className="w-[379px] h-[192px] space-y-2">
            <h1 className="font-poly-sans text-5xl leading-tight text-[#A2F7B4]">
              Ship Faster.
              <br />
              Build Better.
              <br />
              Onchain.
            </h1>
          </div>

          {/* right column — made relative so the arrow box can be absolutely positioned */}
          <div className="w-[437px] relative flex flex-col items-start justify-center space-y-4 text-white">
            <p className="text-lg text-[#DFFFE2]">
              {heroCopy.body}
            </p>

            {/* positioned arrow box with text and hover animation */}
            <button
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
            </button>
          </div>
        </div>

        <div className="mt-10 w-full">
          <HeroLogoCard />
        </div>
      </div>
    </section>
  );
}

function HeroLogoCard() {
  return (
    <div className="hero-logo-card flex h-[312px] w-full items-center justify-center rounded-[16px] bg-[#E5F9E0] text-[#1F8E87] shadow-inner">
      <span className="font-display text-[140px] leading-none tracking-tight">Sprinten</span>
    </div>
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
          <p className="text-sm tracking-[0.5em] text-[#5FA089] uppercase">
            {whySprinten.label}
          </p>

          {/* MAIN HEADINGS */}
          <h2
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
          >
            <span className="block">Built for Builders.</span>
            <span className="block">Optimized for Speed.</span>
            <span className="block">Trusted for Quality.</span>
          </h2>

          {/* BODY TEXT */}
          <p
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
          >
            Sprinten gives Solana founders and developers the perfect mix of speed,
            clarity, and execution. No long cycles. No agency fluff. Just fast,
            high-quality product design and frontend shipping built for real users.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <button
              className="
                relative flex items-center 
                w-[220px] h-[46px] 
                gap-4 
                transition-all 
                duration-300 
                ease-out 
                hover:-translate-y-[1px]
              "
            >
              <span className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#1F7E77]">
                <span className="text-white font-bold text-[18px]">→</span>
              </span>
              <span className="text-[15px] font-semibold text-[#00423d]">
                Start a Sprint
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-12 pt-6">
          {pillars.map((pillar) => (
            <div key={pillar.title}>
              {/* PILLAR TITLE */}
              <h3
                className="
                  font-poly-sans 
                  font-normal
                  text-[22px]
                  leading-[28px]
                  tracking-[0px]
                  text-[#021514]
                  w-[559px]
                "
              >
                {pillar.title}
              </h3>

              {/* PILLAR DESCRIPTION */}
              <p className="mt-2 text-[16px] leading-[24px] text-[#6C837F] w-[559px]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BACKGROUND OUTLINE TEXT */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
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
      </div>
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
          <p className="text-[#7b8fda] text-sm font-medium tracking-[0.2em] mb-4 uppercase">
            OUR WORK
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Products We've Shipped, Fast.
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A look at the real products, MVPs, dashboards, and frontends we've
            delivered for founders and developers across the Solana ecosystem.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {WORK_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white overflow-hidden shadow-sm h-[443px]"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[371px] object-cover bg-gray-100"
              />

              {/* Text block – 56px height */}
              <div className="p-0 py-2 h-[56px]">
                <h3 className="text-[16px] leading-[24px] font-semibold tracking-[0.15px] text-[#021514] mb-[8px]">
                  {item.title}
                </h3>

                <div className="flex items-center text-gray-500 text-[14px] leading-[24px]">
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
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-teal-500 text-teal-700 rounded-lg font-medium hover:bg-teal-50 transition-colors">
            See all work
          </button>
        </div>

      </div>
    </section>
  );
}

export function AudienceSection() {
  const [labelVariant, setLabelVariant] = useState<string>("default");
  const [headingVariant, setHeadingVariant] = useState<string>("default");
  const [cardVariants, setCardVariants] = useState<string[]>(["default", "default", "default"]);

  useEffect(() => {
    // After mount, trigger heading change to Variant3 after 800ms
    const tHeading = setTimeout(() => {
      setHeadingVariant("Variant3");
    }, 800);
    // Stagger the right-column cards after heading animation completes
    const tCards = setTimeout(() => {
      setCardVariants(["Variant3", "Variant3", "Variant3"]);
    }, 1600);
    return () => {
      clearTimeout(tHeading);
      clearTimeout(tCards);
    };
  }, []);

  function animStyle(variant: string, delayMs = 0) {
    const active = variant !== "default";
    const transform = active ? "translateY(0)" : "translateY(20px)";
    const opacity = active ? 1 : 0;
    const transition = `transform 800ms ease-out ${delayMs}ms, opacity 800ms ease-out ${delayMs}ms`;
    return {
      transform,
      opacity,
      transition,
      willChange: "transform, opacity",
    } as React.CSSProperties;
  }

  return (
    <div className="min-h-screen bg-[#DFE8D4] px-4 md:px-8 lg:px-12 py-16 mx-[calc(50%-50vw)]">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Content - Side by Side */}
        <div className="flex gap-10 mb-32">
          {/* Left Column - Header */}
          <div className="flex-1">
            <p
              className="text-[#5B9C96] text-sm font-medium tracking-wider mb-6"
              onMouseEnter={() => setLabelVariant("Variant2")}
              onMouseLeave={() => setLabelVariant("default")}
              style={animStyle(labelVariant, 0)}
            >
              {labelVariant === "Variant2" ? "Variant2" : "WHO WE SERVE"}
            </p>
            <h1
              className="text-[57px] leading-[72px] tracking-[-0.25px] font-normal text-[#021514] mb-8"
              style={animStyle(headingVariant, 800)}
            >
              {headingVariant === "Variant3"
                ? "Variant3"
                : "Built for Founders. Designed for Developers. Ready for Anyone Shipping Onchain."}
            </h1>
            <p className="text-[#7A9490] text-lg leading-[28px] mb-8">
              Sprinten supports the people building the next generation of Solana products — whether you're writing smart contracts, shaping a new startup, or taking an idea to market.
            </p>
            <button className="flex items-center gap-2 bg-[#5B9C96] text-white px-6 py-3 rounded-full hover:bg-[#4A8B85] transition-colors">
              <span className="text-2xl">→</span>
              <span className="font-medium">Book a call</span>
            </button>
          </div>

          {/* Right Column - Audience Cards */}
          <div className="flex-1 grid gap-12">
            <div>
              <h3 className="text-2xl font-normal mb-3 text-[#021514]" style={animStyle(cardVariants[0], 1000)}>
                For Developers
              </h3>
              <p className="text-[#7A9490] leading-[26px]" style={animStyle(cardVariants[0], 1200)}>
                You build the logic, we handle the design and frontend. No more bottlenecks, no more waiting on UI. Plug us in and keep shipping.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-normal mb-3 text-[#021514]" style={animStyle(cardVariants[1], 1200)}>
                For Founders & Startups
              </h3>
              <p className="text-[#7A9490] leading-[26px]" style={animStyle(cardVariants[1], 1400)}>
                Turn your idea into a real, usable product in weeks. Fast design, fast frontend, clear strategy, all aligned with your vision.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-normal mb-3 text-[#021514]" style={animStyle(cardVariants[2], 1400)}>
                For Teams Entering Blockchain
              </h3>
              <p className="text-[#7A9490] leading-[26px]" style={animStyle(cardVariants[2], 1600)}>
                SMEs and enterprises looking to explore blockchain get a clear, guided path with clean UX, rapid prototyping, and confident execution.
              </p>
            </div>
          </div>
        </div>

        {/* Giant Sprinten Text */}
        <div className="flex items-center justify-center">
          <h2 className="text-[#5B9C96] font-normal text-[12rem] md:text-[16rem] lg:text-[20rem] leading-none tracking-tight">
            Sprinten
          </h2>
        </div>
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
        <p 
          className="uppercase tracking-widest mb-8"
          style={{
            color: '#8B9FFF',
            fontSize: '12px',
            letterSpacing: '0.15em',
            fontWeight: 500
          }}
        >
          TESTIMONIAL
        </p>

        {/* Main Quote */}
        <div className="flex items-start justify-between gap-8">
          <blockquote 
            className="max-w-[901px]"
            style={{
              fontSize: '57px',
              lineHeight: '64px',
              letterSpacing: '-0.25px',
              color: '#FFFFFF',
              fontWeight: 400
            }}
          >
            Sprinten delivered our MVP in record time. Clean UX, clean code, zero back-and-forth drama
          </blockquote>

          {/* Quote Icon */}
          <svg 
            width="60" 
            height="60" 
            viewBox="0 0 60 60" 
            fill="none"
            style={{ flexShrink: 0, marginTop: '8px' }}
          >
            <path 
              d="M15 25L15 15L25 15M45 25L45 15L35 15" 
              stroke="#4FFFB0" 
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Author Info */}
        <div className="mt-10">
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
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-12 right-12 flex gap-8">
          <button 
            className="hover:opacity-70 transition-opacity"
            aria-label="Previous testimonial"
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
          </button>
          <button 
            className="hover:opacity-70 transition-opacity"
            aria-label="Next testimonial"
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
          </button>
        </div>
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
      <div 
        className="flex flex-col items-center justify-center text-center"
        style={{
          width: '1350px',
          height: '356px',
          backgroundColor: '#A2F7B4',
          borderRadius: '16px',
          padding: '60px 80px'
        }}
      >
        {/* Heading */}
        <h2 
          style={{
            fontSize: '56px',
            lineHeight: '64px',
            fontWeight: 400,
            color: '#021514',
            marginBottom: '16px',
            letterSpacing: '-0.5px'
          }}
        >
          Ready to Ship Faster?
        </h2>

        {/* Subheading */}
        <p 
          style={{
            fontSize: '18px',
            lineHeight: '28px',
            color: '#034A3D',
            maxWidth: '700px',
            marginBottom: '32px'
          }}
        >
          Let's turn your idea, prototype, or draft UI into a real product , designed, built, and ready for users.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button 
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
          >
            Book a call
          </button>
          
          <button 
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
          >
            Start a sprint
          </button>
        </div>
      </div>
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
        <div>
          <img 
            src="/logo.png" 
            alt="Sprinten" 
            style={{
              width: '175.35px',
              height: '90px',
              marginBottom: '16px'
            }}
          />
          <p 
            style={{
              fontSize: '16px',
              color: '#8B9FFF',
              marginTop: '12px'
            }}
          >
            Ship Faster. Build Better. Onchain.
          </p>
        </div>

        {/* Quick link */}
        <div>
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
            <li style={{ marginBottom: '12px' }}>
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
            </li>
            <li style={{ marginBottom: '12px' }}>
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
            </li>
            <li style={{ marginBottom: '12px' }}>
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
            </li>
            <li>
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
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
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
            <li style={{ marginBottom: '12px' }}>
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
            </li>
            <li style={{ marginBottom: '12px' }}>
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
            </li>
            <li style={{ marginBottom: '12px' }}>
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
            </li>
            <li>
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
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
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
            <li style={{ marginBottom: '12px' }}>
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
            </li>
            <li style={{ marginBottom: '12px' }}>
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
            </li>
            <li style={{ marginBottom: '12px' }}>
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
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright with divider */}
      <div 
        className="absolute"
        style={{
          bottom: '40px',
          left: '60px',
          right: '60px'
        }}
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
      </div>
    </footer>
  );
}

