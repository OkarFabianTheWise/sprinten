// ============================================================
// src/components/Header.tsx
// ============================================================
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white h-[86px] flex items-center sticky top-0 z-50">
      <div
        className="
          flex items-center justify-between
          w-full
          max-w-[1300px] mx-auto
          px-2
          lg:max-w-none lg:mx-0 lg:ml-[40px] lg:mr-[40px] lg:px-0
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-4 text-[#021514] flex-none h-[42px]">
          {/* Link leads to home */}
          <Link href="/" aria-label="Go to home">
            <Image
              src="/headerlogo.png"
              alt="Sprinten"
              width={172}
              height={42}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-[40px]">
          <Link
            href="/allwork"
            className="text-[12px] leading-[16px] tracking-[0.5px] font-semibold hover:text-[#2F9C96] transition"
          >
            Work
          </Link>
          <a
            href={pathname === '/' ? '#services' : '/#services'}
            className="text-[12px] leading-[16px] tracking-[0.5px] font-semibold hover:text-[#2F9C96] transition"
          >
            Services
          </a>
          <a
            href={pathname === '/' ? '#about' : '/#about'}
            className="text-[12px] leading-[16px] tracking-[0.5px] font-semibold hover:text-[#2F9C96] transition"
          >
            About
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex flex-none">
          <a
            href="https://cal.com/sprinten/introcall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="flex items-center justify-center rounded-[8px] bg-[#2F9C96] text-white hover:bg-[#0b8b6c] transition
                         w-[140px] lg:w-[158px] h-[48px] lg:h-[52px] gap-[8px] px-[16px]"
              aria-label="Book a call"
            >
              <span className="text-[13px] lg:text-[14px] font-semibold">
                Book a call
              </span>
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#021514] transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#021514] transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-[#021514] transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[86px] left-0 right-0 bg-white shadow-lg md:hidden border-t">
          <nav className="flex flex-col p-6 gap-4">
            <Link
              href="/allwork"
              className="text-[14px] font-semibold py-2 hover:text-[#2F9C96] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <a
              href={pathname === '/' ? '#services' : '/#services'}
              className="text-[14px] font-semibold py-2 hover:text-[#2F9C96] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href={pathname === '/' ? '#about' : '/#about'}
              className="text-[14px] font-semibold py-2 hover:text-[#2F9C96] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="https://cal.com/sprinten/introcall"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <button className="w-full h-[48px] rounded-[8px] bg-[#2F9C96] text-white font-semibold">
                Book a call
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
