"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="w-full bg-[#021C1A] px-6 md:px-12 lg:px-[60px] pt-10 md:pt-12 lg:pt-[40px]">
      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-12 lg:gap-[60px] mb-12 md:mb-16 lg:mb-20">
        
        {/* LEFT SECTION — LOGO + TAGLINE */}
        <div className="flex-none w-full lg:w-auto">
          <img
            src="/logo.png"
            alt="Sprinten"
            className="w-[140px] h-[100px] sm:w-[160px] sm:h-[60px] md:w-[175px] md:h-[68px] mb-4"
          />
          <p className="text-sm md:text-base text-[#A8B5B3] leading-relaxed">
            Ship Faster. Build Better. Onchain.
          </p>
        </div>

        {/* RIGHT SECTION — THREE COLUMNS */}
        <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-[120px] w-full lg:w-auto lg:pt-20">
          
          {/* QUICK LINK */}
          <div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-4 md:mb-5">
              Quick link
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href={pathname === '/' ? '#home' : '/#home'}
                  className="text-xs md:text-sm text-[#A8B5B3] hover:text-white transition-colors block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={pathname === '/' ? '#services' : '/#services'}
                  className="text-xs md:text-sm text-[#A8B5B3] hover:text-white transition-colors block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/allwork"
                  className="text-xs md:text-sm text-[#A8B5B3] hover:text-white transition-colors block"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Callme_TOC"
                  className="text-xs md:text-sm text-[#A8B5B3] hover:text-white transition-colors block"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-4 md:mb-5">
              Connect
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="https://x.com/Sprint3n"
                  className="text-xs md:text-sm text-[#A8B5B3] hover:text-white transition-colors block"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/sprinten"
                  className="text-xs md:text-sm text-[#A8B5B3] hover:text-white transition-colors block"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sprint3n"
                  className="text-xs md:text-sm text-[#A8B5B3] hover:text-white transition-colors block"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:sprintenagency@gmail.com"
                  className="text-xs md:text-sm text-[#A8B5B3] hover:text-white transition-colors block"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-sm md:text-base font-semibold text-white mb-4 md:mb-5">
              Legal
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="/privacy"
                  className="text-xs md:text-sm text-[#A8B5B3] hover:text-white transition-colors block"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/allwork"
                  className="text-xs md:text-sm text-[#A8B5B3] hover:text-white transition-colors block"
                >
                  Work
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full border-t border-white/10 py-5 md:py-6">
        <p className="text-xs md:text-sm font-semibold text-[#8CA1A0] text-center">
          © 2025 Sprinten - All rights reserved
        </p>
      </div>
    </footer>
  );
}